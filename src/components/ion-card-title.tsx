
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-card-title'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonCardTitleProps = FixIonEventCasing<IonicJSX.IonCardTitle> &
  JSXBase.HTMLAttributes<HTMLIonCardTitleElement>

export function IonCardTitle(props: IonCardTitleProps) {
  //@ts-ignore
  return <ion-card-title {...props} />
}