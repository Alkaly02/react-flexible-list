
[![My Skills](https://skills.thijs.gg/icons?i=react,typescript,css)](https://skills.thijs.gg)
## react-flexible-list - v1.1.5

### Installation :rocket:  :rocket:  :rocket: 

```
  npm install react-flexible-list
```
or
```
  yarn add react-flexible-list
```
### Usage
```jsx
import React from 'react';
import GridList from 'react-flexible-list';

const MyComponent = () => {
  return (
    <GridList
      resourceData={ ["By", "Lka", "Dev", "From", "Senegal"] }
      resourceItem={ (item) => <p>{item}</p> }
    />
  );
};
export default MyComponent;
```


| Props | Type     |Default  | Description                  |
| :-------- | :------- |:---------- | :-------------------------------- |
|`isLoading`| `Boolean`| `false` | Flag to indicate whether the component is in a loading state.|
| `resourceItem`      | `React.FC<any>` | |**Required***  React component responsible for rendering each resource item. |
|`resourceData`| `(string, object,number)Array`| |**Required*** Array of data items to be rendered in the GridList.|
| `loader`| `React.ElementType` | | Custom loader component to be displayed when `isLoading` is true.|
|`skeleton`| `React.ElementType`| `Skeleton`|Custom skeleton component to be displayed when  `isLoading` is `true` and `loader` is not provided.|
|`emptyComponent`| `React.ElementType`|`EmptyList`|Custom component to be displayed when resourceData is empty.|
|`gap`| `Number`|`15` |Column gap in pixels.|
|`cardWidth`| `Number`|`250`|Width of each card in pixels.|
|`minHeight`|`Number` |`300`|Minimum height of the grid container in pixels.|
|`px`| `Number`|`10` |	Horizontal padding of the grid container in pixels. |
|`py`|`Number`| `10`|Vertical padding of the grid container in pixels.|
|`mx`|`Number`| `0` |Horizontal margin of the grid container in pixels.|
| `my`| `Number`| `0`| Vertical margin of the grid container in pixels.|


