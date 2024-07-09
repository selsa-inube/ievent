import { Stack } from "@inubekit/stack"
import { Divider } from "@src/components/layout/Divider";
import { MenuHeading } from "../MenuHeading";
import { ISection } from "./types";
import { MenuItemSpacingType } from "../MenuItem/types";

import { MenuItem } from "../MenuItem";

interface MenuSectionProps {
  sections: ISection[];
  spacing?: MenuItemSpacingType;
  divider?: boolean;
}

function MenuSection(props: MenuSectionProps) {
  const { sections, spacing = "wide", divider = false } = props;

  return (
    <>
      {sections.map((section, index) => (
        <Stack key={index} width="312px" direction="column">
          {divider && (
            <Stack
              key={index}
              width="280px"
              margin="0px 0px 0px 20px"
              direction="column"
            >
              <Divider/>
            </Stack>
          )}

          {section.title && <MenuHeading title={section.title} />}
          <Stack
            direction="column"
            gap="20px"
          >
            {section.links.map((link, linkIndex) => (
              <MenuItem
                key={linkIndex}
                title={link.title}
                description={link.description}
                iconBefore={link.iconBefore}
                iconAfter={link.iconAfter}
                isDisabled={link.isDisabled}
                path={link.path}
                onClick={link.onClick}
                spacing={spacing}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </>
  );
}

export type { MenuSectionProps };
export { MenuSection };
