import { useRef } from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id='answers'>
            {shuffledAnswers.current.map(answer => {
                const isSeleted = selectedAnswer === answer;
                let cssClass = '';
                if (answerState === 'answered' && isSeleted) {
                    cssClass = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSeleted) {
                    cssClass = answerState;
                }

                return <li className='answer' key={answer}>
                    <button onClick={() => onSelect(answer)} className={cssClass}>
                        {answer}
                    </button>
                </li>
            })}
        </ul>
    );
}