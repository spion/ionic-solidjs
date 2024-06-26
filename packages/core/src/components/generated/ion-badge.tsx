// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-badge';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonBadgeProps = FixIonProps<IonicJSX.IonBadge> &
	JSXBase.HTMLAttributes<HTMLIonBadgeElement>

export function IonBadge(props: IonBadgeProps) {
	const [ _, rest ] = splitProps(
		props,
		['color', 'mode']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:mode': props.mode
	});

	return <ion-badge {...componentProps()} {...rest} />;
}
