import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  images = ["../assets/image2.jpg", "../assets/image3.jpg"]


  constructor() { }

  ngOnInit(): void {
  }

}
