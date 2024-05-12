// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-fab'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonFabProps = FixIonProps<IonicJSX.IonFab> &
	JSXBase.HTMLAttributes<HTMLIonFabElement>

export function IonFab(props: IonFabProps) {
	const [ _, rest ] = splitProps(
		props, 
		['activated', 'edge', 'horizontal', 'vertical']);
	const componentProps = () => ({
		'prop:activated': props.activated,
		'prop:edge': props.edge,
		'prop:horizontal': props.horizontal,
		'prop:vertical': props.vertical
	});

	return <ion-fab {...componentProps()} {...rest} />;
}
