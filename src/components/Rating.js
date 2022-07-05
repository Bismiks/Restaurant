import React from 'react'

function Rating( {data} ) {
  return (
    <div className='rating'>
    {
        data.map((item) =>(
            <div>
                <div> <span><h6>{item.name}</h6></span></div>
                <div>
                    <p>{item.date}</p>
                    <p>{item.comments}</p>
                </div>
            </div>
        ))
    }
</div>
  )
}

export default Rating

// in array separate object ine iterate cheyyan  mapping fn use akkam 

{/* <div className='rating'>
        {
            data.map((item) =>(
                <div>
                    <div> <span><h6>{item.name}</h6></span></div>
                    <div>
                        <p>{item.date}</p>
                        <p>{item.comments}</p>
                    </div>
                </div>
            ))
        }
    </div> */}