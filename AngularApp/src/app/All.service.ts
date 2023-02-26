import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class AllService 
{
   constructor(private http: HttpClient) { }
    vr:number=5;
    ShowData() 
      {
         return this.http.get('http://localhost:8080/Angular_PHP/serv.php?number=' + this.vr);
      }
       
}