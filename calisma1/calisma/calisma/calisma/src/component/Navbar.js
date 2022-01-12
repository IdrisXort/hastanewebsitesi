import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisibleTanitim: false,
      isVisibleYönetim: false,
      isVisibleBölümler: false,
      isVisibleDoktorlar: false,
      isVisibleIletisim: false,
      TanitimBeyaz: false,
      YönetimBeyaz: false,
      BölümlerBeyaz: false,
      DoktorlarBeyaz: false,
      IletisimBeyaz: false,
    };
  }

  onClickGosterTanitim = (boolean, event) => {
    console.log("tanitimcalisti");
    this.setState({ isVisibleTanitim: !this.state.isVisibleTanitim });
    this.setState({ TanitimBeyaz: !this.state.TanitimBeyaz });

    console.log(this.state.isVisibleTanitim);
  };

  onClickGosterYönetim = (boolean, event) => {
    console.log("yönetimcalisti");
    this.setState({ isVisibleYönetim: !this.state.isVisibleYönetim });
    console.log(this.state.isVisibleYönetim);
    this.setState({ YönetimBeyaz: !this.state.YönetimBeyaz });
  };

  onClickGosterBölümler = (boolean, event) => {
    this.setState({ isVisibleBölümler: !this.state.isVisibleBölümler });
    console.log(this.state.isVisibleBölümler);
    this.setState({ BölümlerBeyaz: !this.state.BölümlerBeyaz });

    console.log("bölümlercalisti");
  };

  onClickGosterDoktorlar = (boolean, event) => {
    this.setState({ isVisibleDoktorlar: !this.state.isVisibleDoktorlar });
    console.log(this.state.isVisibleDoktorlar);
    this.setState({ DoktorlarBeyaz: !this.state.DoktorlarBeyaz });

    console.log("doktorlarcalisti");
  };

  onClickGosterIletisim = (boolean, event) => {
    this.setState({ isVisibleIletisim: !this.state.isVisibleIletisim });
    console.log(this.state.isVisibleIletisim);
    this.setState({ IletisimBeyaz: !this.state.IletisimBeyaz });

    console.log("Iletisimcalisti");
  };

  render() {
    const { isVisibleTanitim } = this.state;
    const { isVisibleYönetim } = this.state;
    const { isVisibleBölümler } = this.state;
    const { isVisibleDoktorlar } = this.state;
    const { isVisibleIletisim } = this.state;
    let btnclass = this.state.TanitimBeyaz
      ? " WhiteButton "
      : " NavbarButtonStyles";
    let btnclass1 = this.state.YönetimBeyaz
      ? " WhiteButton "
      : " NavbarButtonStyles";
    let btnclass2 = this.state.BölümlerBeyaz
      ? " WhiteButton "
      : " NavbarButtonStyles";
    let btnclass3 = this.state.DoktorlarBeyaz
      ? " WhiteButton "
      : " NavbarButtonStyles";
    let btnclass4 = this.state.IletisimBeyaz
      ? " WhiteButton "
      : " NavbarButtonStyles";

    // let btnclass = this.state.isVisibleTanitim
    //   ? " WhiteButton "
    //   : " NavbarButtonStyles";

    return (
      <div>
        <nav className=" navbar navbar-expand-lg navbar-light Navbarcolor NavbarStyles ">
          <div className=" container   ">
            <div>
              <a
                className="navbar-brand text-light  "
                href="http://ftm.firat.edu.tr/"
              >
                <img
                  className="   BrandPadding "
                  src="hastanelogo2.png"
                  height=" 80"
                ></img>
              </a>
            </div>

            <div
              className="   collapse.navbar-collapse NavbarDiv   "
              id="navbarSupportedContent"
            >
              <ul className=" navbar-nav mr-auto NavbarStyles  ">
                <li className="nav-item dropdown">
                  <div
                    role="button"
                    className="nav-link dropdown-toggle  "
                    data-bs-toggle="dropdown"
                    className={btnclass}
                    onMouseEnter={this.onClickGosterTanitim.bind(this, true)}
                    onMouseLeave={this.onClickGosterTanitim.bind(this, false)}
                  >
                    Tanıtım
                  </div>
                  {isVisibleTanitim ? (
                    <div>
                      <ul>
                        <li> hasan</li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <div
                    
                    role="button"
                    className=" nav-link dropdown-toggle  "
                    data-bs-toggle="dropdown"
                    className={btnclass1}
                    onMouseEnter={this.onClickGosterYönetim.bind(this, true)}
                    onMouseLeave={this.onClickGosterYönetim.bind(this, false)}
                  >
                    Yönetim
                  </div>
                  {isVisibleYönetim ? (
                    <div>
                      <ul>
                        <li> idris</li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <div
                    role="button"
                    className="nav-link dropdown-toggle  "
                    data-bs-toggle="dropdown"
                    className={btnclass2}
                    onMouseEnter={this.onClickGosterBölümler.bind(this, true)}
                    onMouseLeave={this.onClickGosterBölümler.bind(this, false)}
                  >
                    Bölümler
                  </div>
                  {isVisibleBölümler ? (
                    <div>
                      <ul>
                        <li> idris</li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <div
                    role="button"
                    className="nav-link dropdown-toggle  "
                    data-bs-toggle="dropdown"
                    className={btnclass3}
                    onMouseEnter={this.onClickGosterDoktorlar.bind(this, true)}
                    onMouseLeave={this.onClickGosterDoktorlar.bind(this, false)}
                  >
                    Doktorlar
                  </div>
                  {isVisibleDoktorlar ? (
                    <div>
                      <ul>
                        <li> reşit</li>
                      </ul>
                    </div>
                  ) : null}
                </li>
                <li className="nav-item dropdown">
                  <div
                    role="button"
                    className="nav-link dropdown-toggle  "
                    data-bs-toggle="dropdown"
                    className={btnclass4}
                    onMouseLeave={this.onClickGosterIletisim.bind(this, false)}
                    onMouseEnter={this.onClickGosterIletisim.bind(this, true)}
                  >
                    İletişim
                  </div>
                   {isVisibleIletisim ? (
                    <div>
                      <ul>
                        <li> enes</li>
                      </ul>
                    </div>
                  ) : null} 

                </li>
              </ul>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Arama"
                  aria-label="Arama"
                ></input>
                <button
                  className="btn btn-outline-light text-light"
                  type="submit"
                >
                  Arama
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
