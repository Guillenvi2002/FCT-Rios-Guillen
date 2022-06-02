import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestigosService } from 'src/app/services/testigos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit  {

  constructor(public ApiT: TestigosService) {}

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
