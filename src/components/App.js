/**
 * Created by intelligrape on 17/5/17.
 */
import React,{Component} from 'react';
import Header from './Header';
import Container from './Container';
import '../../assets/style.css'
class App extends Component{
    render(){
        return (<div className="container">
            <Header/>
            <Container/>
        </div>)
    }
}

export default App;