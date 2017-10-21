import { Directive, ElementRef, HostListener, Input } from'@angular/core';
@Directive({
    selector: '[onReturn]'
})
export class OnReturnDirective {
    private el: ElementRef;
    @Input() onReturn: string;
    constructor(private _el: ElementRef) {
        this.el = this._el;
    }
    @HostListener('keydown', ['$event']) onKeyDown(e) {

        if ((e.which == 13 || e.keyCode == 13)) {
            e.preventDefault();
            for(var i=0;i<e.path.length;i++){
              console.log(e.path[i])
            }
            if (e.srcElement.nextElementSibling) {
                e.srcElement.nextElementSibling.focusNext();
            }
            else{
                console.log('close keyboard');
            }
            return;
        }

    }

}
