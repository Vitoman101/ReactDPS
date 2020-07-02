import React from 'react';
import "./UserApi.css";

export default class UserApi extends React.Component {

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: false});
        console.log(data.results[0]);
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
                <div>
                <img alt='' src={this.state.person.picture.large}/>
                    <div>
                        <h2>{this.state.person.name.title}. {this.state.person.name.first} {this.state.person.name.last}</h2>
                    </div>
                </div>
                
                <div className='description'> 
                    <p>City: {this.state.person.location.city}</p>
                    <p>Country: {this.state.person.location.country}</p>
                    <p>Email: {this.state.person.email}</p>
                    <hr />
                </div>
                <button className="mbtn">Call now!</button>
            </div>)}


        </div> 
        )
    }
}