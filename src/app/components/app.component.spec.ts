import {TestBed, ComponentFixture} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {MaterialModule, MdToolbarModule, MdButtonModule, MdCardModule} from "@angular/material";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(() => {
        configureModule();
        createComponent();
    });

    it("should be defined", () => {
        expect(component).toBeDefined();
    });

    describe("on init", () => {
       it("should set the foo value", () => {
          component.ngOnInit();
          expect(component.foo).toEqual("baz");
       });
    });

    function configureModule(): void {
        TestBed.configureTestingModule({
            imports: [
                MdToolbarModule,
                MdButtonModule,
                MdCardModule
            ],
            declarations: [AppComponent]
        });
    }

    function createComponent(): void {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }
});