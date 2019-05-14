import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
class AddContact extends Component {


    state={
        name:'',
        email:'',
        phone:''
    }
    onSubmit=(dispatch,e)=>{
        e.preventDefault(); 
        const {name,email,phone}=this.state;
        const newContact={
            id:uuid(),
            name,
            email,
            phone
        };
        dispatch({type:'ADD_CONTACT',payload:newContact});
    };
    onAction=e=>this.setState(
        {[e.target.name]:e.target.value}
        )
  render() {

    const {name,email,phone}=this.state;

    return(
        <Consumer>
{value=>{
    const{dispatch}=value;
    return (
      <div className="card mb-3">
      <div className="card-header">
          AddContact
      </div>
      <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this,dispatch)}>
              
            <TextInputGroup
            label="Name"
            name="name"
            placeholder="enter name"
            value={name}
            onChange={this.onAction}

            />
             <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={this.onAction}

            />   
             <TextInputGroup
            label="phone"
            name="phone"
            type="phone"
            placeholder="enter Phone"
            value={phone}
            onChange={this.onAction}

            />
              <input type="submit" value="Add Contact"
              className="btn btn-block btn-light"/>
          </form>
      </div>
        
      </div>)
}}

        </Consumer>
    )
    
  }
}
export default AddContact;