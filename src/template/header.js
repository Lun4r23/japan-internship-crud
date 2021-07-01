import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class Header extends Component {
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
    

    render(){
        return (
            <>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">Japan Internship</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/">Home </Link>
                    <Link className="p-2 text-dark" to="/about">About </Link>
                </nav>

                {
                    !this.state.login?
                    <>
                        <Link className="p-2 text-dark" to="/login">Login </Link>   
                        <Link className="btn btn-outline-primary" to="/Register">Register </Link>    
                    </>
                    
                    :
                    
                    <>
                    <Link className="p-2 text-dark" to="/profile">Profile </Link>     
                </>
                    }
            </div>


    



                
            </>
        )
    }



}

export default Header;