/// <reference path="./interface.ts" />

/// <reference path="./interface.ts" />

import { RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function updateRow(rowId: number, row: RowElement): number;
declare function deleteRow(rowId: number): void;

