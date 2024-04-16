
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-segment-button'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonSegmentButtonProps = FixIonEventCasing<IonicJSX.IonSegmentButton> &
  JSXBase.HTMLAttributes<HTMLIonSegmentButtonElement>

export function IonSegmentButton(props: IonSegmentButtonProps) {
  //@ts-ignore
  return <ion-segment-button {...props} />
}