// Этот код инициализирует платформу, которая запускает приложение, 
// и затем использует эту платформу для загрузки модуля AppModule.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// platformBrowserDynamic запускает импортированный модуль AppModule.
// После этого начинает работать вся логика, которая заложена в модуле AppModule, 
// который представляет главный модуль приложения
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);