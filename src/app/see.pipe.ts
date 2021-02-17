import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'see'
})
export class SeePipe implements PipeTransform {

  transform(overview:string): string {
    return 'see' + overview ;
  }

}
