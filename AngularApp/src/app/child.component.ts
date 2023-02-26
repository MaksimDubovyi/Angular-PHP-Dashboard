// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from '@angular/core';
import {User} from './user';
import {ChildService} from './child.service';
// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'child-log-comp',
	styleUrls: ['./style.css'],
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: 	`<div *ngIf="done1" class="info">
				<p class="inf_txt">Имя: {{User_1.name}}</p>
				<p class="inf_txt">Телефон: {{User_1.phone}}</p>
				<p class="inf_txt">Пол: {{User_1.gender}}</p>
                <p class="inf_txt">e-mail: {{User_1.email}}</p>
				<button class="button" (click)="edit()">Редактировать</button><br>
				<button class="button" (click)="delete_go()">Удалить учетную запись</button><br>
				<button class="button" (click)="show()">Просмотр всех пользователей</button>
                </div>
				<form #myForm="ngForm" *ngIf="done2" novalidate>
                   
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
                        <button  [disabled]="myForm.invalid"  (click)="edit_go()">Изменить</button>
                    </div>
                </form>
				<div class="form-group ok" *ngIf="done4"><p>Запись удалена!</p></div>
               <div *ngIf="done3"><All-comp></All-comp> </div>


				`,
				   providers: [ChildService]
})
export class Child_Log_Component { 

	constructor(private ChildServ: ChildService) { }

	@Input() User_1:User;
	@Input() pass:string;
	@Input() login:string;
	done1: boolean = true;
    done2: boolean = false;
    done3: boolean = false;
	done4: boolean = false;
    name:string; 
	phone:string;
    gender:string;
	email:string;
	txt:string;
	delete:boolean;
	show() : void {
		if(this.done3 == true)
		this.done3 = false;
		else
		this.done3 = true;
    }
	edit() : void {
		this.done1 = false;
		this.done2 = true;
		this.done3 = false;
    }
	edit_go() : void {
		this.ChildServ.EditData(this.name,this.email,this.phone,this.gender,this.login,this.pass).subscribe((data: User) => {this.User_1= data});   
		this.done1 = true;
		this.done2 = false;
		this.done3 = false;
    }
	delete_go() : void {
		this.delete =confirm("Удалить учетную запись???")
		if(this.delete)
		{
		this.ChildServ.DeleteData(this.login,this.pass).subscribe((data: string) => {this.txt= data});   
		this.done1 = false;
		this.done2 = false;
		this.done3 = false;
		this.done4 = true;
		}
    }
}