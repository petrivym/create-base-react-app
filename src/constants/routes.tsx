export const ROUTES = Object.freeze({
  base: "/",
  users: "users",
  user: (id?: string | null) => (id ? `users/${id}` : "/users/:id"),
  all: "*",
});
