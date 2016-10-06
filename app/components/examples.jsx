import React from 'react';
import {Link} from 'react-router';

/*
var Examples = React.createClass({
	render: function(){
		return(
			<div>
			<h3>Examples</h3>
		
			</div>
		);
	}
})
*/
var Examples = (props)=>{
	return(
			<div>
			<h1 className = "text-center page-title">Examples</h1>
			<p>Example locations to try out</p>
			<ol>
				<li>
					<Link to = "/?location=Seattle">Seattle, WA</Link>
				</li>
				<li>
					<Link to = "/?location=Dallas">Dallas, TX</Link>
				</li>
			</ol>
			</div>
		);
}

module.exports = Examples;