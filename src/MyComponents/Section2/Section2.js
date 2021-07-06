import React , {useState} from 'react'
import data from './Data'

const Cardtemplate = (props) => {

const [color, setcolor] = useState("initial")
const [bol, setbol] = useState(false)
const bookmark=()=>
{
  if(bol===false)
    { 
        setcolor("red");
       setbol(true)
    }
    else
    {
        setcolor("initial");
        setbol(false)
        
    }
    
}
const bookmark2=()=>
{
    setcolor("red");
}
const bookmark3=()=>
{
    if(bol===false)
    {
        setcolor("initial");
    }

}


    return (
        
            <div className="section2container d-flex">
                <div className="mainsectionofcard forsidemargin d-flex">
                    <div className="inside_container d-flex forsidemargin">
                            <div className="nameandphoto d-flex">
                                <img src={props.navlink} alt="blogpic" />
                                <div className="nameandphoto__name">
                                    <h4>{props.navname}</h4>
                                </div>
                            </div>
                        <div className="mainsectionofcard__heading">
                            <h2>{props.thetitle}</h2>
                        </div>
                        <div className="mainsectionofcard__intro">
                            {props.description}
                        </div>
                        <div className="dateandreadduration d-flex">
                           <div className="dateandfaclass">
                               <h5>{props.dateuploaded}</h5>
                               <h5 id="thisisbookmark" > {props.timeread}  <i  class="fas fa-star" ></i></h5>
                           </div>
                           <h4 onClick={bookmark} onMouseLeave={bookmark3} onMouseOver={bookmark2} style={{color}}><i class="fas fa-bookmark"></i></h4>
                        </div>
                    </div>
                <div className="sidephoto"><img src={props.sidepiclink} alt="sidephoto" className="responsive" /></div>
                </div>
            </div>
       
    )
}
function func(val)
{
    return(
        <><Cardtemplate navname={val.navname} navlink={val.navlink} thetitle={val.thetitle} description={val.description} dateuploaded={val.dateuploaded} timeread={val.timeread} sidepiclink={val.sidepiclink} /></>
    )
}

const Section2=()=>
{
    return(
        <>
        <div className="mastercontainer">{data.map(func)}</div>
        </>
    )
}




export default Section2
