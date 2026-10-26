import { Business, PageComponent } from "@/schema";
import { DividerBlock, HeaderBlock, ImageBlock, TextBlock } from "./Blocks";

const SECTION_MAP: Partial<
  Record<PageComponent["type"], React.ComponentType<any>>
> = {
  divider: DividerBlock,
  header: HeaderBlock,
  image: ImageBlock,
  text: TextBlock,
};

export function ComponentRenderer({
  layout,
  business,
}: {
  layout: PageComponent[];
  business: Business;
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
          />
        );
      })}
    </>
  );
}
