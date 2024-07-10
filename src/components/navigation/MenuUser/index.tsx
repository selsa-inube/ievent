import { Stack } from "@inubekit/stack"
import { Text } from "@inubekit/text"
import { Avatar } from "@inubekit/avatar"

import { StyledAvatarContainer } from "./styles"

interface MenuUserProps {
  userName: string;
  businessUnit?: string;
  avatar?: boolean;
}

function MenuUser(props: MenuUserProps) {
  const { userName, businessUnit = "Linix", avatar = true } = props;

  return (
    <Stack gap="20px" padding="10px 20px">
      {avatar && (
        <Stack direction="column" justifyContent="center">
          <StyledAvatarContainer>
            <Avatar />
          </StyledAvatarContainer>
        </Stack>
      )}
      <Stack direction="column" justifyContent="center">
        <Text type="body" size="medium">
          {userName}
        </Text>
        <Text type="body" size="small" appearance="gray">
          {businessUnit}
        </Text>
      </Stack>
    </Stack>
  );
}

export type { MenuUserProps };
export { MenuUser };
