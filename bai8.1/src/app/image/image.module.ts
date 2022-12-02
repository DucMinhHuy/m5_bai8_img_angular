import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    ImageComponent,
    CardComponent
  ],
  exports: [
    ImageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ImageModule { }
