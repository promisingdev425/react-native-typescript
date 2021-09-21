- root
  - <a href="#rerender">rerender</a>
  - <a href="#tojson">toJSON</a>
  - <a href="#unmount">unmount</a>
  - <a href="#update">update</a>
- app
  - src
    - test
      - <a href="#renderwithalldeps">renderWithAllDeps</a>
      - <a href="#renderwiththeme">renderWithTheme</a>
      - <a href="#spyonclassmethods">spyOnClassMethods</a>


### .rerender




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| nextElement | `ReactElement` | *-* |



<br/>
### .toJSON







<br/>
### .unmount




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| nextElement | `ReactElement` | *-* |



<br/>
### .update




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| nextElement | `ReactElement` | *-* |



<br/>
## renderWithAllDeps

  ▸ **renderWithAllDeps**(`ui`, `__namedParameters`) => `void`

Render a component with all dependencies of the app.

```jsx
it('should call the api', () => {
  const { reportAPI, ...screen } = renderWithAllDeps(
    <MyComponent />
  );

  expect(reportAPI.getFoo).toHaveBeenCalledTimes(1);

  expect(screen.getByText('Foo')).toBeInTheDocument();
})
```




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| ui | `any` | *-* |
| __namedParameters | `Bag` | `{}` |


#### Returns
`void` 


#### Defined in
- *[app/src/test/render.tsx:77](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/app/src/test/render.tsx#L77)*

<br/>
## renderWithTheme

  ▸ **renderWithTheme**(`ui`, `__namedParameters`) => `void`

Render a component wrapped in the provided theme.

```jsx
beforeEach(() => {
  const screen = renderWithTheme(
    <MyComponent />,
    { theme: themes.foo }
  )
})
```




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| ui | `any` | *-* |
| __namedParameters | `Bag` | `{}` |


#### Returns
`void` 


#### Defined in
- *[app/src/test/render.tsx:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/app/src/test/render.tsx#L47)*

<br/>
## spyOnClassMethods

  ▸ **spyOnClassMethods**(`classInstance`, `blacklist`) => `void`

Spy on the methods of a class instance. Spies are
added in place and are only added for methods that
aren't already spied on.




#### Parameters
| Name | Type | Default Value |
| :--- | :--- | :------------ |
| classInstance | `Bag` | *-* |
| blacklist |  | `...` |


#### Returns
`void` 


#### Defined in
- *[app/src/test/utils.ts:9](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/app/src/test/utils.ts#L9)*

<br/>


