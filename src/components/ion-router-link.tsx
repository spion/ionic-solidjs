
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-router-link'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonProps } from '../lib'

initialize()
defineCustomElement()

export type IonRouterLinkProps = FixIonProps<IonicJSX.IonRouterLink> &
  JSXBase.HTMLAttributes<HTMLIonRouterLinkElement>

export function IonRouterLink(props: IonRouterLinkProps) {
  //@ts-ignore
  return <ion-router-link {...props} />
}
