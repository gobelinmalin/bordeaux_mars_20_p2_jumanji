import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    
    render(){
        return(
        <button onClick={this.handle}> {this.state.color}</button>
        )
    }
}