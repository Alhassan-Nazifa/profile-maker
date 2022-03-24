import react, {useState} from 'react'

function ProfileForm({submit}) {
    const [profile, setProfile] =useState({
        firstname:"",
        lastname:"",
        email:"",
        Phone:""
    });

    const handler =(event) =>{
        setProfile((prev)=>({
            ...prev,
            [event.targret.name]:event.targret.value
        }));
    }
const handleForm =(e)=>{
    e.preventDefualt();
    submit(profile)
};
  return (
    <div className='formContainer'>
      <h3>Profile Form</h3>
      <form>
      <fieldset>
      <legend>Bio Data</legend>
      <div className='names'>

      <label>
        First name
        <input name ='firstname' type="text" onChange={handler}/>
      </label>

     <label>
        Last name
        <input name ='lastname' type="text" onChange={handler}/>
     </label>

      <label>
        Email
        <input name ='email' type="email" onChange={handler}/>
      </label>

      <label>
        Phone 
        <input name ='phone' type="tel" onChange={handler}/>
      </label>

    </div>
   </fieldset>
      <button className='form' onClick={handleForm}>Add Profile</button>

      </form>

    </div>
  )
}

export default ProfileForm
