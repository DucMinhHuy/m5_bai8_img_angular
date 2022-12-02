import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImageModule} from "./image/image.module";
import {GalleryConfig} from "./image/token";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule
  ],
  providers: [{provide:GalleryConfig,useValue:3}],
  bootstrap: [AppComponent]
})
export class AppModule { }
