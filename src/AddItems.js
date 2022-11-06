import React from 'react'
import {FaPlus} from "react-icons/fa"

const AddItems = ({SetAddItems,additems,handlesubmit}) => {
  return (
    <form className='addForm' onSubmit={handlesubmit}>
      <input type="text" placeholder='Add Your Items' value={additems} onChange={(e)=>SetAddItems(e.target.value)} />
      <button type='submit'><FaPlus/></button>
    </form>
  )
}

export default AddItems