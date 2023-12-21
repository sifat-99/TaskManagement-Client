import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="border-2 rounded-2xl flex  flex-col-reverse bg-white md:grid md:grid-cols-2 items-center justify-center mt-12">
      <div className="flex items-center justify-center w-full h-[480px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: 'url("/Tasks.gif")' }}>
        <Link to={'/dashboard'}><button className="btn bg-black text-white text-3xl hover:bg-green-400 hover:text-red-600">Let&apos;s Explore</button></Link>
      </div>
      <div>
        <img className="h-[480px] rounded-2xl w-full bg-white" src="/bb.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
