import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import './App.css';



class App extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:''
        }
    }
    onsearchchange=(event)=>{
        this.setState({searchfield: event.target.value})       
    }

    render(){
        const filterrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return(
        <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <Searchbox searchange={this.onsearchchange}/>
        <Cardlist robots={filterrobots}/>
        </div>
    )
    }
}
export default App;