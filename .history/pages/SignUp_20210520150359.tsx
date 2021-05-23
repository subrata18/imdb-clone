import { useState } from "react";
import Link from 'next/link'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [re_pass, setRePass] = useState('')
    const signUp = (event) => {
        event.preventDefault()
        console.log("Username: " + name + "\nEmail: " + email + "\nPassword: " + pass)
    }
    return (
        <div className="h-screen py-40 bg-gray-200">
            <div className="w-4/12 py-4 m-auto bg-white rounded-md shadow-md">
                <form onSubmit={(event) => signUp(event)} className="flex flex-col justify-center my-3 align-center">
                    <h2 className="my-5 text-4xl font-semibold text-center">Sign Up</h2>
                    <br />
                    <input
                        className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                    <input
                        className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <input
                        className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(event) => setPass(event.target.value)} />
                    <input
                        className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                        type="password"
                        placeholder="Retype-password"
                        value={re_pass}
                        onChange={(event) => setRePass(event.target.value)} />
                    <button
                        type="submit"
                        className="w-48 mx-auto mb-5 border-2 border-gray-300 rounded-md outline-none focus:outline-none hover:bg-gray-200">
                        Sign Up
                    </button>
                    <small className="m-auto">Already have an account <Link href="/SignIn"><a className="text-blue-700">SignIn</a></Link></small>
                </form>
            </div>
        </div>
    );
}

export default SignUp;