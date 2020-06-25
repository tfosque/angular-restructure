import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, field: string): any[] {
    // console.log('transform: CarName:Input:', {searchText});
    if (!items) { return []; }
    if (!searchText) { return items; }
    if (!field) { return items; }

    return items.filter(item => {
      return Object.keys(item).some(key => {
        // console.log(item.product.name)
        return String(item.product[`${field}`]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }
}
