import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-full mx-auto h-[100vh] px-2  flex gap-8 flex-col items-center justify-center">
            <h1 className="text-6xl text-black font-bold">Error 404</h1>
            <span className="text-2xl text-black font-semibold">Sorry, We Misplaced That Page</span>
            <span className="text-black text-xl">Our digital librarian seems to have misplaced the page you requested. Stay with us, and we will help you rediscover it.</span>
            <Link to={'/'}><button className="btn bg-black text-white hover:text-white hover:btn-primary w-48 text-2xl font-bold normal-case">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;