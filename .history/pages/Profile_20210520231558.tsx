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
                    <div className="bg-blue-600">
                        <h5 className="mx-2 my-3 text-4xl bg-white-200">#Subrata Kolay</h5>
                    </div>
                    <div className="my-6 bg-red-500">
                        <button className="border-2 border-white border-solid rounded">Edit profile</button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Profile;