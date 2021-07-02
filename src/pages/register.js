import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";


class Register extends Component {
    constructor(){
        super();
        this.state={
          email:null,
          password:null,
          register:null,
          login:null,
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

      register(){
        fetch('http://localhost/japan-internship-crud/api/create_user.php', {
          method: "POST",
          body:JSON.stringify(this.state)
        }).then((response)=>{
          response.json().then((result)=>{
              console.log(result);
              if(result.message == "User was created."){
                this.setState({'register': true});
              }
          })
        })
      }

    render(){
        
        return (
            <>
                <h1>Register</h1>
                {

                    !this.state.register && !this.state.login?
                    <div>
                        <input type="text" onChange={(event)=>{this.setState({email:event.target.value})}} />
                        <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                        <button onClick={()=>{this.register()}}>register</button>
                    </div>
                    :
                    <Redirect to="/login" />
                   
                    }
            </>
        )
    }


}

export default Register;