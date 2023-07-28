export const ROUTES = Object.freeze({
  base: "/",
  users: "users",
  user: (id?: string | null) => (id ? `users/${id}` : "/users/:id"),
  filerByParam: (param: string, value: string) => `users/filter?key=${param}&value=${value}`,
  all: "*",
});
