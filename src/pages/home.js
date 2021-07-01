import '../Home.css';
import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class Home extends Component {
    constructor(){
        super();
        this.state={
            search:null,
            data: [],
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost/phpmyadmin/sql.php?server=1&db=internship&table=users")
        .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    search(){
        fetch('http://localhost/japan-internship-crud/api/search.php', {
          method: "POST",
          body:JSON.stringify(this.state)
        }).then((response)=>{
          response.json().then((result)=>{
            console.warn("result", result);
            this.setState({
                data: result
              })
          })
        })
      }

    render(){
        console.log(this.state.items);
        return (
            <>
              <div>
                <input type="text" onChange={(event)=>{this.setState({search:event.target.value})}} />
                <button onClick={()=>{this.search()}}>Search</button>      
              </div>
              <div>
                <div className="container">
                  <div className="row ng-scope">
                    <div className="col-md-3 col-md-push-9">
                      <h4>Results <span className="fw-semi-bold">Filtering</span></h4>
                      <p className="text-muted fs-mini">Listed content is categorized by the following groups:</p>
                        <ul className="nav nav-pills nav-stacked search-result-categories mt">
                          <li><a href="#">Friends <span className="badge">34</span></a>
                          </li>
                          <li><a href="#">Pages <span className="badge">9</span></a>
                          </li>
                          <li><a href="#">Images</a>
                          </li>
                          <li><a href="#">Groups</a>
                          </li>
                          <li><a href="#">Globals <span className="badge">18</span></a>
                          </li>
                      </ul>
                    </div>
                    <div className="col-md-9 col-md-pull-3">
                      <p className="search-results-count">About 94 700 000 (0.39 sec.) results</p>
                      {/* {Home.search === true ?
                        <> */}
                          {this.state.data.map((object, index) => (
                            <section key={index} className="search-result-item">
                              <a className="image-link" href="#"><img className="image" src="/images/{object.profileimage}" />
                              </a>
                              <div className="search-result-item-body">
                                <div className="row">
                                  <div className="col-sm-9">
                                    <h4 className="search-result-item-heading"><a href="#">{object.firstname} {object.lastname}</a></h4>
                                    <p className="info">{object.address} {object.address_nr}, {object.place} - {object.country}</p>
                                    <p className="description">{object.profile_description}</p>
                                  </div>
                                  <div className="col-sm-3 text-align-center">
                                    <p className="value3 mt-sm">$2, 400</p>
                                    <p className="fs-mini text-muted">PER MONTH</p><a className="btn btn-info btn-sm" href="#">Learn More</a>
                                  </div>
                                </div>
                              </div>
                            </section>
                          ))}
                        {/* </>
                        : 
                          <> */}
                            {this.state.items.map((item) => (
                              <section key={item.id} className="intern-result-item">
                                <a className="image-link" href="#"><img className="image" src="/images/{object.profileimage}" />
                                </a>
                                <div className="intern-result-item-body">
                                  <div className="row">
                                    <div className="col-sm-9">
                                      <h4 className="intern-result-item-heading"><a href="#">{item.firstname} {item.lastname}</a></h4>
                                      <p className="info">{item.address} {item.address_nr}, {item.place} - {item.country}</p>
                                      <p className="description">{item.profile_description}</p>
                                    </div>
                                    <div className="col-sm-3 text-align-center">
                                      <p className="value3 mt-sm">$2, 400</p>
                                      <p className="fs-mini text-muted">PER MONTH</p><a className="btn btn-info btn-sm" href="#">Learn More</a>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            ))}
                          {/* </>
                        } */}
                      <div className="text-align-center">
                        <ul className="pagination pagination-sm">
                          <li className="disabled"><a href="#">Prev</a>
                          </li>
                          <li className="active"><a href="#">1</a>
                          </li>
                          <li><a href="#">2</a>
                          </li>
                          <li><a href="#">3</a>
                          </li>
                          <li><a href="#">4</a>
                          </li>
                          <li><a href="#">5</a>
                          </li>
                          <li><a href="#">Next</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </>
        )
    }



}

export default Home;