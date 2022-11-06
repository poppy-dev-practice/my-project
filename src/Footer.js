import React from 'react'

const Footer = ({length}) => {
  // const today = new Date()
  return (
    <footer>
        {/* copyrights &copy; {today.getFullYear()} vpn department store  */}
        {length} {length<=1?"item":"items"} in your basket
    </footer>
  )
}

export default Footer