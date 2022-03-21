import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <h1>localStorage with React hooks</h1>
      <Form1 />
      <Form2 />
    </div>
  );
};
export default App;
