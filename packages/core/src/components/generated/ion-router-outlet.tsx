// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-outlet'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonRouterOutletProps = FixIonProps<IonicJSX.IonRouterOutlet> &
	JSXBase.HTMLAttributes<HTMLIonRouterOutletElement>

export function IonRouterOutlet(props: IonRouterOutletProps) {
	const [ _, rest ] = splitProps(
		props, 
		['animated', 'animation', 'mode']);
	const componentProps = () => ({
		'prop:animated': props.animated,
		'prop:animation': props.animation,
		'prop:mode': props.mode
	});

	return <ion-router-outlet {...componentProps()} {...rest} />;
}
