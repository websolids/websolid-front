import { Accordion } from "@heroui/react";

interface AccordionItemProps {
  title: string;
  content: string;
}

export const AccordionItem = ({ title, content }: AccordionItemProps) => {
  return (
    <Accordion.Item className="text-accent rounded-2xl hover:bg-accent hover:text-white group transition-colors">
      <Accordion.Heading>
        <Accordion.Trigger className="text-xl font-bold hover:bg-none">
          {title}
          <Accordion.Indicator className="text-accent h-6 w-6 group-hover:text-white" />
        </Accordion.Trigger>
      </Accordion.Heading>
      <Accordion.Panel>
        <Accordion.Body className="text-black text-lg group-hover:text-white">
          {content}
        </Accordion.Body>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
