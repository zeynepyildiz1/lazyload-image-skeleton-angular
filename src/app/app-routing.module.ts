import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageLazyLoadComponent } from './image-lazy-load/image-lazy-load.component';

const routes: Routes = [
  {path:"image-lazy-load",component:ImageLazyLoadComponent},
  {
    path: 'skeleton',
    loadChildren: () => import('../app/skeleton-loader/skeleton-loader.module').then(m => m.SkeletonLoaderModule)
  },
  {path:"**",component:AppComponent,pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
