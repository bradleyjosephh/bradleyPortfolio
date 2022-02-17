import { useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';


function ContactForm() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setFormState({ ...formState, [name]: value })



  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`name: ${formState.name},
      email: ${formState.email},
      message: ${formState.message}`);
    // }
  }

 return (
   <>
   <h4>email: bradleyjosephh@gmail.com</h4>
   <h5>phone: 949-892-0350</h5>
   <br />
   <div className="container">
     <Form>
       <FormGroup>
         <Label for="name">Name</Label>
         <Input id="name" name="name" onChange={handleInputChange} type="text" value={formState.name} required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Email</Label>
           <Input id="email" name="email" onChange={handleInputChange} type="text" value={formState.email} required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Message</Label>
           <Input id="message" name="message" onChange={handleInputChange} type="textarea" value={formState.message} required></Input>
       </FormGroup>
         <Button onClick={handleSubmit}>Send</Button>
     </Form>
     <br />
   </div>
   </>
 )
}



export default ContactForm