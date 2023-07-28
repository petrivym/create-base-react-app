interface FilterOption {
  label: "All" | "Male" | "Female";
  value: "all" | "male" | "female";
}

export type FilterValue = "all" | "male" | "female";

export const filterOptions: FilterOption[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];
