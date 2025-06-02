import { render, screen } from "@testing-library/react";
import { TableItem } from "./TableItem";

describe("<TableItem />", () => {
  test("should render successfully with provided data", () => {
    const mockData = {
      filename: "test2.csv",
      text: "hzGAHwHWxpQvdHjHMWwHaRjwtZuyp",
      number: 104705,
      hex: "e57ea5e52342dc3d756ceb182931ade3",
    };

    render(
      <table>
        <tbody>
          <TableItem {...mockData} />
        </tbody>
      </table>
    );
    expect(screen.getByText(mockData.filename)).toBeInTheDocument();
    expect(screen.getByText(mockData.text)).toBeInTheDocument();
    expect(screen.getByText(mockData.number.toString())).toBeInTheDocument();
    expect(screen.getByText(mockData.hex)).toBeInTheDocument();
  });
});
