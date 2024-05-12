// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-searchbar'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type IonSearchbarProps = FixIonProps<IonicJSX.IonSearchbar> &
	JSXBase.HTMLAttributes<HTMLIonSearchbarElement>

export function IonSearchbar(props: IonSearchbarProps) {
	const [ componentProperties, children, events, attributes ] = splitProps(
		props, 
		['animated', 'autocapitalize', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
		['children'],
		['on:ionBlur', 'on:ionCancel', 'on:ionChange', 'on:ionClear', 'on:ionFocus', 'on:ionInput']);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <ion-searchbar {...componentProps()} {...attrs()} {...events}>{children.children}</ion-searchbar>;
}
