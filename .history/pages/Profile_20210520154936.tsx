import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-4 mx-auto">
            <div className="container flex justify-center">
                <img className="inline object-cover w-8 h-8 mx-1 my-3 mr-3 rounded-full cursor-pointer" src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />

            </div>
        </div >

    )
}

export default Profile;