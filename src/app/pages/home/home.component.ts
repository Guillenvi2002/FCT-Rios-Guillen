import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestigosService } from 'src/app/services/testigos.service';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  about:any = "/about";
  evento:any = "/courses";

  constructor(public ApiT: TestigosService, public grupo: EmpleadosService, private router: Router) { }

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

  ngOnInit(): void {
  }

  irPagina(val:any){
    this.router.navigateByUrl(val);
  }

}
