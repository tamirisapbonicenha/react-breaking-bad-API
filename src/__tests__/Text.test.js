import * as React from "react";
import { render } from "enzyme";

import Text from "../components/Text";

const text = 'Stay out of my territory.';

describe("Testando <Text />", () => {

  it("deve renderizar um <p>", () => {
    const wrapper = render(<Text text={text} />);
    expect(wrapper.length).toEqual(1);
  });
});