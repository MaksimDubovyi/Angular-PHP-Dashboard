import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LogService} from './log.service';
import {User} from './user';

@Component({
    selector: 'log-app',
    styleUrls: ['./style.css'],
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<div class="form-group" *ngIf="done"><form #myForm="ngForm" class="form-group"  novalidate>
                   <div class="form-group txt">
                        <p class="text-center">Логин</p>
                        <input autocomplete="off" class="form-control txt" name="login" [(ngModel)]="login" ngModel required />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center">Пароль</p>
                        <input autocomplete="off" class="form-control txt" name="pass1" [(ngModel)]="pass1" ngModel required pattern="[A-ZА-Яa-zа-я0-9]{5,10}" />
                    </div>
                    
                    <div class="form-group">
                        <button  [disabled]="myForm.invalid"  (mouseover)="submit(myForm)" (click) = "IfData_()">Вход</button>
                    </div>
                </form>
                </div>
                <div class="form-group error" *ngIf="done2">Логин или пароль неверны!!!</div>
                <div  *ngIf="done3"><child-log-comp [(User_1)]="User_" [(pass)]="pass1"  [(login)]="login"></child-log-comp> </div>`,
                providers: [LogService]
})
export class LogComponent 
{
    login:string;
    pass1:string;
    User_:User;
    x:number =0;
    done: boolean = true;
    done2: boolean = false;
    done3: boolean = false;

    constructor(private Log_Service: LogService) { }
    submit(form: NgForm)
     {
      this.Log_Service.LogData(form.value.login,form.value.pass1).subscribe((data: number) => {this.x = data;});   
     }
    IfData_() 
    {
        if(this.x>0)
        {
           this.done = false;
           this.done2 = false;
           this.done3 = true;
           this.Log_Service.LogUser(this.login,this.pass1).subscribe((data: User) => {this.User_ = data}); 
        }
        else
        {
           this.done = true;
           this.done2 = true;
           this.done3 = false;
        }
    }
}