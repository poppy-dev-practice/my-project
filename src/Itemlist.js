import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

const Itemlist = ({el,handleClick,handledelete}) => {
  return (
    <li className='item'>
                  <input type="checkbox" checked={el.checked} id="item" onChange={()=>handleClick(el.id)} />
				  <label onDoubleClick={()=>handleClick(el.id)} style={(el.checked)?{textDecoration:"line-through"}:null}>{el.item}</label>
				  <FaTrashAlt role="button" tabIndex="0" onClick={()=>handledelete(el.id)}/>
	</li>
  )
}

export default Itemlist