import React, {Component} from 'react';
import Input from '../components/input.jsx';
import Button from '../components/button.jsx';

class App extends Component {
constructor(props){
	super(props);
	this.handleEventChange = this.handleEventChange.bind(this);
	this.handleClickEvent= this.handleClickEvent.bind(this);
	this.state = {finalData: "Nothing is added", data: null};
}

handleClickEvent(){
	this.setState({finalData: this.state.data});
}

handleEventChange(event){
	this.setState({data: event.target.value})
}

render() {
    return (
    <div>
      <Input type={"text"} handleChange={this.handleEventChange}/>
      <Button label={"Add"} handleClick={this.handleClickEvent} />
      <div>{this.state.finalData}</div>
    </div>
    );
  }
}
export default App;