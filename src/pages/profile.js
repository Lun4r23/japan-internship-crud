import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class Profile extends Component {
    constructor(){
        super();
        this.state={
            selectedFile: null,
            selectedFileToShow: null,
            email:null,
            password:null,  
            login: true,
            jwt:null
        }
    }

    fileSelectedHandler = (event) => {
        //console.log(event.target.files[0]);
        console.log(URL.createObjectURL(event.target.files[0]))
        this.setState({
            selectedFileToShow: URL.createObjectURL(event.target.files[0])
        })
        //console.log(e.target);
        //console.log(e.target[0]);
        //this.setState({
        //    selectedFile: e.target.files[0]
        //})
    }

    fileUploadHAndler = () => {
        const fd = new FormData();
        /*fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost/internship/api/upload_profile_image.php', fd).then(
            res => {
                console.log(res);
            }
        );*/
    }
    // componentDidMount(){
    //     this.storeCollector()
    //   }

    //   storeCollector(){
    //     let store = JSON.parse(localStorage.getItem('login'))
    //     if(store && store.login){
    //       this.setState({
    //         login:true,
    //         jwt:store.jwt
    //       })
    //     }
    //   }

    storeCollector(){
        let store = JSON.parse(localStorage.getItem('login'))
        if(store && store.login){
          this.setState({
            login:false,
            jwt:store.jwt
          })
        }
      }

    logout(){
        fetch('http://localhost/japan-internship-crud/api/login.php', {
          method: "POST",
          body:JSON.stringify(this.state.login && this.state.jwt)
        }).then((response)=>{
          response.json().then((result)=>{
            console.warn("result", result);
            console.log(result.jwt);
            localStorage.setItem('login', JSON.stringify({
              login:false,
              jwt:result.jwt
            }))
            this.storeCollector()
          })
        })
    }

    render(){
        return (
            <>
            {this.state.selectedFileToShow ? (
        <img src={this.state.selectedFileToShow} />
      ) : (
        <p>select file</p>
      )}

                Protected Profile!
                <div>
                    <h1>logged in</h1>
                    <input name="selectedFile" type="file" onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHAndler}>Upload</button>
                    <button onClick={this.logout() }>logout</button>
                    {this.state.login === false ? <Redirect to="/home" />
                    : null}      
                </div>
            </>
        )
    }

}

export default Profile;