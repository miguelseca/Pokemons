import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[test]',
  standalone: true,
})
export class TestDirective {
  // @HostBinding("className")
  // get cssClasses() {
  //   return "pokemon-card green ";
  // }

  // @HostBinding("class.green")
  // get cssClasses() {
  //   return true;

  // }

  constructor() {
    console.log("sadkfhbsjdfhbsdjhfb")
;  }

  @HostBinding('style.border')
  get cssClasses() {
    return '1px solid red';
  }
}
