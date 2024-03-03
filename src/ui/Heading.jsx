import styled, { css } from "styled-components";

const test = `color: blue`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  /* ${test} */

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
`;

export default Header;
