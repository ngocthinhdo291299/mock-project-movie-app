import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Footer from "../../components/footer/Footer";
import { MemoryRouter } from "react-router-dom";
import { store } from "../const/constant.ts";


describe("Footer Component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );
  });
  test("render hero slider", () => {
    const footer = screen.getByTestId("footer")
    expect(footer).toBeTruthy();
  })
  test("test author in footer", () => {

  })
});
