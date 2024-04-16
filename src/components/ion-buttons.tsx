
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-buttons'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonButtonsProps = FixIonProps<IonicJSX.IonButtons> &
  JSXBase.HTMLAttributes<HTMLIonButtonsElement>

export function IonButtons(props: IonButtonsProps) {
  //@ts-ignore
  return <ion-buttons {...props} />
}
