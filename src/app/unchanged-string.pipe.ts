import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unchangedString',
})
export class UnchangedStringPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return value.replace(/(?:\n)/g, '<br>');
    } else {
      return null;
    }
  }
}
