import React from "react";
import leftArrow from "../assets/leftArrow.svg";
import graph from "../assets/graph.svg";
import alert from "../assets/alert.svg";
import ellipseImg from "../assets/ellipseImg.svg";
import girlImg from "../assets/girlImg.svg";
import img from "../assets/img.svg";
import home from "../assets/home.svg";
import msg from "../assets/msg.svg";
import camara from "../assets/camara.svg";
import user from "../assets/user.svg";
import search from "../assets/search.svg";
import AntSwitch from "../components/AntSwitch";
import { useNavigate } from "react-router-dom";

const Tracker = () => {
	const navigate = useNavigate();
	const upcomingWorkouts = [
		{ img: ellipseImg, title: "Full Body Workout", time: "Today 3pm" },
		{ img: img, title: "Upper Body Workout", time: "4 Feb, 3:30 pm" },
	];
	const handleClick = () => {
		navigate("/schedule");
	};

	return (
		<div className="w-[375px] h-[720px] flex flex-col shadow-sm p-4 rounded-b-xl bg-white gap-5">
			<div className="flex gap-20">
				<img src={leftArrow} alt="" />
				<p className="text-2xl font-semibold">Workout Tracker</p>
			</div>
			<div onClick={handleClick} className="cursor-pointer">
				<img src={graph} alt="" />
			</div>
			<div className="flex gap-4 p-2 bg-gradient-to-r from-[#dae1fb] to-slate-400, to-white rounded-lg">
				<img src={alert} alt="" />
				<p className="text-md ">
					You've burned fewer calories than yesterday. Time to get moving!
				</p>
			</div>
			<div className="flex justify-between">
				<h1 className="font-semibold">Upcoming Workout</h1>
				<p className="text-slate-500">See more</p>
			</div>
			{upcomingWorkouts.map((workout, index) => (
				<WorkoutComp key={index} {...workout} />
			))}
			<h1 className="text-lg font-semibold">What Do You Want to Train</h1>
			<div className="flex justify-between bg-[#b9cffe] p-4 rounded-lg">
				<div>
					<h2>Full Body Workout</h2>
					<p>Arms</p>
					<p>Chest</p>
				</div>
				<img src={girlImg} alt="" />
			</div>
			<div className="relative bottom-16 bg-white px-2">
				<div className="flex justify-between items-center">
					<img src={home} alt="" />
					<img src={msg} alt="" />
					<img className="relative bottom-8 " src={search} alt="" />
					<img src={camara} alt="" />
					<img src={user} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Tracker;

const WorkoutComp = ({ img, title, time }) => {
	return (
		<div className="flex justify-between items-center shadow-md rounded-lg p-2">
			<div className="flex gap-4 items-center">
				<img src={img} alt="ellipseImg" />
				<div>
					<h1>{title}</h1>
					<p className="text-slate-600">{time}</p>
				</div>
			</div>
			<AntSwitch defaultChecked inputProps={{ "aria-label": "ant design" }} />
		</div>
	);
};
