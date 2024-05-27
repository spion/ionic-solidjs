// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-item-option';
import type { JSX as IonicJSX } from '@ionic/core';
import { type JSX as JSXBase, splitProps } from 'solid-js';
import type { FixIonProps } from '../../lib';

defineCustomElement();

export type IonItemOptionProps = FixIonProps<IonicJSX.IonItemOption> &
	JSXBase.HTMLAttributes<HTMLIonItemOptionElement>

export function IonItemOption(props: IonItemOptionProps) {
	const [ _, rest ] = splitProps(
		props,
		['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:disabled': props.disabled,
		'prop:download': props.download,
		'prop:expandable': props.expandable,
		'prop:href': props.href,
		'prop:mode': props.mode,
		'prop:rel': props.rel,
		'prop:target': props.target,
		'prop:type': props.type
	});

	return <ion-item-option {...componentProps()} {...rest} />;
}
