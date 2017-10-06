import {Directive, Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Directive({
    selector: '[enter]',
    host: {
        '(keypress)': 'enterHandler($event)'
    }
})
export class EnterDirective {
    @Output() enter = new EventEmitter<any>();

    constructor() {
    }

    enterHandler(event) {
        if (event.keyCode == 13) {
            this.enter.emit(event);
        }
    }
}
