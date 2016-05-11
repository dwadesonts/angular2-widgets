import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: '[tsList]'
})
export class TsListDirective {

  private element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
    console.log(this.element);
  }

}
