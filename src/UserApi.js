import React from 'react';
import "./UserApi.css";

export default class UserApi extends React.Component {

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount() {
        var test = Math.floor(Math.random() *4);
        const url = "http://localhost:5000/getuser";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.persons[test], loading: false});
        console.log(data.persons[test]);
    }

    render() {
        return (
        <div>
            {this.state.loading || !this.state.person ?  
            
            
            (<div>Loading...</div>) 
            : 
            (
            <div className='parent'> 
            <h2>YOU MACHED:</h2>
            <img alt='' src={this.state.person.photo} />
            <p>{this.state.person.first}</p>
            </div>)}


        </div> 
        )
    }
}