import { Directive, ElementRef, HostListener } from '@angular/core';
import { ServicesService } from './services.service';

@Directive({
  selector: '[appDirectives]',
  standalone: true
})
export class DirectivesDirective {

  constructor(private el: ElementRef, private servicesService: ServicesService) { }
  
  @HostListener('click') onClick() {
    const message = this.servicesService.getRandomMessage();
    this.el.nativeElement.innerText = message;
  }
}
