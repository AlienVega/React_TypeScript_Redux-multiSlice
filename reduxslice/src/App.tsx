import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseSearch from "./components/CourseSearch";
import CourseValue from "./components/CourseValue";

function App() {
  return (
    <div className="container is-fuild">
      <CourseForm />
      <CourseSearch />
      <CourseList />
      <CourseValue />
    </div>
  );
}

export default App;
