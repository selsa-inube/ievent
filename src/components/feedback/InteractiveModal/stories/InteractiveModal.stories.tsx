import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { Button } from "@inubekit/button";
import { Tag } from "@inubekit/tag";
import { InteractiveModal, InteractiveModalProps } from "../index";

const meta: Meta<typeof InteractiveModal> = {
  title: "design/feedback/InteractiveModal",
  component: InteractiveModal,
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

const labels = [
  {
    id: "suscriber",
    titleName: "Suscriptor / Evento",
    priority: 0,
  },
  {
    id: "status",
    titleName: "Estado",
    priority: 1,
  },
  {
    id: "datePublication",
    titleName: "Fecha de publicación",
    priority: 2,
  },
  {
    id: "dateMaximus",
    titleName: "Fecha de ejecución máxima",
    priority: 3,
  },
  {
    id: "error",
    titleName: "Descripción error",
    priority: 4,
  },
];

const Template: StoryFn<InteractiveModalProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <InteractiveModal {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  title: "Detalle",
  infoData: data,
  infoTitle: "Suscriptor",
  labels: labels,
};

export default meta;
