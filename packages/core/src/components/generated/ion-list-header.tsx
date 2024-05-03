// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-list-header'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonListHeaderProps = FixIonProps<IonicJSX.IonListHeader> &
	JSXBase.HTMLAttributes<HTMLIonListHeaderElement>

export function IonListHeader(props: IonListHeaderProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-list-header {...fixedProps()} />
}