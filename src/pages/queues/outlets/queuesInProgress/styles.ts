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

const StyledContainerToCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 calc(100%-1192px);
  align-items: center;
`;

export { StyledErrorMessageFlag, StyledContainerToCenter };
