/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import ListPost from './ListPost';
import UserList from './UserList'
class Timeline extends Component{

    render(){
        return (<div>Time line
        <UserList/>
        <ListPost/>
        </div>)
    }
}

export default Timeline;