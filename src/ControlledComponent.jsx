import React, { Component } from 'react'

export default class ControlledComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: ' ',
            lastname: ' ',
            review: ' '
        }

    }
    

    changefirstname = (e) => {
        this.setState({ firstname: e.target.value })
    }

    changelastname = (e) => {
        this.setState({ lastname: e.target.value })
    }

    changereview = (e) => {
        this.setState({ review: e.target.value })
    }


    handleInputs = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit = (e) => {
        alert(`welcome: ${this.state.firstname} ${this.state.lastname} and ${this.state.review}`)
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    First Name:<input type="text" value={this.state.firstname} className='border-2 border-solid border-black' onChange={this.handleInputs} />
                    <br />
                    Last Name<input type="text" name="" id="" value={this.state.lastname} className='border-2 border-solid border-black' onChange={this.handleInputs} />
                    <br />
                    Write review: <textarea name="" id="" value={this.state.review} className='border-2 border-solid border-black' onChange={this.handleInputs}></textarea>
                    <br />
                    <select name="" id="">
                        
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
} 