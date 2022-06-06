import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRios} from '../interfaces/IRios';

@Injectable({
  providedIn: 'root'
})
export class RiosService {

  natur: IRios[] = [];

  constructor(private http: HttpClient) { 

    this.cargarRios();

  }


  private cargarRios() {
    this.http
          .get('https://cors-anywhere.herokuapp.com/https://servizos.meteogalicia.gal/mgrss/observacion/jsonAforos.action')
          .subscribe((resp: any)=>{
            this.natur= resp['listaAforos'];
          });
  }
}

//          .get('https://servizos.meteogalicia.gal/mgrss/observacion/jsonAforos.action') https://run.mocky.io/v3/7cd1df6f-63b8-4548-a7cc-0c3bab2b238f
