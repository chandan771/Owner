import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/service" className="navbar-link">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="navbar-link">
              Contact
            </NavLink>
          </li>

          <li>{isAuthenticated && <p>{user.name}</p>}</li>

          {isAuthenticated ? (
            <li>
              <button
                className="button"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="button" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .button {
      text-decoration: none;
      background-color: rgb(98, 84, 243);
      color: rgb(255, 255, 255);
      padding: 0.2rem 1rem;
      border: none;
      text-transform: uppercase;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;

      &:hover,
      &:active {
        box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: scale(0.96);
      }
    }
  }
`;
export default Navbar;
