import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = "35cdda3651430d0dd4f856bd7df11a21"
  

  getPopular(option:string, page:number = 1){
    return this.http.get(`${this.baseUrl}/tv/${option}?page=${page}&api_key=${this.apiKey}`)
  }

   
  getSearch(query:string, page:number = 1){
    return this.http.get(`${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${query}&include_adult=false`)
  }

}
