import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./_home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies=[];
  term:string;
  imgUrl='https://image.tmdb.org/t/p/w500/';
  constructor(_MoviesServiceService:MoviesServiceService) {

    _MoviesServiceService.getmovies().subscribe((movies)=>{ this.trendingMovies=movies.results }, (err)=>{console.log(err) });
    
   }

  ngOnInit(): void {
  }

}
