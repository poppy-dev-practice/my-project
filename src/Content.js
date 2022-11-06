import React from 'react'
import ListItems from './ListItems'

const Content = ({handledelete,handleClick,groceryitems}) => {

  return (
	<main>
		{groceryitems.length ? (<ListItems handleClick={handleClick} handledelete={handledelete} groceryitems={groceryitems}/>):<p style={{marginTop:"2rem"}}>your basket is empty</p>}
		
	</main>
  )
}

export default Content