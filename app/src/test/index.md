- <a href="#renderwithalldeps">renderWithAllDeps</a>
- <a href="#renderwiththeme">renderWithTheme</a>
- <a href="#spyonclassmethods">spyOnClassMethods</a>

<br/><br/>
## renderWithAllDeps


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
- *[render.tsx:77](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/render.tsx#L77)*

<br/>## renderWithTheme


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
- *[render.tsx:47](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/render.tsx#L47)*

<br/>## spyOnClassMethods


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
- *[utils.ts:9](https://github.com/Apartment-Snapshot/snapshot-ui/tree/main/app/src/test/utils.ts#L9)*

<br/>