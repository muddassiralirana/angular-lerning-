import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdPkr'
})
export class UsdPkrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    // return value * 100;  // simple

    // dynamic pipe
    let [x]=args
    return value * x;
  }

}
