var React = require('react');
var ReactDOM = require('react-dom');
var deepstreamClient = require( 'deepstream.io-client-js' );
var DeepstreamMixin = require( 'deepstream.io-tools-react' );

var SyncedInput = React.createClass({
	mixins: [ DeepstreamMixin ],
	setValue: function( e ) {
		this.setState({ value: e.target.value });
	},
	render: function() {
		return (
			<input value={this.state.value} onChange={this.setValue} />
		)
	}
});

ds = deepstreamClient( 'localhost:6020' ).login({}, function(){
	ReactDOM.render(
		<SyncedInput dsRecord="test/some-input" />,
		document.getElementById( 'example' )
	);
});

DeepstreamMixin.setDeepstreamClient( ds );