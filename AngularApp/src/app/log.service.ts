import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class LogService 
{
   constructor(private http: HttpClient) { }
    vr:number=2;
     LogData(login:string,pass1:string) 
      {
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr+'&login='+login+'&pass1='+pass1);
      }
      LogUser(login:string,pass1:string) 
      {
         this.vr=3;
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr+'&login='+login+'&pass1='+pass1);
      }

}