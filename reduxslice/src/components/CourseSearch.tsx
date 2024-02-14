import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { changeSearch } from "../store/slices/courseSlice";
const CourseSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => {
    return state.courses.searchTerm;
  });

  return (
    <div className="listHeader">
      <h3 className="title is-3">Kurslar</h3>
      <div className="search field is-horizontal">
        <label className="labe">Ara</label>
        <input
          value={searchTerm}
          className="input"
          onChange={(e) => {
            dispatch(changeSearch(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default CourseSearch;
