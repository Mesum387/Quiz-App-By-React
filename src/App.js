// Made By Mesum
import React, { useState } from 'react';

export default function App() {
	const [abhikaques, setabhikaques] = useState(0);
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

	const [finalscore, setfinalscore] = useState(false);
	
	const answeronclick = (correctans) => {
		if (correctans) {
			setscr(scr + 1);
		}

		const nextQuestion = abhikaques + 1;
		if (nextQuestion < questions.length) {
			setabhikaques(nextQuestion);
		} else {
			setfinalscore(true);
		}
	};
	const [scr, setscr] = useState(0);
	return (
		<div className='app'>
			{finalscore ? (
				<div className='scoring'>
					Your score is {scr} out of {questions.length}
				</div>
			) : (
				<>
					<div className='allques'>
						<div className='questionCounting'>
							<span>Question {abhikaques + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[abhikaques].questions}</div>
					</div>
					<div className='answer-section'>
						{questions[abhikaques].optionAnswers.map((answerOption) => (
							<button onClick={() => answeronclick(answerOption.correctans)}>{answerOption.myanswer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);}