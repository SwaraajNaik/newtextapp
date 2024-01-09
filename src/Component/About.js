    import React,{useState} from 'react'

    export default function About() {
        const [btntext,btntextnext]= useState("Dark")
        const [currstate,nextstate] = useState({
            color : "black",
            backgroundColor : "white"
        });
        const handlemode = () =>
        {
            if(currstate.color=='black'){
           nextstate({
              color : "white",
              backgroundColor : "black",
              border : "1px white solid"
           })
           btntextnext("light")
          
        }
        else
        {
             nextstate({
              color : "black",
              backgroundColor : "white",
              border : "1px black solid"
              
           })
           btntextnext("dark")
          
        }

        }
    return (
        <>
        <body style={currstate}>
             <div className="container ">
    <ul className="list-group">
    <li className="list-group-item active" style={currstate}>Cras justo odio</li>
    <li className="list-group-item" style={currstate}>Dapibus ac facilisis in</li>
    <li className="list-group-item" style={currstate}>Morbi leo risus</li>
    <li className="list-group-item" style={currstate}>Porta ac consectetur ac</li>
    <li className="list-group-item" style={currstate}>Vestibulum at eros</li>
    </ul>
    
    </div>
    <div >
    <button className="btn btn-primary mx-5 my-3" onClick={handlemode} >{btntext}</button>
    </div>
        </body>
   
        </>
    )
    }
