// import {Component} from 'react';
import React from 'react';
import { Input } from './Input';
import { Output } from './Output';

export class LoginSmart extends React.Component{

    constructor(){
        super();
        // console.log('Constructor Called....');
        this.txt = "Input Component";
        this.counter = 0;
        this.username = '';
        this.state={ count:this.counter,userid:this.username };
        // console.log('State Previous ',this.state);
    }
    increment(){
       
        this.counter++;
        this.setState({count:this.counter});
        // console.log('increment called ',this.counter);
    }

    takeInput(event){
        console.log('Value = ',event.target.value);
        this.username = event.target.value;
        this.setState({...this.state,userid:this.username});
        console.log('State After ',this.state);
    }

    render(){
        // console.log('render called....');
        return (
            <div>
                <Input txt={this.txt} takeInput={this.takeInput.bind(this)} increase={this.increment.bind(this)}/>
                {/* <Output count={this.state.count}/> */}
                <Output userid={this.state.userid}/>
            </div>
        );
    }
}