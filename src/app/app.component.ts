import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';
import { EmpleadosService } from './services/empleados.service';
import { TestigosService } from './services/testigos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FCT_Guillen';
  
  constructor(private wowService: NgwWowService, 
              private translate: TranslateService, 
              private team: EmpleadosService, 
              private rate: TestigosService){

    this.wowService.init();
    this.translate.setDefaultLang('es');
    
  }

  public translateLanguageTo(lang: string) {
    this.translate.use(lang);
    this.team.dameIdioma(lang)
    this.rate.dameIdioma(lang)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
}
