/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import {addPost, updatePostSuccess} from '../actions/post.action';
import {connect} from 'react-redux';

class AddPost extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            comment: ''
        }
    }

    componentWillReceiveProps(props){
        console.log('>>>>>>>>>>>>>>>>1234', props.post);
        if( props.post.updatedId != null) {
           this.setState({
               email: this.props.post.posts[props.post.updatedId].email,
               comment:  this.props.post.posts[props.post.updatedId].comment,
           });
        }

    }

    addNewPost = () => {
        if(this.state.email && this.state.comment) {
            if(this.state.email.indexOf('@') == -1 && this.state.email.indexOf('.') == -1 )
            {
                alert('Email should be valid');
                return;
            }
            if(this.props.post.updatedId != null){
                this.props.updatePostSuccess({email: this.state.email, comment: this.state.comment});
            }else{
                this.props.addPost({email: this.state.email, comment: this.state.comment, time: (new Date()).toString()});
            }
            this.setState({
                email: '',
                comment: ''
            });
        }else{
            alert('Must enter email id and comment');
        }
    };

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render(){
        return (<div>
            <div className="email-section">
                <label>Email</label>
                <input type="email" name="email"  value={this.state.email} onChange={this.changeHandler} className="input"/>
            </div>
            <div className="comment-section">
                <label>Comment</label>
                <input name="comment" value={this.state.comment} onChange={this.changeHandler} className="input"/>
            </div>
            <button onClick={this.addNewPost}>+ Add</button>
        </div>)
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    addPost: (user) => dispatch(addPost(user)),
    updatePostSuccess: (data) => dispatch(updatePostSuccess(data))
});

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);
export default AddPostContainer;