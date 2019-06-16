import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostAddComponent } from './post-add/post-add.component';
import { PostListComponent } from './post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PostAddComponent, PostListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PostAddComponent, PostListComponent]
})
export class PostModule { }
