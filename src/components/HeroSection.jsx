import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";

const HeroSection = () => {
  const { name, image, para } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top">This is Us</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">{para}</p>

          <button className="button">
            <NavLink to="/">Know more</NavLink>
          </button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="" srcSet="" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* padding: 2rem 0; */

  .section-hero-data {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .hero-top {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    width: 80%;
  }

  .button {
    text-decoration: none;
    max-width: 17rem;
    background-color: rgb(98, 84, 243);
    color: rgb(255, 255, 255);
    padding: 1.4rem 2.4rem;
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

    a {
      text-decoration: none;
      color: rgb(255 255 255);
      font-size: 1.8rem;
    }
  }
`;
export default HeroSection;
