import React,{Component} from 'react'

class Header extends Component{

    constructor(){
    super()

    this.state = {
        title:"REACT-APP",
        desc:"Welcome"
    }

    }
    // using css inside JSX 

    render(){
        const myData=this.state;
        const mystyle = {
            headers:{
                backgroundColor:"green"
            },

            descr:{
                fontSize:"30px",
                textAlign:"center",
                color:"#fff"
            }
        }
        return(
            <header style={mystyle.headers}>
                <center>
                    <div style={mystyle.descr}>{this.state.title}</div>                           
                    <h2>{myData.desc}</h2>
                    <input/>
                    <hr/>
                </center>
            </header>
        )
    }
}


export default Header;






//class component

/*class Header extends Component{
    render()
     {
        return (
         <header>
               <center>
            <h1>React App</h1>
            <input/>
            <hr/>
                </center>
         </header>
        )
     }
        
 }*/



/*function component
const Header = () => {
     
    return(
        <header>
            <center>
                <h1>React App</h1>
                <input/>
            </center>
           <hr/>
        </header>
    )
}
*/
