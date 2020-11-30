import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-lazy-load',
  templateUrl: './image-lazy-load.component.html',
  styleUrls: ['./image-lazy-load.component.css']
})
export class ImageLazyLoadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  defaultImage = 'https://www.placecage.com/1000/1000';

  images = ["../assets/img/1.jpg", "../assets/img/2.jpg", "../assets/img/3.jpg", "../assets/img/4.jpg", 
  "../assets/img/5.jpg", "../assets/img/6.jpg", "../assets/img/7.jpg", "../assets/img/8.jpg", "../assets/img/9.jpg", "../assets/img/10.jpg"]
}
