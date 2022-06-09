import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IEmpleados} from '../interfaces/IEmpleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  equipo: IEmpleados[] = [];
  lng = 'es';

  constructor(private http: HttpClient) {

    this.dameIdioma(this.lng);


  }

  public dameIdioma(data: any) {
    console.log(data);
    if (data == 'en') {
      this.recogerEmpleados('en')
    } else {
      if (data == 'es') {
        this.recogerEmpleados('es')
      } else {
        this.recogerEmpleados('gl')
      }
      this.recogerEmpleados('es')
    }
  }

  private recogerEmpleados(data: any) {
    if (data == this.lng) {
      this.http
        .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/empleados.json')
        .subscribe((resp: any) => {
          this.equipo = resp;
        });
    } else {
      if (data == 'en') {
        this.http
          .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/empleadosEN.json')
          .subscribe((resp: any) => {
            this.equipo = resp;
          });
      } else {
        if (data == 'gl') {
          this.http
            .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/empleadosGL.json')
            .subscribe((resp: any) => {
              this.equipo = resp;
            });
        }
      }
    }
  }
}
