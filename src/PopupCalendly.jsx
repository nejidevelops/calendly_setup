import React from 'react'
import { PopupWidget } from 'react-calendly'

function PopupCalendly() {
  return (
    <div className="popup-widget">
    <PopupWidget
      url="https://calendly.com/newtonombese1" 
      rootElement={document.getElementById('root')}
      text="Schedule Time with me"
      textColor="#ffffff"
      color="#319795"
    />
  </div>
  )
}

export default PopupCalendly