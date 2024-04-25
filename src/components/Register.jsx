import React from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/login");
	};

	return (
		<div className="w-[375px] flex flex-col shadow-sm p-4 rounded-b-xl gap-10 bg-white">
			<h1 className="text-xl font-semibold">Create an account</h1>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<input
					className="p-2 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="text"
					placeholder="First Name"
				/>
				<input
					className="p-2 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="text"
					placeholder="Last Name"
				/>
				<input
					className="p-2 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="email"
					placeholder="Email"
				/>
				<input
					className="p-2 border rounded-[12px] bg-[#F1F1F1] h-[50px] outline-none"
					type="password"
					placeholder="Password"
				/>
				<div className="flex gap-2">
					<input type="checkbox" />
					<p className="text-[14px]">
						By proceeding, I agree to all{" "}
						<a className="text-[#93A9FF] underline" href="#">
							T&C
						</a>{" "}
						and{" "}
						<a className="text-[#93A9FF] underline" href="#">
							Privacy Policy
						</a>
					</p>
				</div>
				<input
					className="bg-[#7f97ff] p-2 mt-16 rounded-[12px] text-white h-[50px] outline-none text-[16px] font-semibold cursor-pointer"
					type="submit"
					value="Create an Account"
				/>
			</form>
			<div className="flex justify-evenly">
				<div className="w-[155px]">_______________________</div>
				<p>Or</p>
				<div className="w-[155px]">_______________________</div>
			</div>
			<div className="flex justify-center gap-5">
				<button className="rounded-[8px] p-2 border w-[44px] h-[44px] items-center flex justify-center">
					<img src={google} alt="google" />
				</button>
				<button className="rounded-[8px] p-2 border w-[44px] h-[44px] items-center flex justify-center">
					<img src={facebook} alt="facebook" />
				</button>
			</div>
			<div className="flex justify-center">
				<p>Already have an account?</p>
				<Link to={"/login"} className="text-[#93A9FF] underline">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Register;
