import React from 'react';

class Header extends React.Component{
	render(){
		return <h1 className="header">HEADER + {this.props.num}</h1>
	}
}
export default Header