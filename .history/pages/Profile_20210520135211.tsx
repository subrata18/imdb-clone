import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <div className="main-container">
            <Navbar />
            <div className="bg-red-400 max-w-96 max-h-96">
                <button>
                    <img className="inline object-cover w-12 h-12 mx-1 my-3 mr-3 rounded-full cursor-pointer" src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </button>
            </div>
        </div>
    )

}

export default Profile;