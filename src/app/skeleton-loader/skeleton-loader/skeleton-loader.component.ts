import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.css']
})
export class SkeletonLoaderComponent implements OnInit {
 
  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle:boolean;

  constructor() { }

  ngOnInit(): void {
  }
getMyStyles(){
  const myStyles={
    "width.px":this.Cwidth?this.Cwidth:"",
    "height.px":this.Cheight?this.Cheight:"",
    "border-radius":this.circle?"50%":""
  }
  return myStyles;
}
}
