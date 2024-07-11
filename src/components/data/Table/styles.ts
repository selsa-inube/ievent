import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledTr {
  $smallScreen?: boolean;
  $entriesLength?: number;
  $pageLength?: number | undefined;
  $widthColumnSuscriber?: string | undefined;
}

interface IStyledTable {
  $smallScreen: boolean;
}

interface IStyledTd {
  $smallScreen?: boolean;
}

interface IStyledThead {
  $smallScreen?: boolean;
}

interface IStyledTdActions {
  $smallScreen?: boolean;
}

const StyledContainer = styled.div`
  border-radius: 8px;
  position: relative;
  border: 1px solid ${inube.palette.neutral.N40};
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table<IStyledTable>`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: ${({ $smallScreen }) => ($smallScreen ? "fixed" : "auto")};
  width: 100%;
`;

const StyledThead = styled.thead<IStyledThead>`
  border-bottom: solid 1px
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  position: sticky;
  top: 0;
  z-index: 1;

  tr {
    box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.1);
  }

  tr th:nth-child(1) {
    box-shadow: ${({ $smallScreen }) =>
      $smallScreen && "inset -3px 0px 0px 0px rgba(0, 0, 0, 0.10)"};
  }
`;

const StyledTbody = styled.tbody`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
`;

const StyledTr = styled.tr<IStyledTr>`
  border-bottom: solid 1px
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  height: 40px;

  @media (max-width: 1120px) {
    :hover {
      background-color: ${({ theme }) =>
        theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
      overflow-x: auto;
    }
  }

  td:nth-child(1) {
    width: ${({ $widthColumnSuscriber }) => $widthColumnSuscriber};
  }

  td:nth-last-child(2) {
    border-left: ${({ $smallScreen, theme }) =>
      ($smallScreen && "1px solid" + theme?.palette?.neutral?.N40) ||
      inube.palette.neutral.N40};
    box-shadow: ${({ $smallScreen }) =>
      $smallScreen && "-2px 1px 0px 0px rgba(0, 0, 0, 0.10)"};
  }

  &:last-child {
    border-bottom: ${({ $entriesLength, $pageLength }) =>
      $pageLength && $entriesLength && $entriesLength < $pageLength && "none"};
  }
`;

const StyledThTitle = styled.th`
  padding: 12px 16px;
`;

const StyledThAction = styled.th`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  width: 80px;
  padding: 12px 16px;
`;

const StyledThActionResponsive = styled.th`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  width: 50px;
`;

const StyledTd = styled.td<IStyledTd>`
  padding: ${({ $smallScreen }) =>
    $smallScreen ? "0px 0px 0px 16px" : "0px 16px"};
  text-align: center;

  p {
    white-space: nowrap;
    text-overflow: clip;
  }
`;

const StyledTdActions = styled.td<IStyledTdActions>`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  text-align: center;
`;

export {
  StyledContainer,
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThTitle,
  StyledThAction,
  StyledThActionResponsive,
  StyledTd,
  StyledTdActions,
};
