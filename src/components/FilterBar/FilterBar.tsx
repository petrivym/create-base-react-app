import { FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { FilterValue, filterOptions } from "../../constants/filterConsts";
import { Form, useSubmit } from "react-router-dom";

type Props = {
  filterValue: FilterValue;
  setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>;
};

const FilterBar = ({ filterValue, setFilterValue }: Props) => {
  const submit = useSubmit();

  // filter?key=hair.color&value=Brown
  return (
    <Paper sx={{ minHeight: "300px", p: "1rem" }}>
      <Form method="get" action="filter?key=" id="search-form" role="search">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="gender"
            value={filterValue}
            label="Gender"
            name="gender"
            onChange={(e) => console.log(e)}
          >
            {filterOptions.map((_) => (
              <MenuItem value={_.value}>{_.label}</MenuItem>
              ))}
              </Select>
              </FormControl>
            </Form>
    </Paper>
  );
};

export default FilterBar;
