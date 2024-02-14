import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  chanceName,
  chanceCost,
  chanceDescription,
} from "../store/slices/formSlice";
import { addCourse } from "../store/slices/courseSlice";
import { nanoid } from "nanoid";

const CourseForm = () => {
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state: RootState) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      const id = nanoid();
      dispatch(addCourse({ name, description, cost, id }));
    } else {
      alert("Tüm alanları doldurunuz!");
    }
  };

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">İsim</label>
            <input
              value={name}
              className="input is-expanded"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(chanceName(e.target.value));
              }}
            />
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea
              value={description}
              className="input is-expanded"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                dispatch(chanceDescription(e.target.value));
              }}
            />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input
              value={cost}
              className="input is-expanded"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(chanceCost(parseInt(e.target.value)));
              }}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-primary"> Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
