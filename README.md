# AtTypes-react-datasheet

Typescript types for `react-datasheet`.

## Usage

Add the following dependency to your `package.json`:
```
"@types/react-datasheet": "weswigham/AtTypes-react-datasheet"
```

## Workarounds

This exposes a generic component (since you're very free with what data you can store in the data field of the props). [TS doesn't currently do type inference on JSX components, even when they are generic](https://github.com/Microsoft/TypeScript/issues/14036), and the syntax doesn't support placing a generic inline. Until the situation changes, the correct workaround is like so:
```ts
import ReactDataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
import * as React from "react";

export interface GridElement {
    value: string;
    enabled: boolean;
}

// Note the alias below
const MyGrid: {new (): ReactDataSheet<GridElement>} = ReactDataSheet;

export default (state: any) => <MyGrid data={state.values} valueRenderer={(cell) => cell.enabled ? cell.value : ""}/>;

```
