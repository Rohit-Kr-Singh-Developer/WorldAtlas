import React from 'react'
import { Form } from 'react-router-dom'




export  const contactdata = async ({request}) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return data;

  } catch (error) {
    console.log(error)
  }
}

function Contact() {

  return (
    <div>
      <section className='form-section'>
        <div className='form-container'>
          
          <Form action="/contact" method='post' className='form-content'>
              <h1>Contact us</h1>
              <input name='name' id='name' type="text" placeholder='Name'/>
              <input name='email' id='email' type="email" placeholder='Email id'/>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
              <button>Send</button>
          </Form>
        </div>
      </section>
    </div>
  )
}

export default Contact