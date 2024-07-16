import styled from "styled-components";

const StyledErrorMessageFlag = styled.div`
  width: auto;
  position: fixed;
  bottom: 32px;
  right: 24px;

  @media (max-width: 564px) {
    left: 24px;
  }
`;

export { StyledErrorMessageFlag };
