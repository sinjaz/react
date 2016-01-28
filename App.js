import React from 'react';
import Header from './Header';

class App extends React.Component{
	constructor(){
		super();
		this.state = {txt: "", num: 5};

		store.subscribe(() => {
			var todos = store.getState().map(function(value, index){
				return <li key={index}>{value}</li>;
			});
			this.setState({todos: todos});
		})
	}
	update(e){
		this.setState({txt: e.target.value});
	}
	onClick(e){
		store.dispatch({ type: 'ADD', data: this.state.txt });
		this.setState({txt: ''});
	}
	render(){
		return (
			<div>
				<Header num={this.state.num}/>
				<div>
					<input type="text" onChange={this.update.bind(this)} value={this.state.txt}/>
					<button onClick={this.onClick.bind(this)}>Add</button>
				</div>
				<ul>STATE: {this.state.todos}</ul>
			</div>
		)
	}
}
export default App