import React from 'react';
import {Link, IndexLink} from 'react-router';

/*
var Nav = React.createClass({
	render: function(){
		return(
			<div>
			<h1>navbar</h1>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
		);
	}
})

*/                                                                                                                                    
var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		var query = this.refs.query.value;
		var encoded_location = encodeURIComponent(query);
		console.log(query);

		if (query.length > 0){
			this.refs.query.value = "";
			window.location.hash = `#/?location=${encoded_location}`;
		}
	},

	render: function(){
		return(
		<div className = "top-bar">
				<div className = "top-bar-left">
					<ul className = "dropdown menu" data-dropdown-menu>
					<li className = "menu-text">React Weather App</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
				</div>
				<div className = "top-bar-right">
					<form onSubmit = {this.onSearch}>
					<ul className = "menu">
      					<li><input type="search" placeholder="Search weather" ref = "query"/></li>
      					<li><input type="submit" className="button" value = "Get Weather"/></li>
      				</ul>
      				</form>
				</div>
		</div>
	);
	}
	
})

module.exports = Nav;

