// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-accordion'
import { fixProps } from '../../utils/fixProps'
import type { JSX as IonicJSX } from '@ionic/core'
import type { JSX as JSXBase } from 'solid-js'
import type { FixIonProps } from '../../lib'

defineCustomElement()

export type IonAccordionProps = FixIonProps<IonicJSX.IonAccordion> &
	JSXBase.HTMLAttributes<HTMLIonAccordionElement>

export function IonAccordion(props: IonAccordionProps) {
	const fixedProps = () => fixProps(props);
	//@ts-ignore
	return <ion-accordion {...fixedProps()} />
}
