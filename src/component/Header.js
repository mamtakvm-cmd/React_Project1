import React,{Component} from 'react'
import './Header.css'

class Header extends Component{
  
    constructor(props){

        super(props)

        this.state = {
            title:"REACT APP",  
            keyword:"User text here"
          
            }
        }
    
        inputChange(event){
           
            this.setState({keyword:event.target.value?event.target.value:"User text here"})
            this.props.inputText(event.target.value)
        }
    

    render(){
        return(
            <header>
                <center>
                <div className="logo">{this.state.title} </div>
                <br/>
                <input onChange={this.inputChange.bind(this)}/>
                 <p>{this.state.keyword}</p>
                <hr/>
                </center>
                
            </header>
        )
    }
}

export default Header;