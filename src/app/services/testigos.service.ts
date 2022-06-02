import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEquipo } from '../interfaces/IEquipo';

@Injectable({
  providedIn: 'root'
})
export class TestigosService {

  cliente: IEquipo[] = [];

  constructor(private http: HttpClient) { 

    this.recogerClientes();

  }
  
  private recogerClientes() {
    this.http
          .get('https://angular-html-476bd-default-rtdb.europe-west1.firebasedatabase.app/testimonios.json')
          .subscribe((resp: any)=>{
            this.cliente=resp;
          });
  }
}
