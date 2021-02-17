import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movie:any, term:string): any {
    if(term == undefined){
      return movie ; 
    }else{
      return movie.filter(function(movie){
        return movie.title.toLowerCase().includes(term.toLowerCase());
      })
    }
  }

}
  