import * as React from "react";
import { render } from "enzyme";

import Tag from "../components/Tag";

const text = 'Alive';

describe("Testando <Tag />", () => {

  it("deve renderizar um <p>", () => {
    const wrapper = render(<Tag text={text} />);
    expect(wrapper.length).toEqual(1);
  });
});