
[![My Skills](https://skills.thijs.gg/icons?i=react,typescript,css)](https://skills.thijs.gg)
## react-flexible-list

### Installation :rocket:  :rocket:  :rocket: 

```http
  npm install react-flexible-list
or
```http
  yarn add react-flexible-list

### Usage
```jsx
import React from 'react';
import { GridList } from 'react-flexible-list';

const MyComponent = () => {
  return (
    <GridList
      skeleton={ () => <p>My own skeleton</p> }
      resourceData={ ["me", "and", "you", "for", "ever"] }
      resourceItem={ ({ test }) => <p>{test}</p> }
      resourceName="test"
      gap={15}
      cardWidth={200}
    />
  );
};
export default MyComponent;
```


| Props | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `skeleton`      | `React element` | Renders the skeleton element for the GridList. item to fetch |
|`resourceData`| `(string, object,number)Array`| Array of data items to be rendered in the GridList.|
| `resourceItem`| `React element` | **Required** Renders each individual item in the GridList.|
|`resourceName`| `String`| ***Required***: If you want to get data passed to each item in `resourceItem`|
|`gap`| `Number`| Gap (in pixels) between each item in the GridList.|
|`cardWidth`| `Number`| Width (in pixels) of each card in the GridList.|



