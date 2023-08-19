import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase',
})
export class ToogleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
