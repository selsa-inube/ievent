import styled from "styled-components";


interface IStyledDivider {
  $dashed?: boolean;
}

const StyledDivider = styled.hr<IStyledDivider>`
  margin: 0;
  width: 100%;
  height: 0px;
  border: none;
  border-top: 0.5px ${({ $dashed }) => ($dashed ? "dashed" : "solid")};
  border-top-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular};
`;
export { StyledDivider };
