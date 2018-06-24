import React, {Component} from 'react';
import Input from '../components/input.jsx';

class App extends Component {
constructor(props){
	super(props);
}

render() {
    return (
    <div>
      <Input prop1={"text"} prop2={"password"}/>
    </div>
    );
  }
}
export default App;