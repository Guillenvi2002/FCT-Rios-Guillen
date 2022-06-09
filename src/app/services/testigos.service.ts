import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEquipo} from '../interfaces/IEquipo';

@Injectable({
  providedIn: 'root'
})
export class TestigosService {

  cliente: IEquipo[] = [];
  lng = 'es';

  constructor(private http: HttpClient) {

    this.dameIdioma(this.lng);

  }

  public dameIdioma(data: any) {
    console.log(data);
    if (data == 'en') {
      this.recogerClientes('en')
    } else {
      if (data == 'es') {
        this.recogerClientes('es')
      } else {
        this.recogerClientes('gl')
      }
      this.recogerClientes('es')
    }
  }

  private recogerClientes(data: any) {
    if (data == this.lng) {
      this.http
        .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/testimonios.json')
        .subscribe((resp: any) => {
          this.cliente = resp;
        });
    } else {
      if (data == 'en') {
        this.http
          .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/testimoniosEN.json')
          .subscribe((resp: any) => {
            this.cliente = resp;
          });
      } else {
        if (data == 'gl') {
          this.http
            .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/testimoniosGL.json')
            .subscribe((resp: any) => {
              this.cliente = resp;
            });
        }
      }
    }
  }
}
