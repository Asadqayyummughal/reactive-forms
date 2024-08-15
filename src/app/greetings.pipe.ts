import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `hellow ${value}`;
  }

}
