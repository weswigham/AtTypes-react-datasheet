import {PureComponent, Component} from "react";

declare namespace ReactDataSheet {
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
        onContextMenu?: (event: MouseEvent, cell: T, i : number, j: number) => any;
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
}

declare class ReactDataSheet<T extends ReactDataSheet.Cell> extends PureComponent<ReactDataSheet.DataSheetProps<T>, ReactDataSheet.DataSheetState> {
    getSelectedCells(data: T[][], start: ReactDataSheet.CellReference, end: ReactDataSheet.CellReference): {cell: T, i: number, j: number};
}

export = ReactDataSheet;