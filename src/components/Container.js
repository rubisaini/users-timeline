/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import AddPost from './AddPost';
import Timeline from './Timeline';

class Container extends Component{

    render(){
        return (<div className="inner-container">
            <AddPost/>
            <Timeline/>
        </div>)
    }
}

export default Container;