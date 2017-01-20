import React from 'react';
import { connect } from 'react-redux';

class ProgressContainer extends React.Component {
	constructor (props) {
		super(props); 
	}

	render () {
		var userProgressArray =  [
            {
                "french": "le pain",
                "english": "bread",
                "id": 1, 
                "successes": 5, 
                "failures": 0
            },
            {
                "french": "le poisson",
                "english": "fish",
                "id": 2,
                "successes": 6, 
                "failures": 0
            },
            {
                "french": "le pamplemousse",
                "english": "grapefruit",
                "id": 3,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "le velo",
                "english": "bicycle",
                "id": 4,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "l'immeuble",
                "english": "building",
                "id": 5,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "la femme",
                "english": "woman",
                "id": 6,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "l'homme",
                "english": "man",
                "id": 7,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "la famille",
                "english": "family",
                "id": 8,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "les devoirs",
                "english": "homework",
                "id": 9,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "le chien",
                "english": "dog",
                "id": 10,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "le chat",
                "english": "cat",
                "id": 11,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "la rue",
                "english": "street",
                "id": 12,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "les mains",
                "english": "hands",
                "id": 13,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "les yeux",
                "english": "eyes",
                "id": 14,
                "successes": 0, 
                "failures": 0
            },
            {
                "french": "la faim",
                "english": "hunger",
                "id": 15,
                "successes": 8, 
                "failures": 0
            }
        ]

     var masteryData = userProgressArray.map(function(wordObj) {
	     if (wordObj.successes >= 5) {
	     		return (
	     			<tr key={wordObj.id}> 
	     				<td>{wordObj.french}</td>
	     				<td><i className="fa fa-check" aria-hidden="true"></i></td>
	     			</tr>
	     		)
	     	}
	     else {
	     		return (
	     			<tr key={wordObj.id}>
	     				<td>{wordObj.french}</td>
	     				<td><i className="fa fa-times" aria-hidden="true"></i></td>
	     			</tr>
	     		)
	     }
     })

		return (
		<div className="progress-container">
			<h1>{this.props.user}'s Progress Report</h1>
			<p>Words are considered mastered when you've answered them correctly 5 or more times.</p>
			<table className="progress-table">
				<thead>
					<tr>
						<th>Word</th>
						<th>Mastery</th>
					</tr>
				</thead>
				<tbody>
					{masteryData}
				</tbody>
			</table>	
		</div>
		)
	}
}


const mapStateToProps = (state) => ({
	user: state.userInfo.user,
});

const mapDispatchToProps = (dispatch) => {
	return {
		getQuestionsArray: () => { dispatch(actions.getQuestionsArray()) }
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer);
 
