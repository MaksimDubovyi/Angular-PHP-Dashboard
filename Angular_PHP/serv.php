<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
header('Content-Type: application/json');

function connect($host='localhost', $user='root', $pass='', $dbname='angular')
	{ 
		$mysqli = @new mysqli($host, $user, $pass, $dbname);
		if ($mysqli->connect_errno) 
		{
			die('Error connection: ' . $mysqli->connect_errno);
		}
		$mysqli->query("set names 'utf8'"); 
		return $mysqli;
	}
function register($name,$login,$pass,$phone,$gender,$email)
{
    $name=trim(htmlspecialchars($name));
    $login=trim(htmlspecialchars($login));
    $pass=trim(htmlspecialchars($pass));
    $phone=trim(htmlspecialchars($phone));
    $gender=trim(htmlspecialchars($gender));
    $email=trim(htmlspecialchars($email));
    $mysqli = connect();
    $ins='insert into users (name,login,pass,phone,gender,email) values("'.$name.'","'.$login.'","'. md5($pass).'","'.$phone.'","'.$gender.'","'.$email.'")';
    $mysqli = connect();
     
    if (!$mysqli->query($ins)) 
    {
        return false; 
    } 
    return true;
}
function login($login,$pass)
{
    $login=trim(htmlspecialchars($login));
    $pass=trim(htmlspecialchars($pass));
        $row=0;
        $mysqli = connect(); 
		$sel='select * from users where login="'.$login.'" and pass="'.md5($pass).'"';
		$res=$mysqli->query($sel);
		if($row=mysqli_fetch_array($res, MYSQLI_NUM)) 		
			return true; 
		else 
		return false; 
		
}
function loginUser($login,$pass)
{
    $login=trim(htmlspecialchars($login));
    $pass=trim(htmlspecialchars($pass));
    $arr=array();
    $mysqli = connect();
    $sel='select * from users where login="'.$login.'" and pass="'.md5($pass).'"';
    $res=$mysqli->query($sel);
    if($row=mysqli_fetch_array($res, MYSQLI_NUM))
    {
        $arr['login']=$row[2];
        $arr['name']=$row[1];
        $arr['email']=$row[6];
        $arr['phone']=$row[4];
        $arr['gender']=$row[5];
        if(isset($arr['login']))
        echo json_encode($arr);
        else
            echo 7;
    }
    else
        echo false;

}
function EditUser($name,$login,$pass,$phone,$gender,$email)
{
    $name=trim(htmlspecialchars($name));
    $login=trim(htmlspecialchars($login));
    $pass=trim(htmlspecialchars($pass));
    $phone=trim(htmlspecialchars($phone));
    $gender=trim(htmlspecialchars($gender));
    $email=trim(htmlspecialchars($email));
    $mysqli = connect();
    $sel='select * from users where login="'.$login.'" and pass="'.md5($pass).'"';
    $res=$mysqli->query($sel);
    $row=mysqli_fetch_array($res, MYSQLI_NUM);
    $sql = "UPDATE angular.users SET name="."'$name'".",phone="."'$phone'".",gender="."'$gender'".",email="."'$email'"."  WHERE id="."$row[0]";


    if ($mysqli->query($sql) === TRUE) {
        $sel='select * from users where login="'.$login.'" and pass="'.md5($pass).'"';
        $res=$mysqli->query($sel);
        if($row=mysqli_fetch_array($res, MYSQLI_NUM))
        {
            $arr['login']=$row[2];
            $arr['name']=$row[1];
            $arr['email']=$row[6];
            $arr['phone']=$row[4];
            $arr['gender']=$row[5];
            if(isset($arr['login']))
                echo json_encode($arr);
            else
                echo 7;
        }
        else
            echo false;
    } else {
        echo "Error updating record: " . $mysqli->error;
    }

    $mysqli->close();

}
function Delete($login,$pass)
{
    $login=trim(htmlspecialchars($login));
    $pass=trim(htmlspecialchars($pass));
    $mysqli = connect();
    $sel='DELETE FROM users WHERE login="'.$login.'" and pass="'.md5($pass).'"';
    if($mysqli->query($sel))
        echo"Запись удалена!";
    else
        echo "Ошибка: " . $mysqli->error;
    $mysqli->close();
}
function Show()
{
    $arrs=array();
    $mysqli = connect();
    $sel='select * from users';
    $res=$mysqli->query($sel);
    while($row=mysqli_fetch_array($res, MYSQLI_NUM))
    {
        $arr['login']=$row[2];
        $arr['name']=$row[1];
        $arr['email']=$row[6];
        $arr['phone']=$row[4];
        $arr['gender']=$row[5];
        array_push($arrs,$arr);
    }
    echo json_encode($arrs);
}

$result=0;
if(isset($_GET['number']))
{
    $num = $_GET['number'];
    if( $num ==1)
    {
        $name = $_GET['name'];
        $phone = $_GET['phone'];
        $email = $_GET['email'];
        $gender = $_GET['gender'];
        $login = $_GET['login'];
        $pass1 = $_GET['pass1'];
       if( register($name,$login,$pass1,$phone,$gender,$email)==true)
       {
           $result=1;
       }
       else
       {
           $result=0;
       }
        echo $result;
    }
    else if( $num ==2)
    {
        $login = $_GET['login'];
        $pass1 = $_GET['pass1'];
        if( login($login,$pass1)==true)
        {
            $result=1;
        }
        else
        {
            $result=0;
        }
         echo $result;
     }
    else if( $num ==3)
    {
        $login = $_GET['login'];
        $pass1 = $_GET['pass1'];
        loginUser($login,$pass1);

    }
    else if( $num ==4)
    {
        $name = $_GET['name'];
        $phone = $_GET['phone'];
        $email = $_GET['email'];
        $gender = $_GET['gender'];
        $login = $_GET['login'];
        $pass1 = $_GET['pass1'];
        EditUser($name,$login,$pass1,$phone,$gender,$email);

    }
    else if( $num ==5)
    {
        Show();
    }
    else if( $num ==6)
    {
        $login = $_GET['login'];
        $pass1 = $_GET['pass1'];
        Delete($login,$pass1);
    }
}

?>