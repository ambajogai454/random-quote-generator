import axios from "axios";
import React from "react";

import './App.css';

class App extends React.Component{
    //now this advice is limited only for this block
    //cant use outside it
    //so for this purpose we have app state

    state = {advice: ''};

    componentDidMount(){
        this.fetchAdvice();
        
    }


    //this below method belongs to app class 
    //this below block is just the function declaration we are calling it inside componentDidMount
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {

            //here instaed of console logging the advice as response.data.slip.advive
            //simply create const advice and initialize it with response.data.slip
            //now this advice is limited only for this block
            //cant use outside it
            
            const {advice} = response.data.slip;

            //set advice value to advice property declared above in apps state
            this.setState({ advice })

        })
        .catch((error) =>{
            console.log(error);

        });

    }

    render(){
        const { advice } = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span> GIVE ME SOME ADVICE</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;