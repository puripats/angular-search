import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    if(!value) return [];
    if(!searchText) return value;
    searchText = searchText.toLowerCase();
    return value.filter(it => {
      console.log(it)
      return it.toLowerCase().includes(searchText);
    });
  }
}
