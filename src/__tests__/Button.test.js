import * as React from "react";
import { render } from "enzyme";

import Button from "../components/Button";

const text = 'Eu sou um botão!';

describe("Testando <Button />", () => {

  it("deve renderizar um <button>", () => {
    const wrapper = render(<Button text={text} />);
    expect(wrapper.length).toEqual(1); 
  });
});