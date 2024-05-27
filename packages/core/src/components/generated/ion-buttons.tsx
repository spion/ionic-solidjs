// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-buttons';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonButtonsProps = FixIonProps<IonicJSX.IonButtons> &
	JSXBase.HTMLAttributes<HTMLIonButtonsElement>

export function IonButtons(props: IonButtonsProps) {
	const [ _, rest ] = splitProps(
		props,
		['collapse']);
	const componentProps = () => ({
		'prop:collapse': props.collapse
	});

	return <ion-buttons {...componentProps()} {...rest} />;
}
