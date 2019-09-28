import * as React from "react";
import { render } from "enzyme";

import InputSearch from "../components/InputSearch";

const value = 'Walter White';
const placeholder = "Buscar"

describe("Testando <InputSearch />", () => {

  it("deve renderizar um <input type=search>", () => {
    const wrapper = render(<InputSearch value={value} placeholder={placeholder} />);
    expect(wrapper.length).toEqual(1);
  });
});