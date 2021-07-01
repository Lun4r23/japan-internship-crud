import './App.css';
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
import PrivateRoute from './auth/privateRoutes'
import About from './pages/about'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import Home from './pages/home'
import Header from './template/header'




class App extends Component {
  

  post(){
    console.log(this.state);
    //console.log(JSON.stringify(this.state));
    /*
    const formData = new FormData();
    //Add your input data
    formData.append('name', TextInputName);
    formData.append('email', TextInputEmail);
    formData.append('phone_number', TextInputPhoneNumber);

    //Add your photo
    //this, retrive the file extension of your photo
    const uriPart = iamgeSource.split('.');
    const fileExtension = uriPart[uriPart.length - 1];

    formData.append('photo', {
        uri: iamgeSource,
        name: `photo.${fileExtension}`,
        type: `image/${fileExtension}`
    });

*/
console.log(this.state.jwt);
const formData = new FormData();
formData.append('name', 'koi');
//formData.append('jwt', this.state.jwt)
//formData.append('email', this.state.email)
formData.append('file', this.state.file, this.state.file.name);
for (var pair of formData.entries()) {
  console.log(pair[0]+ ', ' + pair[1]); 
}
var headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*"
}

console.log(formData);

axios.post('http://localhost/internship/api/update_user.php', formData, headers)
.then(function (response) {
   //handle success
  console.log(response)
  console.log("success")
})
.catch(function (response) {
  //handle error
  console.log(response)
  console.log("sorry")
});
/*
    fetch('http://localhost/internship/api/update_user.php', {
      method: "POST",
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
        //"Content-Type": "image/jpg"
        //'Content-Type': 'application/json, image/jpg, image/jpeg',
        //"Access-Control-Allow-Origin": "*"
      },
      body:JSON.stringify(this.state)
    }).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
        if(result.message === 'Access denied.'){
          localStorage.removeItem('login');
        }
        console.warn("result", result);
        console.log(result.jwt);
        this.storeCollector()
      })
    })
    */
    
  }

  fileSelected = event => {
    console.log(event.target.files[0]);

    this.setState({
      file: event.target.files[0]
    })
  }



  render(){
    return (

      <>

      
      

<Router>
      <>
        <Header />
        <main role="main" className="container">

          <div className="starter-template">

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute path="/profile" component={Profile}>
            
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          </div>
      </main>
      </>
    </Router>
        
      </>
    );
  }
  
}

export default App;
