//App entry point.
//Bootstraps application root module (named AppModule by convension).

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

//Do bootstrapping.
platformBrowserDynamic().bootstrapModule(AppModule);