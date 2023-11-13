import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[selected]',
  standalone: true,
})
export class HighlightedDirective {
  
  @Input('selected')
  isSelected = false;

  @Output()
  toggleSelected = new EventEmitter();

  // @HostBinding('class.highlighted')
  // get cssClasses() {
  //   return this.isHighlighted;
  // }
  @HostBinding('class.selected')
  get cssClasses() {
    return this.isSelected;
  }

  @HostListener('mouseover', ['$event'])
    mouseOver($event: any) {
    this.isSelected = true;
    this.toggleSelected.emit(this.isSelected);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isSelected = false;
    this.toggleSelected.emit(this.isSelected);
  }

}
