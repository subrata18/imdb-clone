import React from "react";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <div className="grid justify-between max-w-screen-lg grid-cols-3 gap-1 mx-auto">
                <div className="container flex justify-center bg-red-500">
                    <img width="120px" height="120px"
                        className="object-cover mx-1 my-10 mr-3 rounded-full " src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </div>
                <section className="flex mx-0 bg-blue-400">
                    <div>
                        <h6 className="my-3 bg-white-200">#Subrata Kolay</h6>
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