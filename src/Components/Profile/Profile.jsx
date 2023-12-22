import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";



const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" min-h-screen flex justify-center  mt-32 ">
            <div>
                <div className="flex justify-center items-center">
                    <img className="rounded-full w-[200px] h-[200px] " src={user?.photoURL} alt="User Photo" />
                </div>
                <div className="text-center mt-4">
                    <h1 className="text-2xl">Name : {user?.displayName}</h1>
                    <h1 >Email : <span className=" text-blue-600 underline">{user?.email}</span></h1>
                </div>
            </div>

        </div>
    );
};

export default Profile;