import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledTr {
  $entriesLength?: number;
  $pageLength?: number | undefined;
}

const StyledContainer = styled.div`
  border-radius: 8px;
  position: relative;
  /* overflow: hidden; */
  overflow-x: auto;
  border: 1px solid ${inube.palette.neutral.N40};
`;

const StyledTable = styled.table`
  box-sizing: border-box;
  /* table-layout:fixed; */
  border-collapse: collapse;
  table-layout: auto;

  width: 100%;
`;

const StyledThead = styled.thead`
  border-bottom: solid 1px ${inube.palette.neutral.N40};
  background-color: ${inube.palette.neutral.N0};
`;

const StyledTbody = styled.tbody`
  background-color: ${inube.palette.neutral.N0};
`;

const StyledTr = styled.tr<IStyledTr>`
  border-bottom: solid 1px ${inube.palette.neutral.N40};
  height: 40px;

  td:nth-last-child(1) {
    position: sticky;
    right: 0;
  }

  td:nth-last-child(2) {
    background-color: green;
    position: sticky;
    right: 50px;
  }

  td:nth-last-child(3) {
    position: sticky;
    right: 100px;
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
  background-color: ${inube.palette.neutral.N30};
  width: 80px;
  padding: 12px 0px;
  position: sticky;
  right: 0;
`;

const StyledThActionResponsive = styled.th`
  background-color: ${inube.palette.neutral.N0};
  position: sticky;
  right: 0;
`;

const StyledTd = styled.td`
  padding: 0px 16px;
  text-align: center;

  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: nowrap;
  }
`;

const StyledTdActions = styled.td`
  z-index: 2;
  padding: 0px 16px;
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