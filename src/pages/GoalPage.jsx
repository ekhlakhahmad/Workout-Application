import React from "react";

const GoalPage = () => {
	const goals = [
		{ text: "Weight Loss" },
		{ text: "Muscle Gain" },
		{ text: "Flexibility and Mobility" },
		{ text: "General Fitness" },
		{ text: "Event-specific Training" },
		{ text: "Mindfulness and Mental Health" },
	];

	return (
		<form
			action="/tracker"
			className="w-[375px] flex flex-col shadow-sm p-4 rounded-b-xl  bg-white gap-5">
			<h1 className="text-center text-xl font-semibold">
				What are your goals?
			</h1>
			{goals.map((goal, index) => (
				<label
					key={index}
					className="h-[50px] flex justify-between items-center px-4 rounded-[12px] bg-[#F1F1F1] cursor-pointer">
					<p>{goal.text}</p>
					<input className="w-[22px] h-[22px] " type="checkbox" />
				</label>
			))}
			<input
				className="bg-[#7f97ff] py-2 my-10 rounded-[12px] text-white h-[50px] outline-none text-[16px] font-semibold cursor-pointer"
				type="submit"
				value="Confirm"
			/>
		</form>
	);
};

export default GoalPage;
