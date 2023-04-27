import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Connexion.css'

function Connexion() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const onSubmit = (data:any) => console.log(data);
  return (
    <div className='global'>
      <Card className='card'>
        <h2 className='titre'>CONNEXION</h2>
        <Form className='form' onSubmit={handleSubmit(onSubmit)}>
          <Form.Label className='label'>Email </Form.Label>
          <div className='saisie'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
            <input type="email" placeholder="Entrer email"
            {...register("email", {
              required:true, 
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
              })
            }
            />
          </div>
          <div className='error'>
            {errors.email?.type === "required" && "Ce champs est requis"}
            {errors.email?.type === "pattern" && "Entrer un email correct"}
          </div>
          <Form.Label className='label'>Mot de passe</Form.Label>
          <div className='saisie'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
            </svg>
            <input type="password" placeholder="Enter mot de passe" 
            {...register("passe", {required: true, minLength: 6})}
            />
          </div>
          <div className='error'>
            {errors.passe?.type === "required" && "Ce champs est requis"}
            {errors.passe?.type === "minLength" && "Au moins 6 caractères"}
          </div>
          <div className='bouton'>
            <input type="submit" value={'Se connecter'}/>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default Connexion

