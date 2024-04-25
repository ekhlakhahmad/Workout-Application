import React from "react";
import firstImg from "../assets/firstImg.svg";
import Activity from "../components/Activity";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
	const navigate = useNavigate();
	const handleNextClick = () => {
		navigate("/second");
	};

	return (
		<Activity
			imgSrc={firstImg}
			heading="Track Your Goal"
			description="Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
			onNextClick={handleNextClick}
		/>
	);
};

export default FirstPage;
