import { Component, OnInit } from '@angular/core';
import { RiosService } from 'src/app/services/rios.service';

@Component({
  selector: 'app-rios',
  templateUrl: './rios.component.html',
  styleUrls: ['./rios.component.css']
})
export class RiosComponent implements OnInit {

  filterPost = '';

  constructor(public ApiRios: RiosService) {
   }

  ngOnInit(): void {
  }

}
