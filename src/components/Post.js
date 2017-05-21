/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deletePost, updatePost} from '../actions/post.action';

class Post extends Component{
    componentWillReceiveProps(props) {
    }

        deleteHandler = () => {
        this.props.dispatch(deletePost(this.props.index));
        };

    updateHandler = () => {
        this.props.dispatch(updatePost(this.props.index));
    };


    render(){
        return (<div className="post">
            <div>
                <span>{this.props.post.email}  at  {this.props.post.time}</span>
                <p>{this.props.post.comment}</p>
            </div>
            <div>
                <button onClick={this.updateHandler}>Edit</button>
                <button onClick={this.deleteHandler}>Delete</button>
            </div>

        </div>)
    }
}



const PostContainer = connect()(Post);
export default PostContainer;