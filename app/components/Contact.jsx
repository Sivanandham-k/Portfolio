import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "24edbd3a-11bb-4f32-88ae-0006c7a09e9d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return (
        <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className='text-center mb-2 text-lg mt-7'>Connect with me</h4>
            <h2 className='text-center text-5xl'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>If you have any questions, comments or feedback, please use the form below</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>

                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                    <input type="text" name='name' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />
                  
                    <input type="text" name='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' />

                </div>

                <textarea rows='6' name='message' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'></textarea>

                <button type='submit' className='py-3 px-8 w-max flex justify-between items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit now <Image alt='' src={assets.right_arrow_white} className='w-4' /></button>

                <p className='mt-4'>{result}</p>

            </form>
        </div>
    )
}

export default Contact
