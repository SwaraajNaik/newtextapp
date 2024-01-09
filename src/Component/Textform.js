import React,{useState} from 'react'
export default function Textform(props) {
    const handleuppercase = ()=>
    {
        console.log("Upper Click");
        let newText = text.toUpperCase();
        settext(newText);
        document.getElementById("exampleFormControlTextarea1").style.color =  "#220854";
        props.showAlert("Converted to uppercase", "success)")

    }
    const handleonchange= (event)=>
    {
        console.log("On Change");
        settext(event.target.value)
    }
    const countWords = () => {
    // Split the text into words using space as the delimiter
    const words = text.split(' ');
    // Filter out empty strings to get the actual word count
    const actualWordCount = words.filter(word => word != '').length;
    return actualWordCount;
  };
      const [text, settext] = useState("Enter");
      
  return (
    <>
<div className="container my-3 mx-5 position-sticky" style={{color:props.mode==='dark'?'#69FC1B':' #220854'}}>
<div className="mb-3">
  <label for="Mybox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleuppercase} > Uppercase</button>

<p>
    <p>There are {text.length} and {countWords()} words and it will take {0.08*text.length} min</p>
</p>

<p style={{color:props.mode ==="dark"?"#69FC1B ":" #220854"}}>
  {text}
</p>
</div>

 
    </>
  )
}

