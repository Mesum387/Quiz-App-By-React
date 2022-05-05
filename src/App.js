// Made By Mesum
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questions: 'What does CSS stand for?',
			optionAnswers: [
				{ myanswer: 'Cascading Style Sheet', correctans: true },
				{ myanswer: 'Cascadin Sheet', correctans: false },
				{ myanswer: 'Style Sheet', correctans: false },
				{ myanswer: 'None Of These', correctans: false },
			],
		},
		{
			questions: 'Which HTML tag is used to define an internal style sheet?',
			optionAnswers: [
				{ myanswer: '<css>', correctans: false },
				{ myanswer: '<style>', correctans: true },
				{ myanswer: '<script>', correctans: false },
				{ myanswer: 'None Of These', correctans: false },
			],
		},
		{
			questions: 'Which HTML attribute is used to define inline styles?',
			optionAnswers: [
				{ myanswer: 'font', correctans: false },
				{ myanswer: 'class', correctans: false },
				{ myanswer: 'style', correctans: true },
				{ myanswer: 'None Of These', correctans: false },
			],
		},
		{
			questions: 'Which property is used to change the background color?',
			optionAnswers: [
				{ myanswer: 'color', correctans: false },
				{ myanswer: 'background-color', correctans: true },
				{ myanswer: 'background', correctans: false },
				{ myanswer: 'None Of These', correctans: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (correctans) => {
		if (correctans) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='scoring'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='allques'>
						<div className='questionCounting'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questions}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].optionAnswers.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.correctans)}>{answerOption.myanswer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);}