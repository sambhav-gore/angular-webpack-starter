import {NgModule} from '@angular/core';
import {AppComponent} from "./components/app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdToolbarModule, MdCardModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdButtonModule,
        MdCardModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}