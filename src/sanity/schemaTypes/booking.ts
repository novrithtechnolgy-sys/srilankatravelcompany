// /sanity/schemaTypes/booking.ts
export default {
  name: "booking",
  title: "Booking",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Full Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "date", type: "date", title: "Travel Date" },
    { name: "travelers", type: "number", title: "Travelers" },
    { name: "pickup", type: "string", title: "Pickup Location" },
    { name: "message", type: "text", title: "Special Requests" },
    { name: "experienceSlug", type: "string", title: "Experience Slug" },
    { name: "createdAt", type: "datetime", title: "Created At" },
  ],
};