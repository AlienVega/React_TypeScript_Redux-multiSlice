import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bulma/css/bulma.css";
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
