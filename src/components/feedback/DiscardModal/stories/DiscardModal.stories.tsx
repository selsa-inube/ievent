import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@inubekit/button";
import { Tag } from "@inubekit/tag";

import { DiscardModal } from "../index";
import { DiscardModalUIProps } from "../interface";

const meta: Meta<typeof DiscardModal> = {
  title: "feedback/DiscardModal",
  component: DiscardModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const data = {
  id: "10",
  suscriber:
    "Modification of a portfolio obligation in LINIX / update_portfolio_obligation_ICLIENT",
  status: <Tag label="Sin Procesar" appearance="warning" weight="strong" />,
  datePublication: "2024/05/15 - 00:55:40",
  dateMaximus: "2025/05/15",
  error:
    "Los NFTs son tokens no fungibles únicos en la cadena de bloques. A diferencia de las criptomonedas, cada NFT es único. Se utilizan para certificar la propiedad de activos digitales y físicos.",
};

const Template: StoryFn<DiscardModalUIProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DiscardModal
          {...args}
          onCloseDiscardModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  infoData: data,
};

export default meta;
