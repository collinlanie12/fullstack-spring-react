import  {Button} from "antd";

import API from "./lib/API";
import './App.css';

const App = () => {

    API.Students.getAll()
        .then(response => response.data)
        .then(console.log)
        .catch(err => console.log(err.message));

    return (
      <div className="App">
        <Button type="primary">Hello</Button>
      </div>
    );
}

export default App;
