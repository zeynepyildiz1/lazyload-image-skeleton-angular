import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { ImageLazyLoadComponent } from './image-lazy-load/image-lazy-load.component';
import { SkeletonLoaderModule } from './skeleton-loader/skeleton-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageLazyLoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    SkeletonLoaderModule
    
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  bootstrap: [AppComponent]
})
export class AppModule { }
