// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-route-redirect';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonRouteRedirectProps = FixIonProps<IonicJSX.IonRouteRedirect> &
	JSXBase.HTMLAttributes<HTMLIonRouteRedirectElement>

export function IonRouteRedirect(props: IonRouteRedirectProps) {
	const [ _, rest ] = splitProps(
		props,
		['from', 'to']);
	const componentProps = () => ({
		'prop:from': props.from,
		'prop:to': props.to
	});

	return <ion-route-redirect {...componentProps()} {...rest} />;
}
