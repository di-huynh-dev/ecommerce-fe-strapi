import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hybrbase Ecommerce",
    short_name: "Hybrbase Shop",
    description:
      "Hybrbase Ecommerce is an online shopping platform for men, women, and kids. We offer a wide range of products at competitive prices. Browse our collection and discover the perfect pair for you.",
    icons: [
      {
        src: "https://salt.tikicdn.com/ts/upload/2f/51/80/5643672027a54bfa593300f53c91c12a.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    theme_color: "#1A94FF",
    background_color: "#1A94FF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "webapp",
        url: "https://hybrbase.com/",
      },
    ],
    scope: "/",
  };
}
