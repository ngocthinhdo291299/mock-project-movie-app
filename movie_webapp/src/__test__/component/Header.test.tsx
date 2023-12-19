import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../../components/header/Header";
import { store } from "../const/constant";
import { MemoryRouter } from "react-router-dom";

describe("Header Component", () => {
  test("render Header", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeTruthy();
  });
});

describe("Header component useEffect", () => {
  // Mock the scroll functions
  beforeEach(() => {
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 0,
      writable: true,
    });
    Object.defineProperty(document.body, "scrollTop", {
      value: 0,
      writable: true,
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
  });

  test("applies styles when scrolling down", () => {
    // Simulate scrolling using userEvent\
    const headerMixMode = screen.getByTestId("headerMixMode");
    const headerRef = screen.getByTestId("headerRef");
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 71,
      writable: true,
    });
    fireEvent.scroll(window, { target: { scrollY: 71 } });

    expect(headerMixMode.style.backgroundColor).toBe("rgb(33, 51, 70)");
    expect(headerRef.classList).toContain("fixed");
    //rgb(33, 51, 70) == #213346
    jest.restoreAllMocks();
  });
  afterAll(() => {
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 0,
      writable: true,
    });
    Object.defineProperty(document.body, "scrollTop", {
      value: 0,
      writable: true,
    });
  });
  test("applies styles when scrolling up", () => {
    // Simulate scrolling using userEvent\
    const headerMixMode = screen.getByTestId("headerMixMode");
    const headerRef = screen.getByTestId("headerRef");
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 70,
      writable: true,
    });
    fireEvent.scroll(window, { target: { scrollY: 70 } });

    expect(headerMixMode.style.backgroundColor).toBe("");
    expect(headerRef.classList).not.toContain("fixed");

    //rgb(33, 51, 70) == #213346
    jest.restoreAllMocks();
  });
  afterAll(() => {
    Object.defineProperty(document.documentElement, "scrollTop", {
      value: 0,
      writable: true,
    });
    Object.defineProperty(document.body, "scrollTop", {
      value: 0,
      writable: true,
    });
  });
});
