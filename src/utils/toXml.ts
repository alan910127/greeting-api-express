import { XMLBuilder } from "fast-xml-parser";

export const toXml = (jsObject: any) => {
  const builder = new XMLBuilder({});
  const xmlMessages = builder.build(jsObject);
  return xmlMessages;
};
