- root
  - <a href="#lineheight">lineHeight</a>
  - <a href="#fontfamilycomposite">fontFamilyComposite</a>
  - <a href="#getcolor">getColor</a>
  - <a href="#getfontsize">getFontSize</a>
  - <a href="#getlineheight">getLineHeight</a>
  - <a href="#getmetrics">getMetrics</a>
  - <a href="#getpx">getPx</a>
  - <a href="#getradii">getRadii</a>
  - <a href="#getspace">getSpace</a>
  - <a href="#gettypography">getTypography</a>
  - <a href="#lineheightcomposite">lineHeightComposite</a>
  - <a href="#mapprops">mapProps</a>
  - <a href="#maptotheme">mapToTheme</a>
  - <a href="#usetheme">useTheme</a>
- themes
  - <a href="#themes">themes</a>


## lineHeight



`styleFn`

#### Defined in
- *[rules.ts:7](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/rules.ts#L7)*

<br/>
## fontFamilyComposite

  ▸ **fontFamilyComposite**(`props`) => `any`



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| props | `any` | *-* |


#### Returns
`any` 


#### Defined in
- *[rules.ts:15](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/rules.ts#L15)*

<br/>
## getColor

  ▸ **getColor**(`key`) => `any`

Get a function that will return a color from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:51](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L51)*

<br/>
## getFontSize

  ▸ **getFontSize**(`key`) => `any`

Get a function that will return a font size from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:124](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L124)*

<br/>
## getLineHeight

  ▸ **getLineHeight**(`key`) => `any`

Get a function that will return a line height from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:139](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L139)*

<br/>
## getMetrics

  ▸ **getMetrics**(`key`) => `any`

Get a function that will return a "metric" from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:65](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L65)*

<br/>
## getPx

  ▸ **getPx**(`n`, `scale`) => `void`

Retrieve a value in pixels from the given scale array
by it's name or index.


__See:__ https://styled-system.com/responsive-styles#responsive-styles <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| n | `any` | *-* |
| scale |  | *-* |


#### Returns
`void` 


#### Defined in
- *[helpers.ts:22](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L22)*

<br/>
## getRadii

  ▸ **getRadii**(`key`) => `any`

Get a function that will return a radius from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:95](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L95)*

<br/>
## getSpace

  ▸ **getSpace**(`key`) => `any`

Get a function that will return a "space" from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:80](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L80)*

<br/>
## getTypography

  ▸ **getTypography**(`key`) => `any`

Get a function that will return a font from the theme
when you pass it the props of your component.


__See:__ https://styled-system.com/how-it-works#how-it-works <br/>
__See:__ https://www.npmjs.com/package/@styled-system/theme-get <br/>


#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |


#### Returns
`any` A function that you can use
in a `styled-components` declaration.



#### Defined in
- *[helpers.ts:109](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L109)*

<br/>
## lineHeightComposite

  ▸ **lineHeightComposite**(`props`) => `any`



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| props | `any` | *-* |


#### Returns
`any` 


#### Defined in
- *[rules.ts:31](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/rules.ts#L31)*

<br/>
## mapProps

  ▸ **mapProps**(`mapper`) => `void`



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| mapper | `any` | *-* |


#### Returns
`void` 


#### Defined in
- *[helpers.ts:26](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L26)*

<br/>
## mapToTheme

  ▸ **mapToTheme**(`key`, `prop`) => `void`



#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| key | `string` | *-* |
| prop | `string` | `'variant'` |


#### Returns
`void` 


#### Defined in
- *[helpers.ts:35](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/helpers.ts#L35)*

<br/>
## useTheme

  ▸ **useTheme**() => `any`





#### Returns
`any` 


#### Defined in
- *[hooks.ts:5](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/hooks.ts#L5)*

<br/>
## themes





#### Defined in
- *[themes/index.ts:3](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/theme/themes/index.ts#L3)*

<br/>
