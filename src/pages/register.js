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
          firstname:null,
          lastname:null,
          role:null,
          address:null,
          addressnr:null,
          place:null,
          country:null,
          discription:null,
          pay:null,
          register:null,
          login:null
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

      registerInfo(){
        const url = ['http://localhost/japan-internship-crud/api/create_user.php', 'http://localhost/japan-internship-crud/api/create_user_info.php' ]
        fetch(url, {
          method: "POST",
          body:JSON.stringify(this.state)
        }).then((response)=>{
          response.json().then((result)=>{
              console.log(result);
              if(result.message == "User info was created."){
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
                        <input type="text" placeholder="Firstname" onChange={(event)=>{this.setState({firstname:event.target.value})}} /><label>----</label>
                        <input type="text" placeholder="Lastname" onChange={(event)=>{this.setState({lastname:event.target.value})}} />
                        <input type="text" placeholder="Email" onChange={(event)=>{this.setState({email:event.target.value})}} />
                        <input type="password" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                        <label >Company: 2 | Educator: 3 | Inter: 4</label>
                        <input type="number" placeholder="role" onChange={(event)=>{this.setState({role:event.target.value})}} />
                        <input type="text" placeholder="Address" onChange={(event)=>{this.setState({address:event.target.value})}} />
                        <input type="number" placeholder="Address Number" onChange={(event)=>{this.setState({addressnr:event.target.value})}} />
                        <input type="text" placeholder="City/Village" onChange={(event)=>{this.setState({place:event.target.value})}} />
                        <input type="text" placeholder="Country" onChange={(event)=>{this.setState({country:event.target.value})}} />
                        <input type="text" placeholder="About Me/Us" onChange={(event)=>{this.setState({discription:event.target.value})}} />
                        <label style={{color: "red"}}>Intern only</label>

                        <input type="text" placeholder="work salary per month" onChange={(event)=>{this.setState({pay:event.target.value})}} />
                        <button onClick={()=>{this.register()}, ()=>{this.registerInfo()}}>register</button>
                    </div>
                    :
                    <Redirect to="/login" />
                   
                    }
            </>
        )
    }


}

export default Register;