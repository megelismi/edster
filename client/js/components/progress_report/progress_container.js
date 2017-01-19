import React from 'react';

// function ProgressContainer () {
// 	return (
// 		<div>Hay gurl haaaaay</div>
// 	)
// }

// export default ProgressContainer;


var LineChart = require("react-chartjs").Line;


class ProgressContainer extends React.Component {
	constructor (props) {
		super(props); 
	}

	render () {
		let data = {
    		labels: ["January", "February", "March", "April", "May", "June", "July"],
    		datasets: [
		        {
		            label: "My First dataset",
		            fill: false,
		            lineTension: 0.1,
		            // backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [1, 5, 6, 8, 12, 16, 14],
		            spanGaps: false,
		        }
    		]
		};

		let chartOptions = {
        	scales: {
            xAxes: [{
                display: false
            }]
        	}
    	}

		return (
			<LineChart data={data} options={chartOptions} width="600" height="250"/>
		)
	}
}

export default ProgressContainer; 
