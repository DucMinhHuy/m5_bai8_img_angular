import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from "./token";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{
  listImage=[
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  constructor(
    @Inject(GalleryConfig)
    @Optional()
    config:number
  ) {
    if(config){
      this.config=config;
    }
  }
  // @ts-ignore
  itemWidth:number;
  config=4;
  ngOnInit() {
    this.itemWidth=100/this.config;
  }
}
