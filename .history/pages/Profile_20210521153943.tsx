import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            <header className="container grid justify-between max-w-screen-lg grid-cols-3 gap-1 mx-auto bg">
                <div className="container flex justify-center bg-red-500">
                    <img width="100px" height="100px"
                        className="object-cover mx-1 my-10 mr-3 rounded-full hover:" src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </div>
                <section className="flex flex-row gap-4 bg-white ">
                    <div className="h-20 bg-blue-600 w-100">
                        <h5 className="mx-2 my-3 text-3xl bg-white-200">#Subrata Kolay</h5>
                    </div>
                    <div className="h-20 bg-blue-700 myy-1 center w-30">
                        <Button variant="outline-primary" className="bg-blue-300 hover:">Edit profile</Button>
                    </div>


                </section>

            </header >
        </>
    )
}

export default Profile;