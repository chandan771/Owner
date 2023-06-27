import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    .common-heading {
      padding: 9rem 0 5rem 0;
    }

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;
      }

      .form-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Fell Free to Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7541.037711798261!2d72.88260536291986!3d19.0848808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88798eebfc7%3A0xd46050593f4f4e1d!2sLabor%20Gate%20Pheonix%20Marketcity%20Mall!5e0!3m2!1sen!2sin!4v1687670383458!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqoaewa"
            method="POST"
            className="form-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="write your email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
