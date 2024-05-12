// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-progress-bar'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonProgressBarProps = FixIonProps<IonicJSX.IonProgressBar> &
	JSXBase.HTMLAttributes<HTMLIonProgressBarElement>

export function IonProgressBar(props: IonProgressBarProps) {
	const [ _, rest ] = splitProps(
		props, 
		['buffer', 'color', 'mode', 'reversed', 'type', 'value']);
	const componentProps = () => ({
		'prop:buffer': props.buffer,
		'prop:color': props.color,
		'prop:mode': props.mode,
		'prop:reversed': props.reversed,
		'prop:type': props.type,
		'prop:value': props.value
	});

	return <ion-progress-bar {...componentProps()} {...rest} />;
}
