import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <div className="container grid justify-between max-w-screen-lg grid-cols-3 gap-1 mx-auto bg">
                <div className="container flex justify-center bg-red-500">
                    <img width="100px" height="100px"
                        className="object-cover mx-1 my-10 mr-3 rounded-full " src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </div>
                < div className="flex flex-row gap-4">
                    <div className="h-20 bg-blue-600 w-100">
                        <h5 className="mx-2 my-3 text-3xl bg-white-200">#Subrata Kolay</h5>
                    </div>
                    <div className="h-20 my-3 bg-red-900 w-30">
                        <button className="border-2 border-black border-solid rounded-sm">Edit profile</button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Profile;