import React from 'react'
import Itemlist from './Itemlist'

const ListItems = ({handleClick,handledelete,groceryitems}) => {
  return (
    <ul>
			{groceryitems.map((el)=>(
				<Itemlist handleClick={handleClick} handledelete={handledelete} el={el}/>
			))}
	</ul>
  )
}

export default ListItems