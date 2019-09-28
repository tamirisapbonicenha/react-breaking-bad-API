import * as React from "react";
import { render } from "enzyme";

import H4 from "../components/H4";

const text = 'Eu sou um H4!!!';

describe("Testando <H4 />", () => {

  it("deve renderizar um <h4>", () => {
    const wrapper = render(<H4 text={text} />);
    expect(wrapper.length).toEqual(1);
  });
});