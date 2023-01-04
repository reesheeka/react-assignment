import React, { useState } from "react";
import './App.css';

function App() {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [gender,setGender]=useState('')
  const [country,setCountry]=useState('')
  const [marketing_emails,setmarketing_emails]=useState('')
  const [profile_picture,setprofile_picture]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(firstName.length==0||lastName.length==0 || gender.length==0 ||country.length==0 || marketing_emails.length==0 || profile_picture.length==0 ){
          setError(true)
      }
      if(firstName&&lastName&&gender&&country&&marketing_emails&&profile_picture)
      {
      console.log("First Name: ",firstName,"\nLast Name: ",lastName, "\nGender:",gender,"\nCountry:",country,"\nMarketing Emails:",marketing_emails,"\nProfile Picture:",profile_picture)
      }
  }
  return (
    <>
           <form onSubmit={handleSubmit}>
               <div>
                   <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
               </div>
               {error&&firstName.length<=0?
               <label>First Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
               </div>
               {error&&lastName.length<=0?
               <label>Last Name can't be Empty</label>:""}
               <div>
                   <input placeholder="Gender" onChange={e=>setGender(e.target.value)} />
               </div>
               {error&&gender.length<=0?
               <label>Gender can't be Empty</label>:""}
               <div>
                   <input placeholder="Country" onChange={e=>setCountry(e.target.value)} />
               </div>
               {error&&country.length<=0?
               <label>Country can't be Empty</label>:""}
               <div>
                   <input placeholder="Marketing Emails" onChange={e=>setmarketing_emails(e.target.value)} />
               </div>
               {error&&marketing_emails.length<=0?
               <label>Marketing Emails can't be Empty</label>:""}
               <div>
                   <input placeholder="Profile Picture" onChange={e=>setprofile_picture(e.target.value)} />
               </div>
               {error&&profile_picture.length<=0?
               <label>Profile Picture can't be Empty</label>:""}
               <div>
                   <button>
                       Submit
                   </button>
               </div>
           </form>
        </>
  );
}

export default App;