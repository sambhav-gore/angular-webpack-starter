import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app',
    styles: [
        require('./app.component.scss')
    ],
    template: `
    <md-toolbar color="primary">
      Angular Starter App
    </md-toolbar>
    <md-card>
      We're living in a Material World and I am a <button md-raised-button color="accent">Material Button!</button>
    </md-card>
    <div class="app-footer">
       Created by <a href="https://github.com/sambhav-gore" target="_blank" class="footer-link">Sambhav Gore</a>, Licenced under MIT.
    </div>
  `
})

export class AppComponent implements OnInit{
    public foo:string;

    constructor() {}

    ngOnInit(): void {
        this.foo = "baz";
    }
}
