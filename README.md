# react-flexible-list
# GridList

[![NPM Version](https://img.shields.io/npm/v/gridlist.svg)](https://www.npmjs.com/package/gridlist)
[![License](https://img.shields.io/npm/l/gridlist.svg)](https://github.com/your-username/gridlist/blob/main/LICENSE)

## Installation

Use npm to install the package:
```shell
npm install react-flexible-list
or
```shell
npm i react-flexible-list

Use yarn to install the package:
```shell
yarn add gridlist


## Usage

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

## Props

| Prop Name     | Type     | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| skeleton      | Function | Renders the skeleton element for the GridList.   |
| resourceData  | Array    | Array of data items to be rendered in the GridList. |
| resourceItem  | Function | Renders each individual item in the GridList.     |
| resourceName | String   | Name of the resource being displayed in the GridList. |
| gap           | Number   | Gap (in pixels) between each item in the GridList. |
| cardWidth     | Number   | Width (in pixels) of each card in the GridList.   |
