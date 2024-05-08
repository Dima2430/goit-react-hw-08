import { setFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.value);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;