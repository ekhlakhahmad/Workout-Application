import React, { useState } from "react";
import leftArrow from "../assets/leftArrow.svg";
import leftArrow2 from "../assets/leftArrow2.svg";
import rightArrow from "../assets/rightArrow.svg";
import home from "../assets/home.svg";
import msg from "../assets/msg.svg";
import camara from "../assets/camara.svg";
import user from "../assets/user.svg";
import search from "../assets/search.svg";
import plus from "../assets/plus.svg";

const Schedule = () => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDayClick = (date) => {
		setSelectedDate(date);
	};
	const routine = [
		{ time: "06:00 AM", activity: "Ab Workout, 07:30 am", completed: false },
		{ time: "07:00 AM", activity: "Upperbody Workout, 9 am", completed: false },
		{ time: "08:00 AM", completed: false },
		{ time: "09:00 AM", completed: true },
		{ time: "10:00 AM", completed: true },
		{ time: "11:00 AM", completed: true },
		{ time: "12:00 PM", completed: false },
		{ time: "01:00 PM", completed: true },
		{ time: "02:00 PM", activity: "Lowerbody Workout, 3 pm", completed: true },
		{ time: "03:00 PM", completed: true },
		{ time: "04:00 PM", completed: false },
		{ time: "05:00 PM", completed: true },
	];

	return (
		<div className="w-[375px] h-[800px] flex flex-col shadow-sm p-4 rounded-b-xl bg-white gap-3">
			<div className="flex gap-14 items-center">
				<img src={leftArrow} alt="Left Arrow" />
				<h1 className="text-2xl font-semibold">Workout Schedule</h1>
			</div>
			<div className="flex mx-auto gap-2 items-center">
				<img src={leftArrow2} alt="Left Arrow" />
				<h2 className="text-lg font-semibold">Feb 2024</h2>
				<img src={rightArrow} alt="Right Arrow" />
			</div>
			<div className="flex justify-between">
				<Day
					name="Sun"
					date="5"
					active={selectedDate === "5"}
					onClick={() => handleDayClick("5")}
				/>
				<Day
					name="Mon"
					date="6"
					active={selectedDate === "6"}
					onClick={() => handleDayClick("6")}
				/>
				<Day
					name="Tue"
					date="7"
					active={selectedDate === "7"}
					onClick={() => handleDayClick("7")}
				/>
				<Day
					name="Wed"
					date="8"
					active={selectedDate === "8"}
					onClick={() => handleDayClick("8")}
				/>
				<Day
					name="Thu"
					date="9"
					active={selectedDate === "9"}
					onClick={() => handleDayClick("9")}
				/>
			</div>

			<div className="time">
				{routine.map((item, index) => (
					<RoutineItem
						key={index}
						time={item.time}
						activity={item.activity}
						completed={item.completed}
					/>
				))}
			</div>
			<div className="w-full">
				<img
					className="absolute w-[60px] z-10 right-10 bottom-36 "
					src={plus}
					alt="plus"
				/>
			</div>
			<div className="fixed w-full left-0 bottom-0 bg-white px-2">
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

const Day = ({ name, date, active, onClick }) => {
	return (
		<div
			className={`flex flex-col items-center justify-center rounded-md px-4 py-2 my-4 cursor-pointer ${
				active ? "bg-gradient-to-r from-blue-200 to-blue-500 text-white" : ""
			}`}
			onClick={onClick}>
			<p className="text-sm leading-3">{name}</p>
			<h1 className="text-3xl font-semibold">{date}</h1>
		</div>
	);
};

const RoutineItem = ({ time, activity, completed }) => {
	return (
		<div className="relative px-2 py-2 border-b-2 font-semibold">
			{time}
			{activity && (
				<span
					className={`absolute right-4 text-sm font-normal font-semibold bottom-0 py-1 px-3 rounded-full ${
						completed
							? "bg-zinc-300"
							: "bg-gradient-to-r from-pink-200 to-purple-500"
					}`}>
					{activity}
				</span>
			)}
		</div>
	);
};

export default Schedule;
