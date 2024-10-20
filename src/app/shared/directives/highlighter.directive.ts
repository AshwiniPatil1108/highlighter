import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input() hoverColor !: string
  @Input() defaultColor ! : string

  @HostBinding('style.backgroundColor') bgColor : string = this.defaultColor
  constructor(
    private _eleRef : ElementRef,
    private _rendrer : Renderer2
  ) { }
  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }
  @HostListener('mouseover')
  onMouseOver(){
    this.bgColor= this.hoverColor
  }
  @HostListener('mouseout')
  onMouseOut(){
    this.bgColor= this.defaultColor
  }

}
