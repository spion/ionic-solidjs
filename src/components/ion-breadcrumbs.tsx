
// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/ion-breadcrumbs'
import { initialize } from '@ionic/core/components'
import { type JSX as IonicJSX } from '@ionic/core'
import { JSX as JSXBase } from 'solid-js'
import { FixIonEventCasing } from '../lib'

initialize()
defineCustomElement()

export type IonBreadcrumbsProps = FixIonEventCasing<IonicJSX.IonBreadcrumbs> &
  JSXBase.HTMLAttributes<HTMLIonBreadcrumbsElement>

export function IonBreadcrumbs(props: IonBreadcrumbsProps) {
  //@ts-ignore
  return <ion-breadcrumbs {...props} />
}