import React, { useState } from "react";
import axios from "axios";

function form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState<any>();
  
    const handleFirstNameChange = (event:any) => {
      setFirstName(event.target.value);
    };
  
    const handleLastNameChange = (event:any) => {
      setLastName(event.target.value);
    };

    const handleRoleChange = (event:any) => {
      setRole(event.target.value);
    };
  
    const handleImageChange = (event:any) => {
      setImage(event.target.files[0]);
    };
  
    const handleSubmit = async (event:any) => {
      event.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("image", image);
    formData.append("role", role);

    try {
      const response = await axios.post("http://localhost:3000/form/submit", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label htmlFor="lastName">Role</label>
          <input type="text" id="role" value={role} onChange={handleRoleChange} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default form
