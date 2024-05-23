import React from 'react';
import { TbBrandOpenai } from "react-icons/tb";
import '../App.css';

function Footer() {
  return (
    <footer className='my-5'>
    <div className='bg-light pb-2'>
        <div className='container text-center pt-1'>
            <div className='row'>
                <div className='col'>
                    <p className='text dark fs-5 '>
                        Contato do Suporte:
                    </p>
                    <p>
                        <a href='#' className='fs-6'> CodeLearningSuporte@gmail.com</a>
                    </p>
                </div>
                <div className='col'>
                    <p className="text-dark fs-5 " href="#">CodeLearning</p>
                    <p className='fs-6'>© Copyright - 2024 </p>
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

  );
}

export default Footer;