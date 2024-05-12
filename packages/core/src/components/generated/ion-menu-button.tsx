// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-menu-button'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type IonMenuButtonProps = FixIonProps<IonicJSX.IonMenuButton> &
	JSXBase.HTMLAttributes<HTMLIonMenuButtonElement>

export function IonMenuButton(props: IonMenuButtonProps) {
	const [ componentProperties, children, events, attributes ] = splitProps(
		props, 
		['autoHide', 'color', 'disabled', 'menu', 'mode', 'type'],
		['children'],
		[]);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <ion-menu-button {...componentProps()} {...attrs()} {...events}>{children.children}</ion-menu-button>;
}
