/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {filterUser} from '../actions/post.action'
class UserList extends Component{
    userList = [];

    clickHandler = (event, email) => {
        this.props.filterUser(email);
    };

    componentWillReceiveProps(props){
        this.userList = [];
        if(props.post.posts) {

            props.post.posts.forEach((post) => {

                if(this.userList.indexOf(post.email) == -1){
                    this.userList.push(post.email);
                }
            })
        }

     }

    render(){
        return (<div className="user-list">
            <ul>
                {this.userList.map((email, index) =>  <li  onClick={(event) => this.clickHandler(event, email)} key={(+ new Date()) + index} className="user">{email}</li>)}

            </ul>
        </div>)
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    filterUser: (email) => dispatch(filterUser(email))
});

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListContainer;

