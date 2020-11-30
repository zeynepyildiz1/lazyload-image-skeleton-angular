import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SkeletonCardComponent } from './skeleton-card/skeleton-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SkeletonCardComponent
  }
];

@NgModule({
  declarations: [SkeletonLoaderComponent, SkeletonCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SkeletonLoaderModule { }
