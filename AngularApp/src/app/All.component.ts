// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, Input } from '@angular/core';
import {User} from './user';
import {AllService} from './All.service';
// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'All-comp',
	styleUrls: ['./style.css'],
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `<div class="info"><table class="table table-dark">
    <tbody >
        <tr class="col-lg-12" *ngFor="let us of User_2">
        <td >{{us.name}}</td>
        <td >{{us.phone}}</td>  
        <td >{{us.email}}</td>  
        <td >{{us.gender}}</td>  
        </tr>  
    </tbody>
</table>
</div>`,
		providers: [AllService]
})
export class All_User_Component { 

	constructor(private AllServices: AllService)
     { 
        this.AllServices.ShowData().subscribe((data: User[]) => {this.User_2= data}); 
     }
     User_2:User[];

}