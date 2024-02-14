import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { removeCourse } from "../store/slices/courseSlice";
const CourseList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector(
    ({ form, courses: { data, searchTerm } }: RootState) => {
      const filteredCourses = data.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        courses: filteredCourses,
      };
      // return state.courses.data;
    }
  );

  const renderedCourses = courses.map((courses) => {
    return (
      <div key={courses.id} className="panel">
        <h1>{courses.name}</h1>
        <p>{courses.description}</p>
        <p>{courses.cost}</p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(courses.id));
          }}
        >
          Sil
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
