export default {
  name: "vehicle",
  title: "Vehicle",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Vehicle Name",
      type: "string",
    },

    {
      name: "tag",
      title: "Top Tag",
      type: "string",
    },

    {
      name: "passengers",
      title: "Passenger Info",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "image",
      title: "Vehicle Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};