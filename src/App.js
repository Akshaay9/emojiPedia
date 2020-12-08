import React, { useState } from "react";
import "./styles.css";

export default function App() {
 
  const[output,setoutput]=useState("")
  const emoji={
"😃":"smiling",
"😔":"Sad",
"🤣":"Laughing",
"😭":"Crying",
"🤧":"sneezing",
"😪":"Sleeping",
"👿":"angry",
"🤩":"star-struck",
"❤":"Heart",
"😜":"wink",
"😷":"Masked-Emoji",
"🥵":"Hot-Face",
"🥶":"Cold-Face",
  }
  const inputSearchHandler=(e)=>{
const meaning=emoji[e.target.value]


if(meaning===undefined)
{
  setoutput("Sorry,the emoji is not available in our data base")
  setTimeout(()=>{
    setoutput("")
  },2000)
}
else
{
setoutput(meaning)
}
  }
  const propertyNames = Object.keys(emoji);


const emojiHandler=(e)=>{
  const meaning=emoji[e]
  setoutput(meaning)
 


}
  
  
  
  return (

    <div className="App">
      <h1>Welcome To EmojiPedia </h1>
      <h2>Here you u can find the  meaning of all the emoji</h2>
      <input type="text" placeholder="Search for an emoji" onChange={(e)=>inputSearchHandler(e)} ></input> 
 {output &&( <h4>And the meaning of your emoji is,<h3> "{output}"</h3></h4>)}

{propertyNames.map((item)=>(
<span onClick={()=>emojiHandler(item)}>{item}</span>
))}

      
    </div>
  );
}
