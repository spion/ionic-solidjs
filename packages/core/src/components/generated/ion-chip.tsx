// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-chip'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type IonChipProps = FixIonProps<IonicJSX.IonChip> &
	JSXBase.HTMLAttributes<HTMLIonChipElement>

export function IonChip(props: IonChipProps) {
	const [ componentProperties, children, events, attributes ] = splitProps(
		props, 
		['color', 'disabled', 'mode', 'outline'],
		['children'],
		[]);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <ion-chip {...componentProps()} {...attrs()} {...events}>{children.children}</ion-chip>;
}
