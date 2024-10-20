import React, { useState } from 'react';
import Nav from '../nav/nav';
import { useNavigate } from 'react-router-dom';
import{ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const [logind, setlogind] = useState({
        mail: '',
        password: '',
        confirm: ''
    });

    const [error, seterror] = useState({
        mail: '',
        password: '',
        confirm: ''
    });

    const details = (e) => {
        const { name, value } = e.target;
        setlogind((prev) => ({
            ...prev,
            [name]: value
        }));
        if (name === 'mail') {
            const pattern = /\w+@\w+\.[A-Za-z1-9]+$/
            const mails = pattern.test(value)
            console.log(mails)


            seterror((prev) => ({
                ...prev,
                [name]: !mails ? 'Only accept this format aswin@gmail.com' : ''
            }))
        }

        if (name === 'password') {
            const pattern = /(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])/
            const password = pattern.test(value)
            console.log(password)


            seterror((prev) => ({
                ...prev,
                [name]: !password ? 'MInimum one upercase one lowercase and one number' : ''
            }))
        }

        if (name==='confirm'){
            console.log('logind.confirm', logind.password)
            console.log('logind.confirm',logind.confirm)

            const confirm = logind.password == value 
            console.log('conform',confirm)
            seterror((prev)=>({
                ...prev,
                [name]: !confirm ? 'Does not match the Password and confirm password' : ''
            }))
        }

    };

    const dashboardpage=()=>{
        const dash =logind.mail == 'aswin@gmail.com' && logind.password =='As1' && logind.confirm =='As1'
        if (dash){
            toast.success('Login SuccesFull',{
                    position:'top-right',
                    autoClose:3000
                    
            })
            setTimeout(()=>{
                navigate('dashboard',{state:{mail:logind.mail}})
            },1000)
        }
        else{
            toast.error("plesae correct Mail and Password",{
                position:'top-right',
                autoClose:3000
            });
        }
    }


    return (
        <div className='bg-white dark:bg-gray-800 dark:text-white'>
            <div className='mt-10 px-5'>
                <div className='container mx-auto md:flex justify-center'>
                    <div className='bg-gray-700 px-5 py-10 rounded-2xl'>
                        <div className='mb-5'>
                            <h1 className='text-2xl opacity-55 pl-2 text-white'>
                                Let’s Get You Started With An Online Account!
                            </h1>
                        </div>
                        <div className='bg-gray-800 rounded-2xl text-white px-10 py-10 space-y-5 md:w-[500px]'>
                            
                            <div className='flex flex-col space-y-2'>
                                <label className='opacity-60'>Email</label>
                                <input
                                    name='mail'
                                    value={logind.mail}
                                    placeholder='Enter the email'
                                    className='p-2 rounded bg-gray-700'
                                    onChange={details}
                                />
                                <p className='text-red-500'>{error.mail}</p>
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label className='opacity-60'>Password</label>
                                <input
                                    name='password'
                                    value={logind.password}
                                    placeholder='Enter the password'
                                    className='p-2 rounded bg-gray-700'
                                    onChange={details}
                                />
                                <p className='text-red-500'>{error.password}</p>

                            </div>
                            <div className='flex flex-col space-y-2'>
                                <label className='opacity-60'>Confirm Password</label>
                                <input
                                    name='confirm'
                                    value={logind.confirm}
                                    placeholder='Confirm the password'
                                    className='p-2 rounded bg-gray-700'
                                    onChange={details}
                                />
                                <p className='text-red-500'>{error.confirm}</p>

                            </div>

                            <button
                                className='opacity-60 hover:opacity-95'
                                onClick={dashboardpage}
                            >
                                <span>Login</span>
                            </button>
                            <ToastContainer/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
