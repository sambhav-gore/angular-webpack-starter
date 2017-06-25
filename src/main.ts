import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {enableProdMode} from "@angular/core";

// common styles
import './common/styles.scss';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)