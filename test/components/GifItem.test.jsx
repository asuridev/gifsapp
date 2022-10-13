import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("validando el componente <GifItem />", () => {
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title="hola mundo" url="www.jgjgj.jpg" />);
    expect(container).toMatchSnapshot();
  });
});
