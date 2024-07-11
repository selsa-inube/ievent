import { Stack } from "@inubekit/stack"
import { Text } from "@inubekit/text"
import { Icon } from "@inubekit/icon"

import { StyledMenuItemLink } from "./styles";
import { MenuItemSpacingType } from "./types";

interface MenuItemProps {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  isDisabled?: boolean;
  path?: string;
  onClick?: () => void;
}

function MenuItem(props: MenuItemProps) {
  const {
    title,
    description,
    spacing = "wide",
    iconBefore,
    iconAfter,
    isDisabled = false,
    path = "#",
    onClick,
  } = props;

  return (
    <StyledMenuItemLink
      spacing={spacing}
      disabled={isDisabled}
      to={path}
      onClick={onClick}
    >
      <Stack gap="15px" alignItems="center">
        {iconBefore && (
          <Icon
            icon={iconBefore}
            spacing="none"
            size="24px"
            appearance="dark"
            disabled={isDisabled}
          />
        )}
        <Stack gap="10px">
          <Text type="label" size="large" disabled={isDisabled}>
            {title}
          </Text>
          <Text
            type="body"
            size="small"
            appearance="gray"
            disabled={isDisabled}
          >
            {description}
          </Text>
        </Stack>
      </Stack>
      {iconAfter && (
        <Icon
          icon={iconAfter}
          spacing="none"
          size="24px"
          appearance="dark"
          disabled={isDisabled}
        />
      )}
    </StyledMenuItemLink>
  );
}

export { MenuItem };
export type { MenuItemProps };
