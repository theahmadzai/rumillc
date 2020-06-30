import React from 'react'

const NetworkView = ({ network: { name, image, info } }) => {
  const m = JSON.parse(info)

  const blocks = !m ? <p>No Info</p> : m.map(i => Object.keys(i).map(k => (
    <p key={k}>
      <b>{k}</b>: {i[k]}
    </p>
  )))

  return (
    <div>
      <img alt={name} src={image} style={{
        width: '100%',
        height: '200px'
      }} />
      <h1 style={{
        padding: '16px',
        color: '#fff',
        background: 'rgb(216, 165, 80)'
      }}>{name}</h1>
      <div style={{
        padding: '16px',
        fontSize: '1rem'
      }}>{blocks}</div>
    </div>
  )
}

export default NetworkView
