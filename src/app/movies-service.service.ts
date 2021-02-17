import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(public _httpClient:HttpClient) { }

  getmovies():Observable<any>
  {
    return this._httpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=c385f31c8c7014edf94ac2261ae13592');
  }

  movieDetails(id):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c385f31c8c7014edf94ac2261ae13592`);
  }
  
}
