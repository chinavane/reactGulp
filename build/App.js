var React = require('react');
var ReactDOM = require('react-dom');
var HeaderComponent = require('./HeaderComponent.js');
var ListComponent = require('./ListComponent.js');
var FooterComponent = require('./FooterComponent.js');

var LayoutComponent = React.createClass({
	render:function(){
		return (
			<div>
				<header>
					<HeaderComponent/>
				</header>

				<section>
					<ListComponent/>
				</section>

				<footer>
					<FooterComponent/>
				</footer>

			</div>
		)
	}
})

ReactDOM.render(<LayoutComponent/>,document.getElementById('app'));