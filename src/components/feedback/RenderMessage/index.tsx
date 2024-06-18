import { Stack } from "@inubekit/stack";
import { SectionMessage } from "@inubekit/sectionmessage";

import { StyledMessageContainer } from "./styles";
import { IUserMessage } from "./types";

interface IRenderMessageProps {
  message: IUserMessage;
  handleCloseMessage: () => void;
  onMessageClosed: () => void;
}

const RenderMessage = (props: IRenderMessageProps) => {
  const { message, handleCloseMessage, onMessageClosed } = props;
  if (!message.data) return null;

  const closeMessageAndExecuteCallback = () => {
    handleCloseMessage();
    onMessageClosed();
  };

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          appearance={message.data.appearance}
          closeSectionMessage={closeMessageAndExecuteCallback}
          description={message.data.description}
          duration={4000}
          icon={message.data.icon}
          title={message.data.title}
          isMessageResponsive={false}
        />
      </Stack>
    </StyledMessageContainer>
  );
};

export { RenderMessage };
export type { IRenderMessageProps };
