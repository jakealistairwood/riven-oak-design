// "use client";

// import { useForm } from "react-hook-form"

// export default async function ContactPage() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors }
//     } = useForm();

//     const onSubmit = async(data) => {
//         const { name, email, subject, message } = data;

//         console.log(name, email, subject, message);
//     }

//     return (
//         <>
//            <section className="">
//                 <div className="container">
//                     <form className="">
//                         <div className="form-control">
//                             <label htmlFor="">
//                                 <input 
//                                     type="text" 
//                                     name="name"
//                                     {...register("name", {
//                                         required: { value: true, message: "Please enter your name" },
//                                         maxLength: {
//                                             value: 40,
//                                             message: "Please use no more than 40 characters"
//                                         }
//                                     })}
//                                 />
//                                 {errors.name && <span className="">{errors.name.message}</span>}
//                             </label>
//                             <label htmlFor="email">
//                                 <input 
//                                     id="email" 
//                                     type="email" 
//                                     {...register("email", {
//                                         required: true,
//                                         pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//                                     })}
//                                 />
//                                 {errors.email && <span>Please enter a valid email address</span>}
//                             </label>
//                         </div>
//                     </form>
//                 </div>
//            </section>
//         </>
//     )
// }