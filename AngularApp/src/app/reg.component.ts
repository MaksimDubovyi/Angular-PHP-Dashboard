import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegistrService} from './reg.service';
@Component({
    selector: 'reg-app',
    styleUrls: ['./style.css'],
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<form #myForm="ngForm" novalidate *ngIf="done3">
                   <div class="form-group txt">
                        <p class="text-center">Логин</p>
                        <input autocomplete="off" class="form-control txt" name="login" [(ngModel)]="login" ngModel required />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center">Пароль</p>
                        <input autocomplete="off" class="form-control txt" name="pass1" [(ngModel)]="pass1" ngModel required pattern="[A-ZА-Яa-zа-я0-9]{5,10}" />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center">Подтверждение</p>
                        <input autocomplete="off" class="form-control txt" name="pass2" [(ngModel)]="pass2" ngModel required />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center">Имя</p>
                        <input autocomplete="off" class="form-control txt" name="name" [(ngModel)]="name" ngModel required />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center txt">Email</p>
                        <input autocomplete="off" class="form-control txt" name="email"  [(ngModel)]="email" ngModel required email />
                    </div>
                    <div class="form-group txt">
                        <p class="text-center">Телефон</p>
                        <input autocomplete="on" class="form-control txt" name="phone"  [(ngModel)]="phone" ngModel required pattern="[0-9]{10}" />
                    </div>
                                        
                    <label for="contactChoice1">Мужчина</label>
                    <input type="radio" id="contactChoice1" [(ngModel)]="gender" name="contact" value="Мужчина">
                    <label for="contactChoice2" >Женщина</label>
                    <input type="radio" id="contactChoice2" [(ngModel)]="gender" name="contact" value="Женщина">

                    <div class="form-group">
                        <button  [disabled]="myForm.invalid"  (click)="submit(myForm)">Добавить</button>
                    </div>
                </form>
                <div class="form-group error" *ngIf="done">Пароли не равны!!!</div>
                <div class="form-group ok" *ngIf="done2">Pегистрация завершена!!!</div>`,
                providers: [RegistrService]
})
export class RegComponent 
{
    login:string;
    pass1:string;
    pass2:string;
    name:string;
    email:string;
    phone:string;
    gender:string;
    x:number =0;
    done: boolean = false;
    done2: boolean = false;
    done3: boolean = true;
    constructor(private Registr_Service: RegistrService) { }
    submit(form: NgForm) {
  
          if(form.value.pass1==form.value.pass2)
           {
             this.Registr_Service.RegData(form.value.name,form.value.email,form.value.phone,this.gender,form.value.login,form.value.pass1).subscribe((data: number) => {this.x = data;});
             this.done = false;
             this.done3 = false;
             this.done2 = true;
             this.NullData_();
             
           }
           else
           {
            this.done = true;
           }   
           
    }
    NullData_() 
    {
        this.login="";
        this.pass1="";
        this.pass2="";
        this.name="";
        this.email="";
        this.phone="";
    }
}