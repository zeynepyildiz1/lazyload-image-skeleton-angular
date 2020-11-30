import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-card',
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.css']
})
export class SkeletonCardComponent implements OnInit {

  constructor() { }
  title = 'angular-demo';
  loaded = false;

  ngOnInit() {
    setInterval(() => {
      this.loaded = true;
    }, 2000);
  }
}
