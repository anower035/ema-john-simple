import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        console.log('form submitted',data)
    };

  console.log(watch("example"));    

  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='Your Name here'/>
      {errors.name && <span className='error'>Name is required</span>}
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='Your Email here'/>
      {errors.email && <span className='error'>Email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder='Your Address here'/>
      {errors.address && <span className='error'>Address is required</span>}
      
      <input name="phone" ref={register({ required: true })} placeholder='Your Phone Number here'/>
      {errors.phone && <span className='error'>Phone is required</span>}
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;