import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef;

  constructor(
    private _gifsservice:GifsService,
  ) { }

  ngOnInit(): void {

  }

  buscar() {
    const valor=this.txtbuscar.nativeElement.value;

    

    this._gifsservice.buscargifs(valor);
    this.txtbuscar.nativeElement.value = '';

  }


}
