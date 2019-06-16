import { Component, OnInit, } from '@angular/core';

import { PhotosService } from './../photos.service';
import { Photos } from '../photos';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
 
  public photo : Photos [];
  
  constructor( private service : PhotosService) {}
    

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    return this.service.getAll().subscribe(photos => {
      this.photo = photos;
    });
  }

}