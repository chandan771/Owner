import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { BiLogoTwitter } from "react-icons/bi";
// import { FaYoutube } from "react-icons/fa";
// import { BsLinkedin, BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started?</h3>
            <h3>Talk to us Today</h3>
          </div>

          <div>
            <NavLink to="/">
              <button className="button-10">
                <i>Get started</i>
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Footer section */}

      <footer>
        <div className="container grid grid-four-column">
          {/* first column */}

          <div className="footer-about">
            <h3>
              <i>AECOM</i>
            </h3>
            <p>
              It's makes it possible for machines to learn from experience,
              adjust to new inputs and perform human-like tasks.
            </p>
          </div>

          {/* second column */}

          <div className="footer-subs">
            <h3>
              <i>Join Us to get important Updates</i>
            </h3>
            <form action="#">
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <input type="submit" value="subscribe" />
            </form>
          </div>

          {/* third column */}

          <div className="footer-social">
            <h3>Follow Us</h3>

            <div className="social-icons">
              {/* <BsDiscord />

              <BiLogoTwitter />

              <BsLinkedin />

              <FaYoutube /> */}

              <div className="circle">
                <i className="fa-brands fa-discord"></i>
              </div>

              <div className="circle">
                <i className="fa-brands fa-youtube"></i>
              </div>

              <div className="circle">
                <i className="fa-brands fa-linkedin"></i>
              </div>

              {/* <div className="circle">
                <i className="fa-brands fa-facebook face"></i>
              </div> */}
            </div>
          </div>

          {/* forth column */}

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3 className="number">+01 6342870172</h3>
          </div>
        </div>

        {/* footer bottom section */}

        <div className="bottom-section">
          <hr />
          <div className="container grid grid-two-column">
            <p>Ⓒ{new Date().getFullYear()} All Rights Reserved</p>

            <div>
              <p>Privacy Policy</p>
              <p>Terms & Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #f9f9ff;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  .number {
    width: 14vw;
    cursor: pointer;
  }

  .bottom-section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  .button-10 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
    border-radius: 6px;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;

    color: #fff;
    background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
    background-origin: border-box;
    box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-10:focus {
    box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
      0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
      font-weight: 400;
      font-size: 24px;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      width: 25vw;
    }

    .social-icons {
      display: flex;
      gap: 2rem;

      .circle {
        padding: 1rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.white};

        .fa-brands {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;

          .fa-brands .face:hover {
            color: dodgerblue;
          }
        }
      }
    }
  }
`;

export default Footer;
