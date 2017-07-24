import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'myFilter', pure: true})
export class MyFilterPipe implements PipeTransform {
  transform(value: any[], type?: any): any {
    switch (type) {
      case 'all':
        return value;
      case 'active':
        return value.filter(item => !item.done);
      case 'completed':
        return value.filter(item => item.done);
    }
    return null;
  }
}
