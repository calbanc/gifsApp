import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse ,Gif} from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string='G88IpMJUULLOgnzWB6vICl03uxtOdM6x';
  private _historial:string[]=[];
  public resultados:Gif[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this._historial=JSON.parse(localStorage.getItem('historial')!)||[];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[];


  }

  get historial(){
    //this._historial=this._historial.splice(0,9);
    return [...this._historial];
  }

  buscargifs(query:string){

    query=query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){

      if(query.trim().length > 0){
        this._historial.unshift(query);
        this._historial=this._historial.splice(0,10);

        localStorage.setItem('historial',JSON.stringify(this._historial));
      }
    }

    const params=new HttpParams().set('apiKey',this.apiKey)
                                  .set('limit','10')
                                  .set('q',query);


    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
        .subscribe((response:SearchGifsResponse) =>{
         
          this.resultados=response.data;
          localStorage.setItem('resultados',JSON.stringify(this.resultados));
        });
  }

}
