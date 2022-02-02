import React, { Component } from "react";

type Props = {
  items: string[];
  columns: number;
};

export default class Columns extends Component<Props, Record<string, any>> {
  styles = {
    color: "blue",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
  };

  padding = {
    padding: "16px",
  };

  render() {
    return (
      <div
        style={{
          ...this.styles,
        }}
        data-testid="columns"
      >
        {this.props.items &&
          this.props.items.map((item, index) => (
            <span style={{ ...this.padding }} key={`${item}_${index}`}>
              {item}
            </span>
          ))}
      </div>
    );
  }
}
