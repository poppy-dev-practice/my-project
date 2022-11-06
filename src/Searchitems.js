import React from 'react'

const Searchitems = ({search,SetSearh}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>

        <input type="text" id="search" placeholder='Search your items' value={search} onChange={(e)=>SetSearh(e.target.value)}/>

    </form>
  )
}

export default Searchitems