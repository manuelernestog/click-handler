# manuelernestog/click-handler

[![npm (scoped)](https://img.shields.io/npm/v/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@manuelernestog/click-handler)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/@manuelernestog/click-handler)

Handle click and dblclick events on same element on javascript.

## Install

```bach
$ npm install @manuelernestog/click-handler
// or
$ yarn add @manuelernestog/click-handler
```

## Usage

```js
import ClickHandler from("@manuelernestog/click-handler");

const clickDelay = 500; // delay it's optional (350 miliseconds by default)
var clickHandler = new ClickHandler(clickDelay);

// Call the handle method inside your click action
function onClick() {
    clickHandler.handle(onClickActions,onDblClickActions);
}

function onClickActions() {...}
function onDblClickActions() {...}
```