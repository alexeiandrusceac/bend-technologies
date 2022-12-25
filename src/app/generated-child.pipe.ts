import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'generateChild'
})
export class GenerateChildPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    return arr?.reduce((acc, val, ind, array) => {

      const data: any[] = [];

      if (!val.joinedWith) {
        acc[val] = data.push(val);
      }
      array.forEach((el) => {

        if (el.joinedWith === val.id && el.areaId === val.areaId) {
          data.push(el);
        }

      });
      return acc.concat(data);
    }, []);
  }
}
