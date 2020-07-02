import React, { Component } from 'react'
import "./App.css";
import axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            day: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/todo/api/v1.0/tasks', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {id, firstName, lastName, day} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder='ID' type="text" name="id"  value={id} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='First name' type="text" name="firstName" value={firstName} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='Last name' type="text" name="lastName" value={lastName} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder='Day' type="text" name="day" value={day} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
} 

export default PostForm