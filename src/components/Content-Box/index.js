import React, { Component } from 'react';
import Axios from 'axios';
import './styles.css'

class contentBox extends Component {
    state = { 
        catPic: '',
        catFact: '',
 };
    componentDidMount(){
        this.loadPicture();
        this.loadFact();
    };
    loadPicture = async () => {
        const {data: {image}} = await Axios.get('https://randomfox.ca/floof/')
        this.setState({catPic: image})
    };
    loadFact = async () => {
        const {data: {text}} = await Axios.get('https://cat-fact.herokuapp.com/facts/random')
        this.setState({catFact: text})
    };
    render() {
        return (
        <div className='content-box'>
            <img src={this.state.catPic} alt='A cat'/>
            <p className='cat-fact'>{this.state.catFact}</p>
        </div>
        );
    }
}

export default contentBox;
