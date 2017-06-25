import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <h1>
      this is App Component {{foo}}
    </h1>
  `
})

export class AppComponent implements OnInit{
    public foo:string;

    constructor() {}

    ngOnInit(): void {
        this.foo = "baz";
    }
}
