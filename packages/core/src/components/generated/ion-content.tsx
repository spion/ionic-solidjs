// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-content'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type IonContentProps = FixIonProps<IonicJSX.IonContent> &
	JSXBase.HTMLAttributes<HTMLIonContentElement>

export function IonContent(props: IonContentProps) {
	const [ componentProperties, children, events, attributes ] = splitProps(
		props, 
		['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
		['children'],
		['on:ionScroll', 'on:ionScrollEnd', 'on:ionScrollStart']);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <ion-content {...componentProps()} {...attrs()} {...events}>{children.children}</ion-content>;
}
