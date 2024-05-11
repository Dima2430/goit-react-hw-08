import { selectFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
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
