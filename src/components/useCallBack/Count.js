import React from 'react'

function Count(props) {
    const {text,count} = props
  return (
    <div>
       {text} -{count}
    </div>
  )
}

export default Count