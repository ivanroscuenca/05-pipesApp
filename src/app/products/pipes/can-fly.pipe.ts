import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value) return 'vuela';
    else return 'no vuela';
  }
}
