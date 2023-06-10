import React from "react";
import { useNavigate } from "react-router-dom";
import profile from '../Assets/Img/profile.webp'
import TodoList from "./TodoList";

function Dashboard() {
    const userProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        avatar: profile,
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <>
            <div className="bg-white flex">
                <div className="bg-white shadow-sm px-4 py-3">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-6 flex mr-0">
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{userProfile.name}</h2>
                        <p className="text-gray-600">{userProfile.email}</p>
                    </div>
                    <img
                        src={profile}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full ml-4"
                    />
                    <hr className="my-auto mx-6 border-gray-300" />
                    <button
                        className="text-red-500 font-semibold ml-4 focus:outline-none"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <TodoList />
        </>
    );
}

export default Dashboard;