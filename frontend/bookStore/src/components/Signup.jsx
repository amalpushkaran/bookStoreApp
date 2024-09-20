
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div>
         <div className="modal-box w-auto h-auto rounded-md ">
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

            <h3 className="font-bold text-lg">Signup</h3>

{/* { name} */}
    <div className='mt-2'>
       <span className="text-black ">Name</span>
       <br /> 
       <input 
       type="name" 
       placeholder="enter your full name"  
       className="w-80 px-1 py-3 border rounded-md outline-none mt-2"
       {...register("name", { required: true })}
       />
        <br />
        {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
    </div>

     {/* {email} */}
     <div className='mt-2'>
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
     <div className='mt-2'>
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
        <button className=" btn bg-pink-500 text-white rounded-md px-4 py1 hover:bg-pink-700 duration-300 cursor-pointer">Signup</button>

         <div className='flex justify-evenly items-center '> 
          <div>
            <p className="mt-3">if registered?</p>
            </div>

            <div className="mt-3">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<Link className="text-blue-500 " onClick={()=>document.getElementById('my_modal_3').showModal()}> Login</Link>
<dialog id="my_modal_3" className="modal">
 <Login/>
</dialog>
   
   
  </div>
     </div>
    </div>
    
    </form>
  </div>
    </div>
    </div>
    </>
  )
}

export default Signup