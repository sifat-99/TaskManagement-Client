
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            // Start the animation when the component is in view
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    return (
        <div className="container mx-auto mt-5 px-2 " ref={ref}>
            <div>
                <h1 className="text-5xl font-bold text-orange-400">About </h1>
            </div>
            <div className="hero bg-base-100 my-5">
                <div className="hero-content flex-col lg:flex-row justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={controls}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:w-1/2 relative"
                    >
                        <img
                            src='https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?1&w=740&t=st=1703192558~exp=1703193158~hmac=4fc01879ab2a56f865bfdd9a9e890cacdd1e08354b38f8bc41aad33960c2ff5a'
                            className="w-full lg:w-3/4 rounded-lg "
                            alt="Task Management"
                        />
                        <div
                            className="border-8 border-white absolute w-2/5 bottom-0 lg:bottom-11 right-0 lg:right-20 lg:top-36  rounded-lg  glass"
                        >
                            <img src="https://img.freepik.com/free-vector/add-tasks-concept-illustration_114360-4905.jpg?w=740&t=st=1703224233~exp=1703224833~hmac=251def87febf90b3f0f560a8045b86041916a0dbd2f32940d8a1703628fb9418" alt="" className="glass w-full" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:w-1/2 space-y-2 px-1 text-right"
                    >
                        <h1 className="text-3xl font-bold">
                            We are qualified & of experience in this Task Management
                        </h1>
                        <p className="">
                            We possess the expertise and qualifications necessary for this
                            category. Our virtual workspace for task management is a lively
                            online environment where we collaborate to organize, assign, and
                            accomplish tasks efficiently. It serves as a dynamic platform
                            where productivity has no limits, and our committed team excels
                            in the digital landscape. Come join us in this journey of
                            effective task management, as we embrace innovation and broaden
                            our capabilities collectively!
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-warning"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;

