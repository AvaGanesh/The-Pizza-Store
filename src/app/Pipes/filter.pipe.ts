import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from '../Model/response-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pizza[], isVegOnly: boolean): Pizza[] {
    if (isVegOnly === undefined || isVegOnly === null) {
      return value;
    }

    const result = value.filter((ele) => {
      return isVegOnly ? ele.isVeg : ele;
    });
    return result;
  }

}
