"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ButtonJawaban from './ButtonJawaban';
import { playsoal } from '../constant/index';
import { useRouter } from 'next/navigation';

const PlayQuestion = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [activeAnswers, setActiveAnswers] = useState({
        a: false,
        b: false,
        c: false,
        d: false,
    });
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [isLastQuestion, setIsLastQuestion] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);

    const Nsoal = searchParams.get('Nsoal');
    const results = JSON.parse(Nsoal);



    const getRandomNumbers = (numberOfRandomIds) => {
        const randomNumbers = [];
        const totalData = playsoal.length;

        numberOfRandomIds = Math.min(numberOfRandomIds, totalData);

        while (randomNumbers.length < numberOfRandomIds) {
            const randomNumber = Math.floor(Math.random() * totalData) + 1;
            if (!randomNumbers.includes(randomNumber)) {
                randomNumbers.push(randomNumber);
            }
        }

        return randomNumbers;
    };


    const getCurrentQuestion = () => {
        return questions[currentQuestionIndex] || {};
    };

    useEffect(() => {
        const numberOfRandomIds = results.Nsoal.banyaksoal;
        const newRandomNumbers = getRandomNumbers(numberOfRandomIds);
        setRandomNumbers(newRandomNumbers);

        // Inisialisasi pertanyaan pertama kali
        const initialQuestions = newRandomNumbers.map((randomNumber) =>
            playsoal.find((soal) => soal.id === randomNumber)
        );
        setQuestions(initialQuestions);
    }, [results.Nsoal.banyaksoal]);

    const handleAnswerClick = (answer) => {
        if (!isAnswerSubmitted) {
            setSelectedAnswer(answer);
            setActiveAnswers((prevActiveAnswers) => {
                // Menonaktifkan jawaban yang sudah aktif
                const newActiveAnswers = { a: false, b: false, c: false, d: false };
                newActiveAnswers[answer] = true;
                return newActiveAnswers;
            });
        }
    };

    console.log(randomNumbers)

    const handleAnswerSubmit = () => {
        if (!isAnswerSubmitted && selectedAnswer !== '') {
            console.log("Jawaban yang dipilih:", selectedAnswer);

            // Cek apakah jawaban benar atau salah
            const currentQuestion = getCurrentQuestion();
            const correct = currentQuestion.correct_answer === selectedAnswer;

            setIsAnswerCorrect(correct);
            setCorrectAnswer(currentQuestion.correct_answer);
            setIsAnswerSubmitted(true);

            if (currentQuestionIndex < randomNumbers.length - 1) {
                setIsLastQuestion(false);
            } else {
                setIsLastQuestion(true);
            }
        }
    };

    const handleNextButtonClick = () => {
        if (!isLastQuestion) {
            setIsAnswerSubmitted(false);
            setIsAnswerCorrect(null);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer('');
            setActiveAnswers({ a: false, b: false, c: false, d: false });
        } else {
            router.push('/grammer/question')
        }
    };

    return (
        <div className='Card'>
            <div key={getCurrentQuestion().id} className='flex flex-col w-[90%] text-center'>
                <h1 className='font-light text-[2rem]'>Play Question</h1>
                <p className='mt-[5rem] text-xl font-semibold'>{getCurrentQuestion().soal}</p>
                <div className='flex flex-col w-full mt-[5rem]'>
                    {isAnswerSubmitted && (
                        <div className={isAnswerCorrect ? 'text-green-500' : 'text-red-500'}>
                            {isAnswerCorrect ? 'Jawaban Anda Benar!' : 'Jawaban Anda Salah!'}
                            <br />
                            Jawaban yang Benar: {correctAnswer}
                            <br />
                            Alasan: {getCurrentQuestion().reason}
                        </div>
                    )}
                    {!isAnswerSubmitted && (
                        <>
                            <ButtonJawaban
                                id='a'
                                actives={activeAnswers.a}
                                jawaban={getCurrentQuestion().a}
                                handleClick={() => handleAnswerClick('a')}
                            />
                            <ButtonJawaban
                                id='b'
                                actives={activeAnswers.b}
                                jawaban={getCurrentQuestion().b}
                                handleClick={() => handleAnswerClick('b')}
                            />
                            <ButtonJawaban
                                id='c'
                                actives={activeAnswers.c}
                                jawaban={getCurrentQuestion().c}
                                handleClick={() => handleAnswerClick('c')}
                            />
                            <ButtonJawaban
                                id='d'
                                actives={activeAnswers.d}
                                jawaban={getCurrentQuestion().d}
                                handleClick={() => handleAnswerClick('d')}
                            />
                            <button className='p-[1rem] mt-[2rem] border' onClick={handleAnswerSubmit}>
                                Jawab
                            </button>
                        </>
                    )}
                    {isAnswerSubmitted && (
                        <button className='p-[1rem] mt-[2rem] border' onClick={handleNextButtonClick}>
                            {isLastQuestion ? 'Selesai' : 'Berikutnya'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayQuestion;


