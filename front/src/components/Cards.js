import React from 'react'

const Cards = (props) => {
  return (
    <div className='mx-1 card' style={{ width: '250px' }}>
    <img style={{ maxWidth: '180px' }} src={props.foto} className='card-img-top' alt='...' />
    <div className='card-body'>
    <h5 className="card-title">{props.name}</h5>
      <p className='card-text'>{props.funcao}</p>
      <p className="card-text"><small className="text-body-secondary">RA:{props.registroAluno}</small></p>
    </div>
</div>
  )
}

export default Cards