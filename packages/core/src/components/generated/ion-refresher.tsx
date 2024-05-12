// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-refresher'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonRefresherProps = FixIonProps<IonicJSX.IonRefresher> &
	JSXBase.HTMLAttributes<HTMLIonRefresherElement>

export function IonRefresher(props: IonRefresherProps) {
	const [ _, rest ] = splitProps(
		props, 
		['closeDuration', 'disabled', 'mode', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']);
	const componentProps = () => ({
		'prop:closeDuration': props.closeDuration,
		'prop:disabled': props.disabled,
		'prop:mode': props.mode,
		'prop:pullFactor': props.pullFactor,
		'prop:pullMax': props.pullMax,
		'prop:pullMin': props.pullMin,
		'prop:snapbackDuration': props.snapbackDuration
	});

	return <ion-refresher {...componentProps()} {...rest} />;
}
