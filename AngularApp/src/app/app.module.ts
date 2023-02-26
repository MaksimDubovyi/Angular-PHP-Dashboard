import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// Импортируются модуль маршрутизации RouterModule и класс Routes, представляющий коллекцию маршрутов
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { RegComponent } from './reg.component';
import { LogComponent } from './log.component';
import { Child_Log_Component } from './child.component';
import { All_User_Component } from './All.component';
// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: RegComponent },
    { path: 'reg', component: RegComponent },
    { path: 'log', component: LogComponent },
    { path: '**', component: NotFoundComponent }
];

// Чтобы применить маршруты, они передаются в метод RouterModule.forRoot(appRoutes).
// Метод RouterModule.forRoot() возвращает модуль, который содержит сконфигурированный сервис Router.
// Когда приложение загружается, Router выполняет начальную навигацию по текущему URL.
@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),HttpClientModule ],
    declarations: [RegComponent,LogComponent,AppComponent, NotFoundComponent,Child_Log_Component,All_User_Component],
    bootstrap: [AppComponent]
})
export class AppModule { }