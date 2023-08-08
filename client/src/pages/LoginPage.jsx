import { useForm } from "react-hook-form"

function LoginPage(){

    const { register, handleSubmit, formState: { errors }} = useForm()

    const onSubmited = handleSubmit(async (data) => {
        console.log(data);//
      })

    return(
        <div className="bg-zinc-200 max-w-md p-10 rounded-md">
            <form onSubmit={onSubmited}>
            <input type="text" {...register("username", {required:true})} placeholder="Username" className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2" />

            {
            errors.username && <p className='text-red-500'>User is Required</p>
          }


            <input type="email" {...register("email", {required:true})} placeholder="Email" className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2"/>

          {
            errors.email && <p className='text-red-500'>Email is Required</p>
          }

            <input type="password" {...register("password", {required:true})} placeholder="Password" className="w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2"/>

            {
            errors.password && <p className='text-red-500'>Password is Required</p>
          }


            <button type='submit' className='bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 rounded px-4'>Regitrar</button>
        </form>
        </div>
    )
}

export default LoginPage