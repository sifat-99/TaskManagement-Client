import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const AuthProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = {
      email,
      password,
    };
    console.log(userInfo);

    signIn(email, password);
    swal({
      title: "Good job!",
      text: "Login successful!",
      icon: "success",
      button: " Okay!!!",
    });
    toast("Successfully Logged In")
      .then((res) => {
        console.log(res?.user);

        navigate(location ? location?.state : "/");
        redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // e.target.reset();
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(AuthProvider)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Login successful!",
          icon: "success",
          button: " Okay!!!",
        })
        console.log(res?.user);
        navigate(location ? location?.state : "/");
        redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGithubLogin = () => {
    signInWithGithub(GitHubProvider)
      .then((res) => {
        swal({
          title: "Good job!",
          text: "Login successful!",
          icon: "success",
          button: " Okay!!!",
        })
        console.log(res?.user);
        navigate(location ? location?.state : "/");
        redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[70vh] bg-gray-100 rounded-3xl py-2">
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <Card className=" max-w-80 md:w-96 mx-auto  mt-12 border rounded-lg border-black  p-4">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography className="text-white text-3xl font-bold bg-black p-4 rounded-2xl">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <form onSubmit={handleLogin}>
            <Input
              className="rounded py-2 px-2"
              placeholder="Your Email"
              label="Email"
              name="email"
              type="email"
              required
              size="lg"
            />
            <br />
            <div className="flex relative">
              <Input
                className="rounded py-2 px-2"
                placeholder="Your Password"
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                required
                size="lg"
              />
              <a
                className="absolute right-3 text-xl top-2 hover:cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </a>
            </div>
            <div className="mt-8">
              <Checkbox label="Remember Me" />
            </div>
            <Button
              type="submit"
              className="btn text-black hover:btn-primary hover:text-white mt-2"
              fullWidth
            >
              Sign In
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to={'/register'}><h1 className="ml-1 font-bold text-blue-500">Sign up</h1></Link>
          </Typography>
          <div className="flex items-center gap-4 justify-center">
            <button onClick={handleGoogleLogin}>
              <FcGoogle className="text-4xl"></FcGoogle>
            </button>
            <button onClick={handleGithubLogin}>
              <FaGithub className="text-4xl"></FaGithub>
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
