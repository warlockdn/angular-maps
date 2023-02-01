import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgMapsAutocompleteDirective } from "./autocomplete";

@NgModule({
  declarations: [AppComponent, NgMapsAutocompleteDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
