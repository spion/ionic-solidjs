
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-accordion'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonAccordionProps = FixIonEventCasing<IonicJSX.IonAccordion> &
  JSXBase.HTMLAttributes<HTMLIonAccordionElement>

export function IonAccordion(props: IonAccordionProps) {
  //@ts-ignore
  return <ion-accordion {...props} />
}