import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from "react-redux";

 class Home extends Component {
 
  render() {
    console.log(this.props);
    const {posts}=this.props;
     const postlink=posts.length ? (
       posts.map(post=>{
         return(
           <div className="post card" key={post.id}>
         
             <div className="card-content">
               <Link to={'/'+post.id}>
               <span className="card-title">{post.title}</span>
               </Link>
               <p>{post.body}</p>
             </div>
           </div>
         )
       })
     ) : (
       <div className="center">no poste yet</div>
     )
    return (
      <div className="container">
        <div className="center">
        {postlink}
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  console.log("Home"+state)
  return {
    posts:state.posts
  }
 
}
export default connect(mapStateToProps)(Home)