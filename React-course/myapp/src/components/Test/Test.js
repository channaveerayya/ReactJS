import React, { Component } from 'react'

export default class Test extends Component {
    componentDidMount()
    {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => 
                    this.setState({
                        title:data.title,
                        body:data.body
                        })
                    );
    }
    render() {
        const {title,body}=this.state;
        return (
            <div>
                 {title}
                 {body}
            </div>
        )
    }
}
