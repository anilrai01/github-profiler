import { BrowserRouter } from "react-router-dom";
import { UserDataContextProvider } from "./context/UserDataContext";
import MainRoute from "./routes/MainRoute";

export default function App() {
  return (
    <UserDataContextProvider>
      <BrowserRouter>
        <div className="App">
          <MainRoute />
        </div>
      </BrowserRouter>
    </UserDataContextProvider>
  );
}
