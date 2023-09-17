import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CountriesModule} from "./countries/countries/countries.module";
import {RoutingModule} from "./routing.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CountriesModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
