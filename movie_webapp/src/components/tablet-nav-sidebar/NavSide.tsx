import { useEffect, useRef } from "react";
import { nav } from "../header/navName";
import { NavItem } from "../header/HeaderNav";

import ReactDOM from "react-dom";

import "./nav-sidebar.scss";
function NavSide(props: any) {
  const {
    translateSidebarHeader,
    setTranslateSidebarHeader,
    overlay,
    setOverlay,
    opacityOverlay,
  } = props;

  const refSidebarHeader = useRef<any>();

  const styleSidebar = {
    transform: `translateX(${translateSidebarHeader})`,
  };
  const styleOverlay = {
    opacity: opacityOverlay,
  };
  const overlayRef = useRef<any>();
  useEffect(() => {
    const mousedown = (e: any) => {
      if (e.target === overlayRef.current) {
        document.body.style.overflowY = "auto";
        document.body.style.marginRight = "0";
        setOverlay(false);
        setTranslateSidebarHeader("-250px");
      }
    };
    const mousedownEvent = window.addEventListener("mousedown", mousedown);
    return () => {
      window.removeEventListener("mousedown", () => mousedownEvent);
    };
  });
  const handLeOffNav = () => {
    setOverlay(false);
    setTranslateSidebarHeader("-250px");
    window.document.body.style.overflowY = "auto";
  };

  const sidebar = document.getElementById("sidebar");
  return sidebar
    ? ReactDOM.createPortal(
        <>
          {overlay && (
            <div
              data-testid="navSide"
              ref={overlayRef}
              style={styleOverlay}
              className="overlay"
            ></div>
          )}
          <div style={styleSidebar} className="header-sidebar-mobile">
            <div ref={refSidebarHeader} className="header-sidebar-link">
              {nav.map((e, i) => (
                <NavItem
                  key={i}
                  index={i}
                  e={e}
                  type="sidebar"
                  onClick={handLeOffNav}
                />
              ))}
            </div>
          </div>
        </>,
        sidebar
      )
    : null;
}

export default NavSide;
