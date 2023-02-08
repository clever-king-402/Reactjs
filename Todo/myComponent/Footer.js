import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position:"absolute",
    width:"100%",
    bottom:"0"
  }
  return (
    <>
    <div className="bg-dark text-light py-4" style={footerStyle}>
      <p className="text-center " >
      Copyright &copy; MytodosList.com
      </p>
      
    </div>
    </>
  )
}
