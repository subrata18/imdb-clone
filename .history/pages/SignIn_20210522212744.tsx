import Link from "next/link";
import { useState } from "react";
import Navbar from "../src/components/Navbar";

const SignIn = () => {
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const signIn = (event) => {
        event.preventDefault();
        console.log("Username: " + name + "\nPassword: " + pass);
    }
    return (
        <div>
            <Navbar />
            <div className="h-screen py-40 bg-gray-200">
                <div className="max-w-md m-auto bg-white rounded-md shadow-md">
                    <form onSubmit={(event) => signIn(event)} className="flex flex-col justify-center my-3 align-center">
                        <h2 className="my-5 text-4xl font-semibold text-center">Sign In</h2>
                        <br />
                        <input
                            className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                            type="text"
                            placeholder="Username"
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                        <input
                            className="px-2 mx-auto mb-5 bg-transparent border-2 border-gray-300 rounded-md outline-none w-60"
                            type="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(event) => setPass(event.target.value)} />
                        <button
                            type="submit"
                            className="w-48 mx-auto mb-5 border-2 border-gray-300 rounded-md focus:outline-none hover:bg-gray-100">
                            Sign In
                        </button>
                        <small className="m-auto mb-4">Create an account <Link href="/SignUp"><a className="text-blue-700">SignUp</a></Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;