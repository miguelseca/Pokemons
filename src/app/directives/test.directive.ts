import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "[test]",
  standalone: true,
})
export class TestDirective {
  @HostBinding("class")
  elementClass = "testi";
}