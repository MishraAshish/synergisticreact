import React, {Component} from "react";
import {render} from "react-dom";
import {Header, Footer} from "./components/Header";
import Home from "./components/Home";
import {Provider} from "react-redux";
import store from "./store";

class App extends Component{
    
    constructor(props){
        super();
        this.state = {
            firstLink: "Simon",
            secondLink: "Namrata",
            user:{
                name:"Namrata and Simon",
                hobbies: [
                    "Playing", "Singing", "Dancing"
                ]
            }
        }
    }
    componentWillReceiveProps(nextProps){        
        console.log("We are in componentWillReceiveProps index");
        console.log(nextProps);
    }

    changeProp = (param) => (e) => { //ES Next Provides this        
        this.setState({
            user:{
                name: param,
                hobbies: [
                    "Playing", "Singing", "Dancing"
                ]
            }            
        })
    }

    shouldComponentUpdate(nextProps, nextState){        
        console.log("We are in shouldComponentUpdate");
        console.log(nextProps, nextState);
        return true;
    }

    greetMe(param){
        alert("Good Morning "+param);
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header link1={this.state.firstLink} link2={this.state.secondLink}/>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={this.state.user.name} hobbies={this.state.user.hobbies} greet={this.greetMe}>
                            <p>Child One</p>
                            <p>Child Two</p>
                        </Home>                     
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Footer/>
                    </div>                    
                </div>
                <hr/>
                <button className="btn btn-primary" onClick={this.changeProp("Neetha")}>Change Props</button>
            </div>
        )
    }
}

render(<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("app"));