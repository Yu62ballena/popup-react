import React from "react";

function Header() {
  return (
    <header className="header">
      {/* splide */}
      {/* <div
        className="splide bg-images"
        aria-label="main-bg-slide"
      >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div>
                <img
                  src="/images/0425_012.jpg"
                  alt="ホーローバン"
                />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img
                  src="/images/0425_009.jpg"
                  alt="エッグタルト"
                />
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <img
                  src="/images/0425_011.jpg"
                  alt="マーラーガオ"
                />
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="bg-images">
        <img
          className="w-full"
          src="/images/0425_012.jpg"
          alt="ボーローバン"
        />
      </div>

      {/* splide ここまで */}

      <div className="menu">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt=""
          />
        </div>
        <div className="links">
          <ul>
            <li id="messageBtn">Message</li>
            <li id="menuBtn">Menu</li>
            <li id="accessBtn">Access</li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div>
          <h1>
            <span className="sp-title">HongKong</span>
            <br className="sp-br" />
            <span className="popup">
              {" "}
              Swe<span className="u-anim">e</span>ts
            </span>
            <br className="sp-br" />
            <div>
              <span className="popup-store">
                Pop-up <br className="pc-none sp-br" />
                Store
              </span>
              <span className="by-heigei">
                produced by He<span className="i-jump">i</span>ge
                <span className="i-jump">i</span>
              </span>
            </div>
            <br />
          </h1>
        </div>
        <p className="sp-none"></p>
        <p className="date">5/20 ~ 5/31</p>
      </div>
    </header>
  );
}

export default Header;
