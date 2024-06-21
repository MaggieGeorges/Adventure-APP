// pipe.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, placeholder: string, minLength: number = 0): string {
    if (!value || value.length < minLength) {
      return placeholder;
    }
    return value;
  }

}