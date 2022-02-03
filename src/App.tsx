import React from "react";
import Columns from "./columns";
import Paragraph from "./paragraph";
import Dropdown from "./dropdown";

export default class App extends React.Component {
  state = {
    columnItems: ["one", "two", "three"],
    columnNumber: 3,
    fontStyle: "italic",
    fontWeight: "bold",
  };

  render() {
    return (
      <>
        <Columns
          items={this.state.columnItems}
          columns={this.state.columnNumber}
        />
        <Paragraph
          fontStyle={this.state.fontStyle}
          fontWeight={this.state.fontWeight}
        />
        <Dropdown />
      </>
    );
  }
}
