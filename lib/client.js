import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "6molf6b8",
  dataset: "production",
  apiVersion: "2023-10-19",
  useCdn: true,
  token:
    "skCCRIMMhSEtay8Ra9gLYSCx4H2xkI4AUMXz4UoSxkbmQXlmqxLfgivezU04i6GGgpdrQHqliuG69EqtXlV1XYMPrn6OF2mZOo9qCi8IJXAVDtOjzXO9ZyDALOkCsw2Kg1AXCrswvrkmTbt2D06m8ombTBheKGybXWmyVWpC7B9bUS1vW59f",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
