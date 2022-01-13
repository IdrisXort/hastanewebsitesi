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

    return (
      <div>
        <nav className="  navbar  navbar-expand-lg  ">
    
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#KucukMenu"
          ></button>
          <span className="navbar-toggle-icon"> </span>
          <div
            className=" collapse navbar-collapse NavbarStyles nav justify-content-end "
            id="KucukMenu"
          >
            <img className="brand" src="hastanelogo2.png" height={90} ></img>
            <ul className=" navbar-nav  ">
              <li
                className="nav-item"
                role="button"
                className={btnclass}
                onMouseEnter={this.onClickGosterTanitim.bind(this, true)}
                // onMouseLeave={this.onClickGosterTanitim.bind(this, false)}
              >
                Tanitim
                {isVisibleTanitim ? (
                  <ul>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                  </ul>
                ) : null}
              </li>
              <li
                role="button"
                className={btnclass1}
                onMouseEnter={this.onClickGosterYönetim.bind(this, true)}
                onMouseLeave={this.onClickGosterYönetim.bind(this, false)}
              >
                Yönetim
                {isVisibleYönetim ? (
                  <ul>
                    <li> idris</li> <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                  </ul>
                ) : null}
              </li>
              <li
                role="button"
                className={btnclass2}
                onMouseEnter={this.onClickGosterBölümler.bind(this, true)}
                onMouseLeave={this.onClickGosterBölümler.bind(this, false)}
              >
                Bölümler
                {isVisibleBölümler ? (
                  <ul>
                    <li> idris</li> <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                    <li>Rektörümüz</li>
                  </ul>
                ) : null}
              </li>
              <li
                role="button"
                className={btnclass3}
                onMouseEnter={this.onClickGosterDoktorlar.bind(this, true)}
                onMouseLeave={this.onClickGosterDoktorlar.bind(this, false)}
              >
                Doktorlar
                {isVisibleDoktorlar ? (
                  <ul>
                    <li> reşit</li>
                  </ul>
                ) : null}
              </li>
              <li
                role="button"
                className={btnclass4}
                onMouseLeave={this.onClickGosterIletisim.bind(this, false)}
                onMouseEnter={this.onClickGosterIletisim.bind(this, true)}
              >
                İletişim
                {isVisibleIletisim ? (
                  <ul>
                    <li> enes</li>
                  </ul>
                ) : null}
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Arama"
                aria-label="Arama"
              ></input>
              <button className="btn btn-outline-light text-red" type="submit">
                Arama
              </button>
            </form>
          </div>
        </nav>{" "}
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default Navbar;
