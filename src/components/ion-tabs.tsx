
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-tabs'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonTabsProps = FixIonProps<IonicJSX.IonTabs> &
  JSXBase.HTMLAttributes<HTMLIonTabsElement>

export function IonTabs(props: IonTabsProps) {
  //@ts-ignore
  return <ion-tabs {...props} />
}
