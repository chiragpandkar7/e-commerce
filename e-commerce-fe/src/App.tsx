import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
