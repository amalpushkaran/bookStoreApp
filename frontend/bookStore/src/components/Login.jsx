import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  return (
    <div>
         <div className="modal-box w-auto h-auto ">
    <form method="dialog"
    onSubmit={handleSubmit(onSubmit)}
     >
      {/* if there is a button in form, it will close the modal */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            
            <h3 className="font-bold text-lg">Login</h3>
      {/* {email} */}
    <div>
       <span className="text-black ">Email</span>
       <br /> 
       <input 
       type="email" 
       placeholder="enter your email"  
       className="w-80 px-1 py-3 border rounded-md outline-none mt-2"
       {...register("email", { required: true })}
        />
        <br />
    {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
    </div> 
   {/* {password} */}
   <div>
       <span className="text-black mt-3">Password</span>
       <br /> 
       <input 
       type="password" 
       placeholder=" enter your password"  
       className="w-80 px-1 py-3 border rounded-md outline-none mt-2"
       {...register("password", { required: true })}
       />
       <br />
         {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
    </div>
    
    <div className="flex justify-around mt-6">
    <button className=" btn bg-pink-500 text-white rounded-md px-4 py1 hover:bg-pink-700 duration-300 cursor-pointer">
       Login</button>
      <p className="mt-3">
            not registered?
        <Link to={'/signup'} className="text-blue-600 cursor-pointer">Signup</Link></p>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login