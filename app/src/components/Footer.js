import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="wrapper">
              {/* column 1 */}
              <div className="col-md-3 col-sm-6">
                <h4>Contact </h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Get In Touch</a>
                  </li>
                  <li>
                    <a href="/">P.O. Box LG 25
Legon, Accra</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">+233-(0)302-213820</a>
                  </li>
                  <li>
                    <a href="/">+233-(0)302-213850</a>
                  </li>
                </ul>
              </div>

              {/* column 2*/}
              <div className="col-md-3 col-sm-6">
                <h4>Emergency </h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Wrong Item</a>
                  </li>
                  <li>
                    <a href="/"> Wrong Location</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Long waiting period</a>
                  </li>
                 
                </ul>
              </div>

              {/* column  3*/}
              <div className="col-md-3 col-sm-6">
                <h4>Remarks </h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="/"> Via Mail</a>
                  </li>
                  <li>
                    <a href="/"> Via Phone</a>
                  </li>
                  
                </ul>
              </div>

            
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} UG Delivery App-All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background-color: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
    text-align: center;
   
  }
  ul {
    list-style-type: none;
  }
  ul li a {
    color: var(--mainGrey);
    text-decoration: none;
  }
  ullia: hover {
    color: (--mainLightGrey);
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .col-md-3{
    justify-content: space-around;
    width: 20%;
    text-align: center;
  }
`;