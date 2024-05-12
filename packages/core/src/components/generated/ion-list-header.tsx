// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-list-header'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonListHeaderProps = FixIonProps<IonicJSX.IonListHeader> &
	JSXBase.HTMLAttributes<HTMLIonListHeaderElement>

export function IonListHeader(props: IonListHeaderProps) {
	const [ _, rest ] = splitProps(
		props, 
		['color', 'lines', 'mode']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:lines': props.lines,
		'prop:mode': props.mode
	});

	return <ion-list-header {...componentProps()} {...rest} />;
}
