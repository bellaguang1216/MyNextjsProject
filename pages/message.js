import Link from "next/link"
import React, { useState } from 'react';



function message() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        message: '',
    });
    
    const sendFormData = () => {
        fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(formData),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Message sent successfully');
              // Show a success message to the user
            } else {
              console.error('Error sending message');
              // Show an error message to the user
            }
          })
          .catch((error) => {
            console.error(error);
            // Show an error message to the user
          });
      };  
      
      const handleSubmit = (event) => {
        event.preventDefault();
        sendFormData();
        setFormSubmitted(true);
      };
    
    var data = require('../public/data.json');

    return (
      <div>
        <h1 className="h1">{data.name}'s personal website</h1>
        <h2 className="h2">Hello! Welcome to {data.name}'s home, please select your action:</h2>
        <h3>1. my introduction</h3>
        <h3>2. my contact</h3>
        <h3 className="highlighted">3. Send a message</h3>

        <h1 className="h1">Hey, this is "send message" page</h1>

  <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type="text" placeholder="tell me your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />

    <label>Phone number:</label>
    <input type="text" placeholder="tell me your phone number" value={formData.phoneNumber} onChange={(event) => setFormData({ ...formData, phoneNumber: event.target.value })} />

    <label>Message:</label>
    <input type="text" placeholder="tell me your message" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />

    <button type="submit">Submit</button>
  </form>

  {formSubmitted && <h3 className="h3">Your message has been sent to {data.name}!</h3>}


        <Link href = '/'> Back</Link>
      </div>
    );
  }
  
  export default message;