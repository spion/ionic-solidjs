// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-split-pane'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonSplitPaneProps = FixIonProps<IonicJSX.IonSplitPane> &
	JSXBase.HTMLAttributes<HTMLIonSplitPaneElement>

export function IonSplitPane(props: IonSplitPaneProps) {
	const [ _, rest ] = splitProps(
		props, 
		['contentId', 'disabled', 'when']);
	const componentProps = () => ({
		'prop:contentId': props.contentId,
		'prop:disabled': props.disabled,
		'prop:when': props.when
	});

	return <ion-split-pane {...componentProps()} {...rest} />;
}
