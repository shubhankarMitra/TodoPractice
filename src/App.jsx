import { useEffect } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";

const App = () => {
  useEffect(() => {
    document.title = "Todo";
  }, []);
  return (
    <div className="content">
      <TodoApp />
    </div>
  );
};

export default App;
