import React, { Component } from 'react';

class EventBind extends Component {
   
    constructor(props) {
    super(props)

    this.state = {
         username : '',
         comment : ''
    }
}

handleUsernameChange = (event) => {
    this.setState({
        username : event.target.value
    })
}
handleCommentsChange = (event) => {
    this.setState({
        comment : event.target.value
    })
}
handleTopicChange = (event) => {
    this.setState({
        topic : event.target.value
    })
}
    render() {
        return (
            <form>
                <div>
                    <label>User name</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default EventBind
