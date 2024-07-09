import styled from "styled-components";
import { Link } from "react-router-dom";

import { MenuItemSpacingType } from "./types";

interface IStyledMenuItemLink {
  spacing: MenuItemSpacingType;
  disabled: boolean;
}

const StyledMenuItemLink = styled(Link)<IStyledMenuItemLink>`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  height: ${(props) => (props.spacing === "wide" ? "40px" : "36px")};
  padding: ${(props) =>
    props.spacing === "wide"
      ? `15px 20px`
      : `10px 15px`};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.hover};
  }
`;

export { StyledMenuItemLink };
