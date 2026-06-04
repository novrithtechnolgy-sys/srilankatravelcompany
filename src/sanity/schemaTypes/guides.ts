export default {
  name: "guide",
  title: "Guide",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Guide Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "name",
      title: "Guide Name",
      type: "string",
    },

    {
      name: "role",
      title: "Guide Role",
      type: "string",
    },

    {
      name: "bio",
      title: "Guide Bio",
      type: "text",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Control display order",
    }
  ],
};