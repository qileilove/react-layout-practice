import React from 'react';
import "./test2.css";
import ListMap from "./MapList"
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class Test2 extends React.Component{



render(){
   
 return <div>
  <div className="test2">this is a inlineblock</div>
  <div className="test2">this is a inlineblock</div>
  <div className="displaynone">this is none</div>
  <div className="listitem">   <span>111111</span>
  <span>222222</span>
  <span>333333</span></div>
      <div>{users.map((user, i) => <ListMap key={i} user={user} />)}</div>
    <div className="marget">this is marget auto</div>

 </div>
}

}
export default Test2;