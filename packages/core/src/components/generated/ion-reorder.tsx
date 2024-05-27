// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-reorder';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonReorderProps = FixIonProps<IonicJSX.IonReorder> &
	JSXBase.HTMLAttributes<HTMLIonReorderElement>

export function IonReorder(props: IonReorderProps) {
	const [ _, rest ] = splitProps(
		props,
		[]);
	const componentProps = () => ({
		
	});

	return <ion-reorder {...componentProps()} {...rest} />;
}
