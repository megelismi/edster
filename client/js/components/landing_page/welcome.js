import React from 'react';

class Welcome extends React.Component {

	componentWillMount() {
		document.body.style.backgroundImage = "url(assets/travel.jpg) no-repeat right top";

	}

// background:
// 	linear-gradient(
//       rgba(0, 0, 0, 0.5),
//       rgba(0, 0, 0, 0.5)
//     ),
// 	url(mountains.jpg)
// 	no-repeat center center fixed;
// background-size: cover;


	componentWillUnmount () {
		document.body.style.backgroundImage = null;
	}

	render () {
		return (
			<div id="homepage">Welcome!</div>
		)
	}
}

export default Welcome;


// getInitialState: function () {
//   return { color: "white" };
// },

// changeColor: function () {
//   this.setState({ color: "black" });
// },

// render: function () {
//   var style = { backgroundColor: this.state.color };

//   return (
//     <div id="fullscreen" style={style}>
//        <a onClick={this.changeColor}>change</a>
//     </div>
//   );
// }