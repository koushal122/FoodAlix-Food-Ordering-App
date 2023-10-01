import React from 'react';
import UserContext from './Utils/Contexts';


class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        //here we create state
        this.state = {
            count: 0,
            count2: 0,
        }
    }
    componentDidMount() {
        //here this is best place for API calls
        //because in this life cycle step was
        //constructor -> render -> componentDidMount
    }



    //render method is very important here it only renders
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {(
                        (value) => {
                           console.log(value);
                        }
                    )
                    }
                </UserContext.Consumer>
                <h1>This is class based component</h1>
                <p>Here we access like {this.props.name} </p>
                <p>count: {this.state.count}</p>
                {/* here we change state variable like below */}
                <button onClick={() => {
                    this.setState({
                        count: 1,
                        count2: 2
                    });
                }}>Increase Count</button>
            </div>
        )
    }
}
export default ProfileClass;