import React from "react";
import secondImg from "../assets/secondImg.svg";
import Activity from "../components/Activity";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
	const navigate = useNavigate();
	const handleNextClick = () => {
		navigate("/signup");
	};

	return (
		<Activity
			imgSrc={secondImg}
			heading="Get Burn"
			description="Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever"
			onNextClick={handleNextClick}
		/>
	);
};

export default SecondPage;
