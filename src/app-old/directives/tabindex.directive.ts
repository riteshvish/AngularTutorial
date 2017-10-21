import { Directive, Input, HostListener, Renderer } from '@angular/core';

@Directive({
	selector: '[myTabindex]'
})
export class TabindexDirective {
	@Input('myTabindex') myTabindex: string;

	constructor(private renderer: Renderer) { }

	@HostListener('keydown', ['$event']) onInputChange(e) {
		var code = e.keyCode || e.which;

		if (code === 13) {
			let next: HTMLElement = this.getMyNextFocusableElement(e.srcElement);

			if (next) {
				e.preventDefault();
				this.renderer.invokeElementMethod(next, 'focus', []);
			}
		}
	}

	private getMyNextFocusableElement(elem: HTMLElement): HTMLElement {
		let tabindex: number = parseInt(this.myTabindex || '0');
		let next: HTMLElement = MyUtils.getNextFocusableElement(elem, 'myTabindex', tabindex);
		return next;
	}
}

const MyUtils = (() => {
	const FOCUSABLES = ['input', 'select', 'textarea', 'button', 'object'];
	const FOCUSABLES_SELECTOR = FOCUSABLES.join(',');

	function getNextFocusableElement(elem: HTMLElement, attrName: string, tabindex: number): HTMLElement {
		let form = getFormElement(elem);
		let next = null;

		tabindex++;
		next = getElement(form, attrName, tabindex);

		while (next) {
			next = getFocusableElement(next);

			if (next) {
				return next;
			}

			tabindex++;
			next = getElement(form, attrName, tabindex);
		}

		return null;
	}

	function getFormElement(elem: HTMLElement): HTMLElement {
		let form: HTMLFormElement = elem ? (<HTMLInputElement>elem).form : null;
		return form;
	}

	function getElement(form: HTMLElement, attrName: string, tabindex: number): HTMLElement {
		let selector = `[${attrName}="${tabindex}"]`;
		let elem = form ? <HTMLElement>form.querySelector(selector) : null;
		return elem;
	}

	function getFocusableElement(elem: HTMLElement): HTMLElement {
		let tagName = elem.tagName.toLowerCase();
		let focusable = FOCUSABLES.some(
			tagFocusable => tagFocusable === tagName
		);

		if (!focusable) {
			elem = <HTMLElement>elem.querySelector(FOCUSABLES_SELECTOR);
			focusable = !!elem;
		}

		if (focusable) {
			//TODO: verify if elem disabled, readonly, hidden, etc...
			// in which case focusable must be changed to false
		}

		if (focusable) {
			return elem;
		}
	}

	return {
		getNextFocusableElement: getNextFocusableElement
	};
})();
