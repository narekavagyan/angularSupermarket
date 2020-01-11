import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    switch (args[0]) {
      case 'գնի':
        return value.sort((a, b) => {
          return a.newPrice - b.newPrice;
        });
      case 'ամսաթվի':
        return value.sort((l, i) => {
          return l.date - i.date;
        });
    }
    return value;
  }
}
