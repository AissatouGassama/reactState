import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
      Person:{
          fullName:"CheikhAnta DIOP" , 
          bio:
          "Cheikh Anta Diop, né le 29 décembre 1923 à Thieytou et mort le 7 février 1986 à Dakar, est un scientifique de formation, historien, anthropologue, homme politique sénégalais.",
          profession:"Historien, Anthropologue",
          src:'https://upload.wikimedia.org/wikipedia/commons/8/83/Cheikh_Anta_Diop%2C_late_1940s.jpg' 
      },
      show: false,
      count: 0,
      
      
    };
}

// componentDidMount(){
//   this.setState.interval = setInterval(()=>{
//     this.setState({count : this.setState.count + 1});
//   }, 1000)
// }

componentWillMount(){
    setInterval(()=>{
      this.setState({count : this.state.count+1} );
    }, 1000)
  }


  render() { 
  return (
    <div className="App">

    {
      this.state.show?( 
        
        <>
          <div>
          <h1 style={{}}>
          {this.state.Person.fullName}
          </h1>
          <h3 style={{}}>
          {this.state.Person.bio}
          </h3>
          <h3 style={{}}>
          {this.state.Person.profession}
          </h3>
          
          <img src={this.state.Person.src} />

        </div>
        <button onClick={() => this.setState({show : !this.state.show})}>Masquer</button>
        </>
      
        ): (<button onClick={() => this.setState({show : !this.state.show})}>Afficher</button>)
    }
    
    <p> {
    (this.state.count)
    } </p>
    </div>
  );
  }
}

export default App;

