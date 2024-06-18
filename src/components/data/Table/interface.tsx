import { useMemo } from "react";
import { MdInfoOutline } from "react-icons/md";
import { Text } from "@inubekit/text";
import { useMediaQuery } from "@inubekit/hooks";
import { useMediaQueries } from "@inubekit/hooks";
import { Icon } from "@inubekit/icon";
import { SkeletonLine } from "@inubekit/skeleton";

import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThAction,
  StyledThTitle,
  StyledTd,
  StyledThActionResponsive,
  StyledTdActions,
  StyledContainer,
} from "./styles";
import { IAction, IActions, IBreakpoint, ITitle } from "./props";
import { ITable } from ".";

const actionsLoading = (numberActions: number) => {
  const cellsOfActionsLoading = [];
  for (let cellAction = 0; cellAction < numberActions; cellAction++) {
    cellsOfActionsLoading.push(
      <StyledTd key={cellAction}>
        <SkeletonLine animated />
      </StyledTd>
    );
  }
  return cellsOfActionsLoading;
};

const dataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <StyledTr key={rows}>
        {titleColumns.map((title) => (
          <StyledTd key={`e-${title.id}`}>
            <SkeletonLine animated />
          </StyledTd>
        ))}
        {actionsLoading(numberActions)}
      </StyledTr>
    );
  }
  return rowsLoading;
};

function findCurrentMediaQuery(currentMediaQuery: { [key: string]: boolean }) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles: ITitle[], numColumns: number) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(
  titles: ITitle[],
  breakpoints: IBreakpoint[],
  media: Record<string, boolean>
) {
  const numColumns = breakpoints[findCurrentMediaQuery(media)].totalColumns;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

function showActionTitle(
  actionTitle: IAction[],
  actionTitleResponsive: IAction[],
  mediaQuery: boolean
) {
  return !mediaQuery
    ? actionTitle.map((action) => (
        <StyledThAction key={`action-${action.id}`}>
          <Text type="label" size="medium" textAlign="center" appearance="dark">
            {action.actionName}
          </Text>
        </StyledThAction>
      ))
    : actionTitleResponsive.map((action, index) =>
        actionTitleResponsive.length - 1 !== index ? (
          <StyledThActionResponsive key={action.id}></StyledThActionResponsive>
        ) : (
          <StyledThActionResponsive key={"action-00"}>
            <Icon appearance="primary" icon={<MdInfoOutline />} size="24px" />
          </StyledThActionResponsive>
        )
      );
}

function ShowAction(
  actionContent: IAction[],
  actionContentResponsive: IAction[],
  entry: IActions,
  mediaQuery: boolean
) {
  return !mediaQuery ? (
    <>
      {actionContent.map((action) => (
        <StyledTdActions key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </StyledTdActions>
      ))}
    </>
  ) : (
    <>
      {actionContentResponsive.map((action) => (
        <StyledTdActions key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </StyledTdActions>
      ))}
    </>
  );
}

const TableUI = (props: Omit<ITable, "id">) => {
  const {
    actions,
    actionsResponsive,
    entries,
    breakpoints,
    loading,
    pageLength,
    titles,
    widthColumnSuscriber,
  } = props;

  const mediaActionOpen = useMediaQuery("(max-width: 1120px)");

  const queriesArray = useMemo(
    () => breakpoints!.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints]
  );

  const media = useMediaQueries(queriesArray);

  const TitleColumns = useMemo(
    () => totalTitleColumns(titles, breakpoints!, media),
    [titles, breakpoints, media]
  );

  const numberActions = actions ? actions.length : 0;

  return (
    <StyledContainer>
      <StyledTable>
        <StyledThead>
          <StyledTr>
            {TitleColumns.map((title) => (
              <StyledThTitle key={`title-${title.id}`}>
                <Text
                  type="label"
                  size="medium"
                  appearance="dark"
                  textAlign="start"
                >
                  {title.titleName}
                </Text>
              </StyledThTitle>
            ))}
            {showActionTitle(actions, actionsResponsive, mediaActionOpen)}
          </StyledTr>
        </StyledThead>
        <StyledTbody>
          {loading ? (
            dataLoading(TitleColumns, numberActions)
          ) : (
            <>
              {entries.map((entry) => (
                <StyledTr
                  key={`entry-${entry.id}`}
                  aria-labelledby={`entry-${entry.id}`}
                  $pageLength={pageLength}
                  $entriesLength={entries.length}
                  $widthColumnSuscriber={widthColumnSuscriber}
                >
                  {TitleColumns.map((title) => (
                    <StyledTd key={`e-${entry[title.id]}`}>
                      <Text
                        type="body"
                        size="small"
                        appearance="dark"
                        textAlign="start"
                        ellipsis
                      >
                        {entry[title.id]}
                      </Text>
                    </StyledTd>
                  ))}
                  {ShowAction(
                    actions,
                    actionsResponsive,
                    entry,
                    mediaActionOpen
                  )}
                </StyledTr>
              ))}
            </>
          )}
        </StyledTbody>
      </StyledTable>
    </StyledContainer>
  );
};

export { TableUI };
