export class User {

    login:string;
    name:string;
    email:string; 
    phone:string;
    gender:string;

    constructor(login: string, name: string, email: string,phone: string,gender:string)
     {
        this.login = login;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }

}