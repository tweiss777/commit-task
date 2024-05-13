import "./App.css";
import User from "./components/User";
import { store } from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
}

export default App;
