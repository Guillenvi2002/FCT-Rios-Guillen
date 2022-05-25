import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestigosService } from 'src/app/services/testigos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ApiT: TestigosService) { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['', ''],
    responsive: {
      0: {
        items: 0 
      },
      200: {
        items: 1
      },
      1000: {
        items: 2
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
