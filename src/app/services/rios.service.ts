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
          .get('mgrss/observacion/jsonAforos.action')
          .subscribe((resp: any)=>{
            this.natur= resp['listaAforos'];
          });
  }
}

//          .get('https://servizos.meteogalicia.gal/mgrss/observacion/jsonAforos.action')
