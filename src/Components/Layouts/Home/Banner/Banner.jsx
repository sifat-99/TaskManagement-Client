import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="border-2 rounded-2xl flex  flex-col-reverse bg-white md:grid md:grid-cols-2 items-center justify-center mt-12">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-[480px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url("/Tasks.gif")' }}>
        <p className="text-3xl font-bold w-11/12 text-white bg-black bg-opacity-75 p-4 rounded-3xl">Empower Your Team&apos;s Productivity:<br/> <span className="text-xl">TaskFlow Unleashes Seamless Collaboration in Real Time!</span></p>
        <Link to={'/dashboard'}><button className="btn bg-black text-white text-3xl hover:bg-green-400 hover:text-red-600">Let&apos;s Explore</button></Link>
      </div>
      <div>
        <img className="h-[480px] rounded-2xl w-full bg-white" src="/bb.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
