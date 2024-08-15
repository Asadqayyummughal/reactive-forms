import { Directive,ElementRef,Host,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighgt]'
})
export class HighlighgtDirective {
  @Input() appHighlighgt:string='';
  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor=this.appHighlighgt;
   }
  @HostListener('mouseenter')onMouseEnter(){
    this.heighlight(this.appHighlighgt);
  }
  @HostListener('mouseleave')onMouseleave(){
    this.heighlight('yellow');
  }
  private heighlight(color:string){
    this.el.nativeElement.style.color=color;
  }
}
