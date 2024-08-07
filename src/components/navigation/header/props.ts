interface IHeaderLink {
    label: string;
    path: string;
    icon: React.JSX.Element;
  }
  
  const parameters = {
    docs: {
      description: {
        component:
          "The header is a user interface element within a web page that contains links to other sections of the website.",
      },
    },
  };
  
  const props = {
    navigation: {
      description:
        "The primary object that will organize and store the requisite paths for the correct operation of the Nav component is forthcoming and is required",
    },
    logoURL: {
      description:
        "prop accepts a component to be used as the logo in the header. This component can be an image, an icon, stylized text or any other visual element that represents the brand identity.",
    },
    userName: {
      description: "shall be the displayed username",
      table: {
        defaultValue: { summary: "MdPersonOutline" },
      },
    },
    client: {
      description: "shall be the displayed business Unit",
      table: {
        defaultValue: { summary: "MdPersonOutline" },
      },
    },
    portalId: {
      description: "id of the portal element",
    },
    showLinks: {
      description:
        "Boolean flag to control the visibility of the links in the header",
      table: {
        defaultValue: { summary: false },
      },
    },
    showUser: {
      description:
        "Boolean flag to control the visibility of the user component in the header",
      table: {
        defaultValue: { summary: true },
      },
    },
  };
  
  export { props, parameters };
  export type { IHeaderLink };