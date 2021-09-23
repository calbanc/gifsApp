import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _gifsservice:GifsService
  ) { }

  ngOnInit(): void {

  }

  get historial(){

    const historial=this._gifsservice.historial;
    return this._gifsservice.historial;

  }


  buscar(item:string){

    this._gifsservice.buscargifs(item);
 
  }



}
