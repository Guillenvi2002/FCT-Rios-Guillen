import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmpleados } from '../interfaces/IEmpleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  equipo: IEmpleados[] = [];

  constructor(private http: HttpClient) { 

    this.recogerEmpleados();

  }


  private recogerEmpleados() {
    this.http
          .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/empleados.json')
          .subscribe((resp: any)=>{
            this.equipo=resp;
          });
  }
}
