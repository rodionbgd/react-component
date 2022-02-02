import React, { Component } from "react";

type Props = {
  fontStyle: string;
  fontWeight: string;
};

export default class Paragraph extends Component<Props, Record<string, any>> {
  render() {
    return (
      <p
        data-testid="paragraph"
        style={{
          fontStyle: this.props.fontStyle,
          fontWeight: this.props.fontWeight,
        }}
      >
        Lorem ipsum dolor sit amet, ex melius option eripuit sea. Et his dolor
        eligendi. Te enim choro graecis has, prima mollis aliquando per ne, duo
        tamquam evertitur in.
      </p>
    );
  }
}
