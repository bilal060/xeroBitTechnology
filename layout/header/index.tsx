import React from "react";
import Logo from "component/styles/Images/logo";
import MenuList from "./menuList";

function AppHeader() {
  return (
    <>
      {/* <header className="custom-header">
        <a className="navbar-brand d-lg-inline-block d-none" to={""}>
          <div className="custom-header-logo">
            
          </div>
        </a> */}
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
            <Logo />
          </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                <MenuList />
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="custom-header-rightside">
                    <div>
                        <SearchIcon />
                    </div>
                    <div>
                        <NoticficationIcon />
                    </div>
                    <div>
                        <UserIcon />
                    </div>
                </div> */}
      {/* </header> */}
    </>
  );
}

export default AppHeader;
