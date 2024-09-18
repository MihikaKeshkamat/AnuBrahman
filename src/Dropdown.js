import React,{useState} from 'react'
import './App.css' 
import {Link} from 'react-router-dom';
import {Segments} from './Segments';

const Dropdown = () => {
    const[click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
    <>
    <ul onClick={handleClick} 
    className={click ? 'segments-dropdown-menu clicked':'segments-dropdown-menu'}> 
    {/* <li>
        <Link to="/Astronomy" onClick={()=>setClick(false)} element={Astronomy}><Astronomy/></Link>
    </li> 
    <li>
        <Link to="/Astrophysics" onClick={()=>setClick(false)} element={Astrophysics}><Astrophysics/></Link>
    </li>   */}
    
    {Segments.map((item,index) => {
        return(
            <li key={index}>
                <Link className={item.cName} to={item.path} onClick={()=>{
                    setClick(false);
                }}>{item.title}</Link>
            </li>
        )
    })} 
    
    </ul>
    
    </>
    )
}

export default Dropdown
