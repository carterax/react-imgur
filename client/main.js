// Any Js in Here is automatically ran by meteor


// First we import react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// second we create a component
class App extends Component {
	constructor(props) {
		super(props);
		
		//state init
		this.state = { images: [] };
	}
	componentWillMount() {
		 axios.get("https://api.imgur.com/3/gallery/hot/viral/0")
  		  .then(response => this.setState({ images: response.data.data })); // setState and trigger re render
	}
	render() {
		return (
			<div>
			  <ImageList images={this.state.images} />
			</div>
	    );
	}
};

// Then We render the component to the screen
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.querySelector('.container'));
});
