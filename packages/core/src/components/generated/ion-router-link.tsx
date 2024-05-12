// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-link'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type IonRouterLinkProps = FixIonProps<IonicJSX.IonRouterLink> &
	JSXBase.HTMLAttributes<HTMLIonRouterLinkElement>

export function IonRouterLink(props: IonRouterLinkProps) {
	const [ componentProperties, children, events, attributes ] = splitProps(
		props, 
		['color', 'href', 'rel', 'routerAnimation', 'routerDirection', 'target'],
		['children'],
		[]);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <ion-router-link {...componentProps()} {...attrs()} {...events}>{children.children}</ion-router-link>;
}
