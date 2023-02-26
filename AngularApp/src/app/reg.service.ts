import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class RegistrService 
{
   constructor(private http: HttpClient) { }
    vr:number=1;
     RegData(name:string,email:string,phone:string,gender:string,login:string,pass1:string) 
      {
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr+'&name='+name+'&email='+email+'&phone='+phone+'&gender='+gender+'&login='+login+'&pass1='+pass1);
      }
       
}