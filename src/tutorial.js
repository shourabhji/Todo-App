import React from 'react';

const Tutorial = () => {
    return (
        
        /*function formatName(user){
            return user.firstname + ' '+ user.lastName;
        }
        const user ={
            firstname: 'shourabh',
            lastName: 'pandey'
        };
        const element =(<div><h1>hello!</h1><h2 className="name">{formatName(user)}!</h2></div>);
        const element1 = 
        React.createElement(
            'h1',
            {className: 'greeting'},
            'hello, world!'
            );
            
            // updating the randered element////////////////////////////
            function tick(){
                const element3 = (
                    <div>
                    <h1>hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.
                    </h2>
                    </div>
                    ); */

////////////// Function and class components /////////////////
///////the simplest way to define a component is to write a javascript function
//  function welcome(props){
    //    return <h1>hello, {props.name}</h1>
//  }
///////////////you can also use a ES6 class to define a component
// class welcome extends
// React.Component{
    //   render(){
        //     return <h1>hello, {this.props.name}</h1>;
//   }
// }

///////////rendering a component//////////////
// previsoly you have only encountered react element that represent dom tags leke h1 and div 
// however elements can also represent user defined components 
// like <anything></anything>
// function Welcome(props){
    //   return <h1>hello{props.name}</h1>;
// }
// const element = <Welcome name=' shourabh' />

/////////////////Composing Components ///////////////
// components can  refer to other components in their output this let us use the same component abstravtion
// for any level of details. a form, a button , ascreen . in react app they are comonnly expressed ascomponents
// foe example we can create an app components thst can render welcoe any time 

// function Welcome(props){
    //   return <h1>
//     hello,{props.name}
//   </h1>
// }
// function App(){
    //   return(
        //     <div>
//       <Welcome name='shourabh' />
//       <Welcome name='shivam' />
//       <Welcome name='mohit elwa edition' />
//     </div>
//   )
// }

//////////////Extracting components //////////////
// you can split Component in to smaller components


//////////////////state and lyfecycle/////////////////////

<div>

</div>
      
    );
}

export default Tutorial;
