import './Header.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      

    return (
        <>
        <div className="w-full h-20 fixed-top header">
            <div className='text-white absolute ml-8 mt-4 cursor-pointer'  data-toggle="tooltip" data-placement="top" title="Page d'acceuil">
              


                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </div>
            <div className='rounded-full w-32 h-32 bg-slate-500 absolute shadow-md ml-24 mt-3'>
                <img src="" alt="" />
            </div>
            <div className='text-white text-lg absolute ml-60 mt-4'>
                <p>Prenom NOM</p>
                <p>Profil</p>
            </div>
            <div className='d-flex place-content-end'>
            <div className='icone absolute'>
                <div className='d-flex place-content-end'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 text-white mr-8 mt-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='w-72 mt-3 mr-8 menu'>
                    <div className='d-flex justify-center'>
                        <div className='text-white text-lg m-3 space-y-2'>
                            <div className='d-flex space-x-3' onClick={handleShow} style={{cursor:'pointer'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>
                                <p>Modifier mot de passe</p>
                            </div>
                            <div className='d-flex space-x-3' style={{cursor:'pointer'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>
                                <p>Pointage</p>
                            </div>
                            <div className='d-flex space-x-3' style={{cursor:'pointer'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                                <p>Deconnexion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  

  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modifier le mot de passe</Modal.Title>
            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 flex" style={{cursor:'pointer'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='text-lg'>Mot de passe actuel</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='text-lg'>Nouveau mot de passe</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='text-lg'>Confirmation du mot de passe</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose} >
              Modifier
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  
  export default Header

  