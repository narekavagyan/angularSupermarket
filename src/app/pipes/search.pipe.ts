import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    value = value.filter(a => a.name.includes(args[0]));
    return value;
  }
}
