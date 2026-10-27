import { Business, PageComponent } from "@/schema";
import { ButtonBlock, DividerBlock, HeaderBlock, ImageBlock, TextBlock } from "./Blocks";

const SECTION_MAP: Partial<
  Record<PageComponent["type"], React.ComponentType<any>>
> = {
  button: ButtonBlock,
  divider: DividerBlock,
  header: HeaderBlock,
  image: ImageBlock,
  text: TextBlock,
};

export function ComponentRenderer({
  business,
  layout,
}: {
  business: Business;
  layout: PageComponent[];
}) {
  return (
    <>
      {layout.map((component) => {
        const Section = SECTION_MAP[component.type];
        if (!Section) return null;
        return (
          <Section
            key={component.id}
            props={component.props}
            business={business}
            theme={business.theme}
          />
        );
      })}
    </>
  );
}
