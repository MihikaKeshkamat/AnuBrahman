import React,{useState} from 'react'
import './FormVal.css';
const FormVal = () => {
    const[name,setName] =useState('');
    const[email,setEmail] =useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[age,setAge]=useState('');
    const[gender,setGender]=useState('');
    const[errors,setErrors]=useState('');
    
    const validateForm = () => { 
        const errors ={}; //to get the error in an object form
        if(!name){
            errors.name = 'Name is Required'
        }
        if(!email){
            errors.email = 'Email is Required'
        }else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is invalid';
        }
        if(!password){
            errors.password = 'Password is Required'
        }else if(password.length<6){
            errors.password='Password must be at least 6 digits'
        } 
        if(!confirmPassword){
            errors.confirmPassword = 'Confirm Password is Required'
        }else if(password !== confirmPassword){
            errors.confirmPassword='Password should match'
        } 
        if(!age){
            errors.age = 'Age is Required'
        }else if(isNaN(age)||age<18){
            errors.age='Age must be at least 18'
        } 
        if(!gender){
            errors.gender = 'Gender is Required'
        }
        console.log(errors);
        return errors;
    }
    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validateForm(); //function call
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else{
            console.log('Form Submitted')
        }
        console.log("Form Submitted")
    }


    return (
    <div className="feedback">
        <h1>Form Validation</h1>
        <br/>
        <form onSubmit ={handleSubmit} >
        <div className="form-container" >
        <br/>
                <label >Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                {errors.name}
                <br/>
                <br/>
                <label >Email:</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {errors.email}

                <br/>
        <br/>
                <label >Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                {errors.password}
                <br/>
        <br/>

                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                {errors.confirmPassword}
                <br/>
        <br/>

                <label>Age:</label>
                <input type="number" min="18" value={age} onChange={(e)=>setAge(e.target.value)}/>
                {errors.age}
                <br/>
                <br/>
                <label>Gender:</label>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender}
                <br/>
        <br/>
        <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default FormVal;
