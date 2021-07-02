import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class Login extends Component {
    constructor(){
        super();
        this.state={
          email:null,
          password:null,
          login:null,
          jwt:null
        }
      }
    
      componentDidMount(){
        this.storeCollector()
      }

      storeCollector(){
        let store = JSON.parse(localStorage.getItem('login'))
        if(store && store.login){
          this.setState({
            login:true,
            jwt:store.jwt
          })
        }
      }
    
      login(){
        fetch('http://localhost/japan-internship-crud/api/login.php', {
          method: "POST",
          body:JSON.stringify(this.state)
        }).then((response)=>{
          response.json().then((result)=>{
            console.warn("result", result);
            console.log(result.jwt);
            localStorage.setItem('login', JSON.stringify({
              login:true,
              jwt:result.jwt
            }))
            this.storeCollector()
          })
        })
      }

    render(){
        return (
            <>
                <h1>Login</h1>
                {
                    !this.state.login?
                    <div>
                        <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} />
                        <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                        <button onClick={()=>{this.login()}}>Login</button>      
                    </div>
                    :
                    <Redirect to="/profile" />
                   
                    }
            </>
        )
    }



}

export default Login;