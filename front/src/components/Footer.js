import React from 'react'
import { TbBrandOpenai } from "react-icons/tb";

const Footer = () => {
  return (
<footer>
    <div className='bg-light '>
        <div className='container text-center pt-1'>
            <div className='row'>
                <div className='col'>
                    <p className='text dark fs-5'>
                        Contato do Suporte:</p>
                    <p>
                        <a href='#' className='fs-6'> MyTasksSuporte@gmail.com</a>
                    </p>
                </div>
                <div className='col'>
                    <p className="navbar-brand  text-dark fs-5" href="#">MyTasks</p>
                    <p className='fs-6'>Copyright ©</p>
                </div>
                <div className='col'>
                    <TbBrandOpenai size={40} />
                    <br />
                    <p className='fs-5'>OpenAI</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer