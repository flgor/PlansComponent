'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('axios');

class PlanComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {plans: []};
    }

    componentDidMount() {
        client.get('/plan')
            .then(function (response) {
                console.log("response: ", response);
                console.log("data: ", response.data);
                this.setState({plans: response.data})
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (<table className="table">
            <thead>
            <tr>
                <th>Plan</th>
                <th>BillingCycle</th>
                <th>Price</th>
                <th>Enabled</th>
                <th>Action</th>
            </tr>
            </thead>
            <PlanRowsComponent plans={this.state.plans}/>
        </table>)
    }
}

class PlanRowsComponent extends React.Component {
    render() {
        console.log("PlanRowsComponent:", this.props.plans);
        var planRowComponents = this.props.plans.map(
            plan => <PlanRowComponent key={plan.name} plan={plan}/>
        );
        return (<tbody>{planRowComponents}</tbody>);
    }
}

class PlanRowComponent extends React.Component {
    render() {
        return <tr>
            <td>{this.props.plan.name}</td>
            <td>{this.props.plan.billingCycle}</td>
            <td>{this.props.plan.price}</td>
            <td>{this.props.plan.enabled}</td>
            <td>Restrictions/Validate with BT</td>
        </tr>
    }
}

ReactDOM.render(
    <PlanComponent />,
    document.getElementById('planComponent')
)