'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('axios');

class PlanComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        client.get('/plan')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({plans: []});
    }

    render() {
        if (this.state.plans === null) {
            return <div>Loading...</div>
        } else {
            return <div> React Plans</div>
        }
    }
}

ReactDOM.render(
    <PlanComponent />,
    document.getElementById('planComponent')
)