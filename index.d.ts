declare module "reac-flexbox-grid" {

  import * as React from "react";

  type ViewportSizeType = "xs" | "sm" | "md" | "lg";
  type ColumnSizeType = number | boolean;

  interface RowProps {
    reverse?: boolean;
    start?: ViewportSizeType;
    center?: ViewportSizeType;
    end?: ViewportSizeType;
    top?: ViewportSizeType;
    middle?: ViewportSizeType;
    bottom?: ViewportSizeType;
    around?: ViewportSizeType;
    between?: ViewportSizeType;
    className?: string;
    tagName?: string;
    children: any[];
  }

  interface ColProps {
    xs?: ColumnSizeType;
    sm?: ColumnSizeType;
    md?: ColumnSizeType;
    lg?: ColumnSizeType;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    first?: ViewportSizeType;
    last?: ViewportSizeType;
    tagName?: string;
    children: any[];
  }

  interface GridProps {
    fluid?: boolean;
    className?: string;
    tagName?: string;
    children: any[];
  }

  class Row extends React.Component<RowProps, void> {}
  class Col extends React.Component<ColProps, void>{}
  class Grid extends React.Component<GridProps, void> {}

  export {
    Grid,
    Row,
    Col,
    GridProps,
    RowProps,
    ColProps,
  };
}
