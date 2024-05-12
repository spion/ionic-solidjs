// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-content'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonContentProps = FixIonProps<IonicJSX.IonContent> &
	JSXBase.HTMLAttributes<HTMLIonContentElement>

export function IonContent(props: IonContentProps) {
	const [ _, rest ] = splitProps(
		props, 
		['color', 'fixedSlotPlacement', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']);
	const componentProps = () => ({
		'prop:color': props.color,
		'prop:fixedSlotPlacement': props.fixedSlotPlacement,
		'prop:forceOverscroll': props.forceOverscroll,
		'prop:fullscreen': props.fullscreen,
		'prop:scrollEvents': props.scrollEvents,
		'prop:scrollX': props.scrollX,
		'prop:scrollY': props.scrollY
	});

	return <ion-content {...componentProps()} {...rest} />;
}
