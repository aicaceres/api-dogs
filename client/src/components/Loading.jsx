import React from 'react'

export default function Loading() {
  return (
      <div style={{ textAlign:'center' }}>
          <img alt='loading...' src='/assets/loading.gif'
            style={ { width: '300px', height:'300px'} }
          />
          <h1>I'm coming...</h1>
           
          {/* <img alt='loading...' src='/assets/loading-bone.gif'/>
          <h1>Loading...</h1> */}
      </div>
  )
}
