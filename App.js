import React from 'react';
import Header from './Header';

class App extends React.Component{
	constructor(){
		super();
		this.state = {txt: "<default_message>", num: 5};
	}
	update(e){
		this.setState({txt: e.target.value});
	}
	render(){
		return (
			<div>
				<Header num={this.state.num}/>
				<div>
					<input type="text" onChange={this.update.bind(this)}/>
					<div>Message: {this.state.txt}</div>
				</div>
			</div>
		)
	}
}
export default App