import React, {Component} from "react";
import {connect} from "react-redux";
import {setAge, setName} from "../actions/userAction";

class Home extends Component{
    constructor(props){
        super();
        this.state = {
            initialCount:0
        }
    }

    componentWillMount(){
        console.log("We are in component will mount");
    }

    componentDidMount(){
        console.log("We are in component did mount");
    }

    componentWillReceiveProps(nextProps){        
        console.log("We are in componentWillReceiveProps");
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){        
        console.log("We are in shouldComponentUpdate");
        console.log(nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("We are in componentWillUpdate");
        console.log(nextProps, nextState)
    }    

    componentDidUpdate(prevProps, prevState){
        console.log("We are in componentDidUpdate");
        console.log(prevProps, prevState)
    }    


    componentDidCatch(){
        console.log("We are in componentDidCatch");
    }

    componentWillUnmount(){
        console.log("We are in componentWillUnmount");
    }

    increasemyage = (param) => (e) => { //ES Next Provides this
        //this.state.initialCount++;
        //alert("Wait We'll do");
        console.log(this.state.initialCount);
        this.setState({
            initialCount: this.state.initialCount + param            
        })
    }

    onHandleChange = (event) => {        
        console.log(event);
        console.log(event.target.value);
        this.setState({
            initialCount: event.target.value            
        })
        //event.target.value = event.target.value;
    }

    render(){
        console.log("we are rendering!")
        return(
            <div className="container">
                    <p>In a new Component {this.props.name}</p>
                    <p>Your Age is {this.state.initialCount} </p>                    
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>                                     
                    </div>   
                    <hr/>
                    {this.props.children}
                    <hr/>                    
                    <button className="btn btn-primary" onClick={() => this.props.greet("Ashish")}>Greet Me</button>

                    <hr/>
                    <button className="btn btn-primary" onClick={this.increasemyage(5)}>Make Me Older</button>

                    <hr/>
                    <input type="text" value={this.state.initialCount} onChange={this.onHandleChange}/>    

                    <hr/>
                    <p>This is Your Changed Age : {this.props.user.age} </p>  

                    <button className="btn btn-primary" onClick={() => this.props.setAge(25)}>ChangeUserAge</button> 

                    <hr/>
                    <p>This is Your Changed Age : {this.props.user.name} </p>  

                    <button className="btn btn-primary" onClick={() => this.props.setName("Test")}>ChangeUserName</button>               
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        user: state.user       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName : (name) =>{
            dispatch(setName(name))
        },
        setAge : (age) =>{
            dispatch(setAge(age))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
