
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list.component/photos-list.component';


@NgModule({
  declarations: [PhotosListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[PhotosListComponent] 
})
export class PhotosModule { }
