import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from '../Model/response-model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Pizza[], searchText: string): Pizza[] {
    if (searchText === undefined || searchText === null || searchText.length === 0) {
      return value;
    }
    
    const searchValues = value.filter((pizza) => {
      return pizza.name.includes(searchText);
    });
    return searchValues;
  }

}
