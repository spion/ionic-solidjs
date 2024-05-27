// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-fab-list';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonFabListProps = FixIonProps<IonicJSX.IonFabList> &
	JSXBase.HTMLAttributes<HTMLIonFabListElement>

export function IonFabList(props: IonFabListProps) {
	const [ _, rest ] = splitProps(
		props,
		['activated', 'side']);
	const componentProps = () => ({
		'prop:activated': props.activated,
		'prop:side': props.side
	});

	return <ion-fab-list {...componentProps()} {...rest} />;
}
