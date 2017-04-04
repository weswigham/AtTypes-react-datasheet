import {PureComponent, Component} from "react";

export interface Cell {
    readOnly?: boolean;
    key?: string | undefined;
    className?: string | undefined;
    component?: Component<any, any>;
    forceComponent?: boolean;
    colSpan?: number;
    rowSpan?: number;
}

export interface DataSheetProps<T extends Cell> {
    data: T[][];
    className?: string;
    valueRenderer: (cell: T) => string | number | void;
    dataRenderer?: (cell: T) => string | number | void;
    onChange?: (cell: T, i: number, j: number, newValue: string) => any;
}

export interface CellReference {
    i: number;
    j: number;
}

export interface DataSheetState {
    start?: CellReference;
    end?: CellReference;
    selecting?: boolean;
    forceEdit?: boolean;
    editing?: CellReference;
    clear?: CellReference;
}

declare class ReactDataSheet<T extends Cell> extends PureComponent<DataSheetProps<T>, DataSheetState> {
    getSelectedCells(data: T[][], start: CellReference, end: CellReference): {cell: T, i: number, j: number};

}

export default ReactDataSheet;