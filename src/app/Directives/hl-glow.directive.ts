import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HlGlow]',
  host : {
    'focus':'onFocus()',
    'blur()':'OnBlur()'
  }
})

export class HlGlowDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { }
    onFocus(){
  this.el.nativeElement.Style.backgroundColor="Yellow";
  this.renderer.setStyle(this.el.nativeElement,'width','200px');
    }
    onBlur(){
      this.el.nativeElement.Style.backgroundColor="White";
  this.renderer.setStyle(this.el.nativeElement,'width','150px');
    }
  }

// }
