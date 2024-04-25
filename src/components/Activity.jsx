import React from "react";
import next from "../assets/next.svg";
import { Link } from "react-router-dom";

const Activity = ({ imgSrc, heading, description, onNextClick }) => {
	return (
		<div className="w-[375px] shadow-sm p-4 rounded-b-xl bg-[#FCFCFC] mb-5">
			<div className="flex flex-col px-2 py-4 gap-16">
				<Link
					to={"/signup"}
					className="text-right text-[#9FB2FF] text-lg underline"
					onClick={onNextClick}>
					skip
				</Link>
				<img src={imgSrc} alt="image" />
				<div className="flex flex-col gap-5">
					<h1 className="text-lg font-bold">{heading}</h1>
					<p>{description}</p>
				</div>
				<button onClick={onNextClick} className="flex flex-row-reverse">
					<img src={next} alt="Next" />
				</button>
			</div>
		</div>
	);
};

export default Activity;
