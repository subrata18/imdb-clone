import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "../components/Navbar";

function Profile() {
    return (
        <>
            <Navbar />
            {/* <header className="container grid justify-between max-w-screen-lg grid-cols-3 gap-1 mx-auto bg">
                <div className="container flex justify-center bg-red-500">
                    <img width="100px" height="100px"
                        className="object-cover mx-1 my-10 mr-3 rounded-full hover:" src="https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg" alt="Profile image" />
                </div>
                <section className="flex flex-row gap-4 bg-white w-100">
                    <div className="h-20 bg-blue-600 w-100">
                        <h5 className="mx-2 my-3 text-3xl bg-white-200">#Subrata Kolay</h5>
                    </div>
                    <div className="h-20 bg-blue-700 myy-1 center w-30">
                        <Button variant="outline-primary" className="bg-blue-300 hover:">Edit profile</Button>
                    </div>
                    <div>

                    </div>


                </section>

            </header > */}
            <main className="bg-gray-100 bg-opacity-25">
                <div className="mb-8 lg:w-8/12 lg:mx-auto">
                    <header className="flex flex-wrap items-center p-4 md:py-8">
                        <div className="md:w-3/12 md:ml-16">
                            <img className="object-cover w-20 h-20 p-1 border-2 border-pink-600 rounded-full md:w-40 md:h-40" src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="profile">
                        </div>
                    </header>
                </div>
            </main>

        </>
            )
}

            export default Profile;



