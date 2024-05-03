// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-header'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonHeaderProps = FixIonProps<IonicJSX.IonHeader> &
	JSXBase.HTMLAttributes<HTMLIonHeaderElement>

export function IonHeader(props: IonHeaderProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-header {...fixedProps()} />
}