'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F3F3E9;
    box-sizing: border-box;
    font-size: 16px;
    overflow-x: hidden;
    --red: #ed4934;
    --orange: #f5882d;
    --orange-light: #ffc799;
    --blue: #1b9393;
    --blue-light: #a6f2f2;
    --bg-color: #fff;
    --gray: #777;
    --near-black: #493e36;
    --dark-gray: #4d3d33;
    --light-gray: #eee;
    font-family: "Rubik", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    line-height: 2rem;
    color: var(--near-black);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 2.3rem;
    font-weight: lighter;
    letter-spacing: 0.5px;
  }

  h2 {
    font-size: 1rem;
    font-weight: lighter;
    letter-spacing: -0.5px;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: -0.5px;
  }
  h4 {
    font-size: 0.7rem;
    font-weight: normal;
    letter-spacing: -0.5px;
  }
  p {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 0.5px;
  }
  a {
    text-decoration: none;
    box-shadow: none;

    &.button {
      -moz-box-align: center;
      align-items: center;
      background-color: transparent;
      display: inline-flex;
      cursor: pointer;
      font-weight: 700;
      line-height: 1;
      padding: 16px 32px;
      background-color: var(--orange-light);
      color: var(--dark-gray);
      border-radius: 10px;
      transition: transform 0.5s ease;
      text-transform: capitalize;
      justify-content: center;
      width: 21ch;
      align-self: center;
      margin: 3vh 0;
    }

    &.button:hover {
      transform: scale(1.1);
    }

    &.button svg {
      font-size: 18px;
      margin: 0 5px;
    }
  }

  .container {
    padding: 0px 4vw;
  }

  @media (min-width: 1000px) {
    html,
    body {
      font-size: 17px;
    }

  }

  @media (min-width: 1200px) {
    html,
    body {
      font-size: 18px;
    }

    .layout {
      padding: 0 10vw;
    }
  }

  @media(min-width: 1600px) {
    html,
    body {
      font-size: 25px;
    }
  }

  @layer utilities {
    .text-balance {
      text-wrap: balance;
  }
}
`