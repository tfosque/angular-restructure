import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log('transforming the filter:')
    if (!items) {
        return [];
    }
    if (!searchText) {
        return items;
    }

    return items.filter(item => {
        return Object.keys(item).some(key => {
            console.log({item}, {key});
            // console.log('item[key]:', item[key]);
            // console.log('item.result_count:', item.result_count);
            // console.log('keys:', Object.keys(item));
            // return item.includes(searchText.trim().toLowerCase());
            return items;
        });
    });
}
}
