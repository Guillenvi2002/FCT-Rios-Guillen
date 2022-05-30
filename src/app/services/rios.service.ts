import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRios} from '../interfaces/IRios';

@Injectable({
  providedIn: 'root'
})
export class RiosService {

  equipo: IRios[] = [];

  constructor(private http: HttpClient) { 

    this.pruebaTest();

  }


  private pruebaTest() {
    this.http
          .get('https://servizos.meteogalicia.gal/mgrss/observacion/jsonAforos.action')
          .subscribe((resp: any)=>{
            console.log(resp)
            this.equipo= resp['listaAforos'];
          });
  }
}
