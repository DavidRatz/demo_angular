import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chronoFormat',
  pure: false
})
export class ChronoFormatPipe implements PipeTransform {

  transform(chrono: Chrono, format: string): string {
    let formatChrono: string = "";
    switch (format) {
      case 'simple':
        formatChrono = (chrono.minutes < 10 ? "0": "") + chrono.minutes  + ":" + (chrono.secondes < 10 ? "0": "") + chrono.secondes;
        break;
      case 'complex':
        formatChrono = (chrono.minutes < 10 ? "0": "") + chrono.minutes + "m" + (chrono.secondes < 10 ? "0": "") + chrono.secondes + "s";
        break;
      case 'full':
        formatChrono = (chrono.minutes < 10 ? "0": "") + chrono.minutes + " minutes et " + (chrono.secondes < 10 ? "0": "") + chrono.secondes + " secondes";
        break;
      default:
        break;
    }
    return formatChrono;
  }

}
