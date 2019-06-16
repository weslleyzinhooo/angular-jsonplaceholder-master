import { PostServiceService } from './../post-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts : Post[];

  constructor(private service : PostServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    return this.service.getAll().subscribe(post => {
      this.posts = post;
    });
  }

}
