import React from 'react';
import "./test.css"
class ListMap extends React.Component{
  
constructor(props){
  
}

render(){
      const { user } = this.props;
return(
        <div>
        <div>
          <li>姓名：{user.username}</li>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr />
          </div>
        </div>
      )
    }
    
}

export default ListMap;