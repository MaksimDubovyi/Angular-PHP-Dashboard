import { Component } from '@angular/core';

// Для определения адресов ссылок применяется директива routerLink.
// Для стилизации активных ссылок применяется специальная директива routerLinkActive, 
// которая указывает на класс css, применяемый к активной ссылке.
// [routerLinkActiveOptions]="{exact:true} для установки активной ссылки будет применяться полное соответствие.
@Component({
    selector: 'my-app',
    styles: [` 
        .nav{ clear: both;}
        a {float: left; margin:10px}
        .active a { color: red;}
    `],
    template: `<div>
                    <ul class="nav">
                        <li routerLinkActive="active">
                            <a routerLink="/reg">Регистрация</a>
                        </li>
                        <li routerLinkActive="active">
                            <a routerLink="/log">Вход</a>
                        </li>
                       
                    </ul>
                    <router-outlet></router-outlet>
               </div>`
})
// Чтобы внедрить в AppComponent тот компонент, который обрабатывает запрос, необходимо использовать элемент RouterOutlet.
// На место элемента <router-outlet> будет рендериться компонент, выбранный для обработки запроса.
export class AppComponent { }