function RegistrationForm() {



    return(
        
       <>
       <div>
        <form action="">
            <input type="text" name="username" placeholder="Username" required/>
            <input type="email" placeholder="Email" required/>
            <input type="password" name="password" placeholder="password" required />
            <input type="submit" value="Submit" placeholder="Submit" />

        </form>
       </div>
       </>
    )
   
} 
export default RegistrationForm;