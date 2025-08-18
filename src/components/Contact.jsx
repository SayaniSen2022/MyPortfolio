import React, { useState } from 'react';
import './Contact.css';
import { Button, useToast } from "@chakra-ui/react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message.trim()){
      newErrors.message = 'Message is required';
    } else{
      const wordCount = message.trim().split(/\s+/).length;
      if(wordCount > 100){
        newErrors.message = `Message exceeds 100 words limit (currently ${wordCount}).`
      }
    }
    return newErrors;
  };

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className='outer-container'>
      
      <div class="card">
          <div class="user-face">
              <img src="./images/profile.jpg" alt="face"/>
          </div>
          <div>
              <div>
                  <h1>Sayani Sen</h1>
                  <p>sayanisen.official@gmail.com</p>
              </div>
              <div class="flex-between">
                  <div>
                  <div>UI/UX Developer | Front-End Developer</div>      
                  </div>
              </div>

              <div class='socials'>
                  <p>
                  <span class="text-accent"><i class="fa-brands fa-linkedin"></i></span>
                  <span class="text-accent"><i class="fa-brands fa-square-x-twitter"></i></span>
                  <span class="text-accent"><i class="fa-brands fa-square-github"></i></span>
                  </p>
              </div>
          </div>
      </div>

      <div className='con-right'>
        <h2 className='form-heading'>Get in Touch</h2>
        <form className='contact-form' onSubmit={handleSubmit}>          
          <label htmlFor='name'> Name: </label>
          <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              id="name"
            />
            {errors.name && <span className='error'>{errors.name}</span>}

          <label htmlFor='email'> Email: </label>
          <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              id="email"
            />
            {errors.email && <span className='error'>{errors.email}</span>}

          <label htmlFor='message'> Message: </label>
          <textarea
              name='message'
              rows='6'
              cols='3'
              style={{resize: 'none'}}
              value={formData.message}
              onChange={handleChange}
              id="message"
            ></textarea>
            {errors.message && <span className='error'>{errors.message}</span>}

          <Button type='submit' colorScheme='yellow' variant='solid' my="0" mx="auto">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
