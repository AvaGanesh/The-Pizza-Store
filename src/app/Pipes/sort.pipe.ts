import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from '../Model/response-model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Pizza[], field: string): Pizza[] {
    if (field === undefined || field === null) { return value; }

    if (field === 'Ratings') {
      value.sort((a, b) => {
        return b.rating - a.rating;
      });
      return value;
    }

    if (field === 'Price') {
      value.sort((a, b) => {
        return a.price - b.price;
      });
      return value;
    }


    return null;
  }

}
