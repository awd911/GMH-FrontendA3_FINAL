import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile Page Title';
  imageUrl = 'https://www.placecage.com/g/200/300';
  viewCount = 0;

  constructor() { }

  ngOnInit(): void {
  }
  
  incrementCount(){
    this.viewCount ++;
  }

}
