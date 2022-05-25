import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestigosService } from 'src/app/services/testigos.service';
import { getTestBed } from '@angular/core/testing';
import { IEquipo } from '../../interfaces/IEquipo';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit  {

  equipo: IEquipo[]= [];

  constructor(public ApiT: TestigosService) {



  }

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
    nav: false
  }
  encapsulation!: ViewEncapsulation.None

  ngOnInit(): void {
  }
}
