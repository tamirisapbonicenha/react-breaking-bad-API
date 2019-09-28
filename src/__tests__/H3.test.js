import * as React from "react";
import { render } from "enzyme";

import H3 from "../components/H3";

const text = 'Eu sou um H3!!!';

describe("Testando <H3 />", () => {

  it("deve renderizar um <h3>", () => {
    const wrapper = render(<H3 text={text} />);
    expect(wrapper.length).toEqual(1);
  });
});