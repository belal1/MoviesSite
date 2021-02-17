import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'watch'
})
export class WatchPipe implements PipeTransform {

  transform(overview: string, number: number): string {
    return overview.substring(0,number);
  }

}
