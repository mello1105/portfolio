import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "8mb6d99a",
  dataset: "production",
  useCdn: false, // Set to false to bypass cache and see updates instantly
  apiVersion: "2024-03-20",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
