import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./_movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  id:any;
  movieDetail:any;
  isLoading:boolean=false;
  imgUrl='https://image.tmdb.org/t/p/w500/';
  topTen:any=[];

  constructor( public _activatedRoute:ActivatedRoute , public _MoviesServiceService:MoviesServiceService  ) {

  this.id = _activatedRoute.snapshot.paramMap.get('id');
  _MoviesServiceService.movieDetails(this.id).subscribe((movie)=>{
      this.movieDetail = movie;
      this.isLoading = true; 
    });
    _MoviesServiceService.getmovies().subscribe((movie)=>{
      for(let i = 0 ; i < 10 ; i++){
        this.topTen.push(movie.results[i]);
      }
    })
   }

  ngOnInit(): void {
  }

}
