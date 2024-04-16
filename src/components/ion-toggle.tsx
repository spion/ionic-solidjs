
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-toggle'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonToggleProps = FixIonEventCasing<IonicJSX.IonToggle> &
  JSXBase.HTMLAttributes<HTMLIonToggleElement>

export function IonToggle(props: IonToggleProps) {
  //@ts-ignore
  return <ion-toggle {...props} />
}