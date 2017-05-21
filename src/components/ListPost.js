/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import Post from './Post';
import {connect} from 'react-redux';

class ListPost extends Component{

    constructor(){
        super();
        this.state = {
            filterPost : []
        };
    }

    componentWillReceiveProps(props){
        if( props.post.filterId != null) {
            this.state.filterPost = [];
            this.props.post.posts.forEach((post) => {
                if(post.email === props.post.filterId)
                    this.state.filterPost.push(post);
            });
        }else{

            this.state.filterPost = this.props.post.posts;

        }
        this.setState(this.state);
    }

    shouldComponentUpdate() {
        console.log('Parent---shouldcomponentupdate');
        return true;
    }

    render(){
        return (<div className="post-list">
            {this.state.filterPost.map( (post, index) => <Post key={(+ new Date()) + index}  index={index} post={post}/>)}
        </div>)
    }
}


const mapStateToProps = (state) => state;

const ListPostContainer = connect(mapStateToProps)(ListPost);
export default ListPostContainer;

