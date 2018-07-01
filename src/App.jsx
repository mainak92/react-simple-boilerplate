import React, {Component} from 'react';
import Input from '../components/input.jsx';
import Output from '../components/output.jsx';

class App extends Component {
constructor(props){
	super(props);
	this.myFunction = this.myFunction.bind(this);
	this.state = {check: "true"};
}

componentWillMount(){
	console.log("1");
	this.setState({uncheck: "password"});
}

myFunction(a,b){
	return(console.log(a+b));
}

componentDidMount(){
	console.log("3");
	this.myFunction(1,4);
}

render() {
	console.dir(this.state);
    return (
    <div>
      <Input prop1={"text"} prop2={this.state.check} someData={"login"}/>
      {this.state.check}
    </div>
    );
  }
}
export default App;