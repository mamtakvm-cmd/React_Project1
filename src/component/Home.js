import React,{Component,Fragment} from 'react';
import JSON from '../db.json'
import Header from './Header'
import Flowerdisplay from './Flowerdisplay'


class Home extends Component{
     
    constructor(){
        super()

        this.state={
            flowers:JSON,
            filtered:JSON
                   }
         }
        
         filterNews (keyword) {
          const output = this.state.flowers.filter((data)=> {

            return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1 ||
            data.color.toLowerCase().indexOf(keyword.toLowerCase())>-1
          })
          this.setState({filtered:output})
         }
       
         
       
    
  render(){
    
      return (
        <Fragment>
            <Header inputText={(inputData)=>{this.filterNews(inputData)}}/>
            <Flowerdisplay dataList = {this.state.filtered}/>
        </Fragment>

      )
  }


}
 export default Home;