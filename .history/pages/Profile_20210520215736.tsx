import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-4 mx-auto">
                <div className="container flex justify-center bg-red-500">
                    <img width="100px" height="100px"
                        className="object-cover mx-1 my-10 mr-3 rounded-full " src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </div>
                <section className="flex bg-blue-400 w-100">
                    <div>
                        <h1 className="bg-white-200">#Subrata Kolay</h1>
                        <div className="bg-yellow-500">
                            <button>Edit profile</button>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default Profile;