import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const imgApiKey = import.meta.env.VITE_IMG_API_KEY;

const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

export function RegistrationCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, logOut } = useContext(AuthContext);
  const [valid, setValid] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState("");
  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.text.value;
    if (password.length < 6) {
      setValid("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setValid("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setValid("Password must contain at least one lowercase letter");
      return;
    } else if (!/[0-9]/.test(password)) {
      setValid("Password must contain at least one number");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setValid("Password must contain at least one special character");
      return;
    } else {
      setValid("");
    }
    setErrorMessage("");
    createUser(email, password, name,image)
      .then(() => {
        // console.log(res.user);
        swal({
          title: "Good job!",
          text: "Registration successful!",
          icon: "success",
          button: " Login Now!!!",
        }).then(function () {
          window.location = "/login";
          logOut();
        });
      })
      .catch(() => {
        // console.log(err.message);
        setErrorMessage("Email already in use");
      });

    // console.log(email, password, image, name);
    e.target.reset();
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);
    fetch(imageHostingApi, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data.display_url);
      })
      .catch((err) => console.log(err));
    // setImage(file);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-[90vh] bg-gray-100 rounded-3xl py-2">
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <Card className="max-w-96 mx-auto mt-32 mb-20 border-2 rounded-lg p-4">
        <div className="mb-4 grid h-28 place-items-center">
          <h1 className="text-center text-3xl font-bold bg-black text-white rounded-3xl p-4">Registration</h1>
        </div>
        <CardBody className="flex flex-col gap-4">
          <form>
            <Input className="p-2 rounded-lg border-black" label="Name" placeholder="Your Name" name="text" type="text" size="lg" />
            <br />
            <br />
            <div className="">
              <Input className="rounded-sm " onChange={handlePictureUpload} type="file" />
              <h1 className="mt-2">Upload Image</h1>
            </div>
            <br />
            <Input placeholder="Your Email" className="p-2 border-black rounded-lg" label="Email" name="email" type="email" required size="lg" />
            <br />
            <br />
            <div className="flex relative">
              <Input
                className="rounded py-2 px-2 border-black"
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
            <div className="mt-8 flex items-center gap-4">
              <Checkbox required />
              <p>Remember me</p>
            </div>
            <Button onClick={handleRegistration} className="btn bg-slate-400 text-white hover:bg-black mt-3 " variant="gradient" fullWidth>
              Sign up
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <h1 className="mt-4 text-purple-700 font-semibold flex justify-center">
            {valid}
            {errorMessage}
          </h1>
          <h1 className="mt-4 text-purple-700 font-semibold flex justify-center">
            Already have an account?
            <Link to={"/login"} className="ml-1  text-red-500 font-bold">
              Login
            </Link>
          </h1>
        </CardFooter>
      </Card>
    </div>
  );
}
