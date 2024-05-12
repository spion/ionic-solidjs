import * as fs from 'node:fs';
import type { Type } from 'rttist';
import { Metadata } from '../metadata.typelib';
import { componentList } from './component-list';

const OUT_DIR = 'src/components/generated';
const IonTypesMap = new Map<string, Type>(
	Metadata.getTypes()
		.filter((t) => t.name.startsWith('Ion'))
		.map((t) => [t.name, t])
);

function baseTemplate(component: string) {
	const componentPascelCase = component
		.split('-')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');
	const type = IonTypesMap.get(componentPascelCase);
	const propertiesNames =
		(type?.isObjectLike() && type.getProperties().map((p) => p.name.toString())) ?? [];
	const eventPropertiesNames = propertiesNames.filter((propName) => propName.startsWith('onIon'));
	const propNames = propertiesNames.filter((propName) => !eventPropertiesNames.includes(propName));
	const eventPropNames = eventPropertiesNames.map((propName) => `on:i${propName.slice(3)}`);

	return `// Auto-generated by scripts/generate.ts

import { defineCustomElement } from '@ionic/core/components/${component}'
import type { JSX as IonicJSX } from '@ionic/core'
import { type JSX as JSXBase, splitProps } from 'solid-js'
import type { FixIonProps } from '../../lib'
import { prefixJSProps, prefixHTMLAttributes } from "../../utils/fixProps";

defineCustomElement()

export type ${componentPascelCase}Props = FixIonProps<IonicJSX.${componentPascelCase}> &
	JSXBase.HTMLAttributes<HTML${componentPascelCase}Element>

export function ${componentPascelCase}(props: ${componentPascelCase}Props) {
	const [ componentProperties, children, events, rest ] = splitProps(
		props, 
		[${propNames.map((propName) => `'${propName}'`).join(', ')}],
		['children'],
		[${eventPropNames.map((eventName) => `'${eventName}'`).join(', ')}]);
	const attrs = () => prefixHTMLAttributes(attributes);
	const componentProps = () => prefixJSProps(componentProperties);

	return <${component} {...componentProps()} {...attrs()} {...events}>{children.children}</${component}>;
}
`;
}

for (const component of componentList) {
	fs.writeFileSync(`${OUT_DIR}/${component}.tsx`, baseTemplate(component));
}

fs.writeFileSync(
	`${OUT_DIR}/index.ts`,
	// biome-ignore lint/style/useTemplate: its less readable in this particular case
	componentList.map((component) => `export * from './${component}';`).join('\r\n') + '\r\n'
);

// Update exports for each component in package.json
// function updatePackageJsonExports() {
// 	const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
//
// 	packageJson.exports = {
// 		'./router': {
// 			import: './router.mjs',
// 			require: './router.js',
// 			default: './router.js',
// 			types: './router.d.ts',
// 		},
// 	};
//
// 	for (const component of componentList) {
// 		// CommonJS will be generated in lib/components/name.js
// 		// ES6 will be generated in lib/components/name.mjs
// 		// Types will be available at lib/components/name.d.ts
// 		packageJson.exports[`./components/${component}`] = {
// 			import: `./components/${component}.mjs`,
// 			require: `./components/${component}.js`,
// 			default: `./components/${component}.js`,
// 			types: `./components/${component}.d.ts`,
// 		};
// 	}
//
// 	for (const icon of iconList) {
// 		packageJson.exports[`./icons/${icon}`] = {
// 			import: `./icons/${icon}.mjs`,
// 			require: `./icons/${icon}.js`,
// 			default: `./icons/${icon}.js`,
// 			types: `./icons/${icon}.d.ts`,
// 		};
// 	}
//
// 	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
// }
