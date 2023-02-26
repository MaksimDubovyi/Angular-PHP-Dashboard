import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class ChildService 
{
   constructor(private http: HttpClient) { }
    vr:number;
    EditData(name:string,email:string,phone:string,gender:string,login:string,pass1:string) 
      {
         this.vr=4;
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr+'&name='+name+'&email='+email+'&phone='+phone+'&gender='+gender+'&login='+login+'&pass1='+pass1);
      }
      DeleteData(login:string,pass1:string) 
      {
         this.vr=6;
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr+'&login='+login+'&pass1='+pass1);
      } 
}