import * as React from "react";
import { render } from "enzyme";

import Avatar from "../components/Avatar";

const name = 'Tamiris Bonicenha';
const src = "https://scontent.frao1-1.fna.fbcdn.net/v/t1.0-9/37743327_2100069593414245_2568325442972942336_n.jpg?_nc_cat=106&_nc_oc=AQkaW0poSJWi0lX3KUNJiH_iQrYwF74FDseK-bvlQzV_Uf_FkwoPRUbKo3YGMka2VxY&_nc_ht=scontent.frao1-1.fna&oh=93ae9fb309b429136b408d8afa34c4b3&oe=5DF8F90D";

describe("Testando <Avatar />", () => {

  it("deve renderizar uma <img> de avatar", () => {
    const wrapper = render(<Avatar src={src} name={name} />);
    expect(wrapper.length).toEqual(1);
  });
});