// /sanity/schemaTypes/transfer.ts

export default {
  name: "transfer",
  title: "Transfer Service",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },

    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
    },

    { name: "description", type: "text", title: "Description" },

    { name: "heroImage", type: "image", title: "Hero Image" },

    { name: "heroTitle1", type: "string", title: "Hero Title Line 1" },
    { name: "heroTitle2", type: "string", title: "Hero Title Line 2" },
    { name: "heroDesc", type: "text", title: "Hero Description" },

    { name: "introText", type: "text", title: "Intro Paragraph" },

    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "desc", type: "text" },
          ],
        },
      ],
    },

    {
      name: "services",
      type: "array",
      title: "Services (cards)",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "desc", type: "text" },
            { name: "image", type: "image" },
          ],
        },
      ],
    },

    { name: "ctaImage", type: "image", title: "CTA Background Image" },
    { name: "ctaTitle", type: "string" },

    { name: "order", title: "Order", type: "number" },
  ],


};