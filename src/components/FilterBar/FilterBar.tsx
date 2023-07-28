import { FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import { FilterValue, filterOptions } from "../../constants/filterConsts";
import { Genders } from "../../constants";

type Props = {
  filterValue: FilterValue;
  setFilterValue: React.Dispatch<React.SetStateAction<FilterValue>>;
};

const FilterBar = ({ filterValue, setFilterValue }: Props) => {
  return (
    <Paper sx={{ minHeight: "300px", p: "1rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="dem o-simple-select"
          value={filterValue}
          label="Gender"
          onChange={(e) => setFilterValue(e.target.value as FilterValue)}
        >
          {filterOptions.map((_) => (
            <MenuItem value={_.value}>{_.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
};

export default FilterBar;
