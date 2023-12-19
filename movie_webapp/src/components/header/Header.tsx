import { useEffect, useRef,useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoWebComponent } from "react-icons/io5";
import NavSide from "../tablet-nav-sidebar/NavSide";
import HeaderNav from "./HeaderNav";
import "./header.scss";
function Header() {
  const headerRef = useRef<any>();
  const headerMixMode = useRef<any>();
  const animation = useRef<any>();
  const [translateSidebarHeader, setTranslateSidebarHeader] =
    useState("-250px");
  const [backgroundColorHeader, setBackgroundColorHeader] = useState("");
  const [opacityOverlay, setOpacityOverlay] = useState("0");  
  const [overlay, setOverlay] = useState(false);

  const navSideProps={
    translateSidebarHeader,
    setTranslateSidebarHeader,
    overlay,
    opacityOverlay,
    setOpacityOverlay,
    setOverlay,
  }

  useEffect(() => {
    const show = () => {
      if (headerMixMode.current && headerRef.current) {
        if (
          document.documentElement.scrollTop > 70 ||
          document.body.scrollTop > 70
        ) {
          headerRef.current.classList.add("fixed");
          setBackgroundColorHeader("#213346");
        } else {
          headerRef.current.classList.remove("fixed");
          setBackgroundColorHeader("");
        }
      }
    };
    const srollEvent = window.addEventListener("scroll", show);
    return () => {
      window.removeEventListener("scroll", () => srollEvent);
    };
  });
  
  const handleShowSide = () => {
    setTranslateSidebarHeader("0");
    setOverlay(true);
    setOpacityOverlay("1");
    document.body.style.overflowY = "hidden";
    // document.body.style.marginRight = "17px";
  };
   
  return (
    <header data-testid="header">
      <NavSide
       {...navSideProps}
      />
      <div
        ref={headerMixMode}
        style={{ backgroundColor: backgroundColorHeader }}
        className="header-mix-mode"
        data-testid="headerMixMode"
      ></div>
      <div ref={headerRef} className="header" data-testid="headerRef">
        <div className="container">
          <div className="header-flex ">
            <div className="header-flex-tablet">
              <div onClick={handleShowSide} className="header-bar">
                <FaBars />
              </div>
              <Link to="/">
                <h1 className="header-branch">
                  <span>Lxt</span>
                  <span>
                    vide
                    <IoLogoWebComponent className="logo-icon" />
                  </span>
                </h1>
                <div
                  className="underline-logo"
                  style={{ width: 0, height: 0 }}
                  ref={animation}
                ></div>
              </Link>
            </div>
            <nav className="header-nav ">
              <HeaderNav className="header-nav-list" />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
