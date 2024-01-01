"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ButtonJawaban from './ButtonJawaban';
import { easySoal, mediumSoal, hardSoal, nightmareSoal } from '../constant/index';
import { useRouter } from 'next/navigation';
import { FaArrowRightLong } from "react-icons/fa6";

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
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [soal, setSoal] = useState();

    const Nsoal = searchParams.get('Nsoal');
    const results = JSON.parse(Nsoal);

    const Katagori = searchParams.get('Katagori')
    const tingkatan = JSON.parse(Katagori)

    const getCategoryData = (category) => {
        switch (category) {
            case 1:
                return { data: easySoal, nama: "Easy Mode" };
            case 2:
                return { data: mediumSoal, nama: "Medium Mode" };
            case 3:
                return { data: hardSoal, nama: "Hard Mode" };
            case 4:
                return { data: nightmareSoal, nama: "nightMare Mode" };
            default:
                return [];
        }
    };

    const getRandomNumbers = (numberOfRandomIds) => {
        const randomNumbers = [];
        const totalData = 30;

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
            getCategoryData(tingkatan.Katagori.tingkat).data.find((soal) => soal.id === randomNumber),
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

    const handleAnswerSubmit = () => {
        if (!isAnswerSubmitted && selectedAnswer !== '') {
            console.log("Jawaban yang dipilih:", selectedAnswer);

            // Cek apakah jawaban benar atau salah
            const currentQuestion = getCurrentQuestion();
            const correct = currentQuestion.correct_answer === selectedAnswer;

            setIsAnswerCorrect(correct);
            setCorrectAnswer(currentQuestion.correct_answer);
            setIsAnswerSubmitted(true);

            // Perbarui statistik jawaban benar atau salah
            if (correct) {
                setCorrectCount((count) => count + 1);
            } else {
                setIncorrectCount((count) => count + 1);
            }
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
        <div className='relative w-full min-h-screen linear-grammer text-white'>
            <div className='Card'>
                {isLastQuestion ?
                    <div className='flex flex-col '>
                        <p>Jumlah Benar : {correctCount}</p>
                        <p>Jumlah Salah : {incorrectCount}</p>
                        {isAnswerSubmitted && (
                            <button className='p-[1rem] mt-[2rem]  rounded-md h-[4rem]  hover:border-0 hover:transition-all hover:duration-500 hover:ease-in-out transition-all ease-out duration-500 hover:shadow-lg hover:shadow-lime-200  bg-lime-400' onClick={handleNextButtonClick}>
                                {isLastQuestion ? 'Selesai' : 'Berikutnya'}
                            </button>
                        )}
                    </div>
                    :
                    <div key={getCurrentQuestion().id} className='flex flex-col  w-[90%] text-center'>
                        <h1 className='font-normal text-[2rem] '>Play Question</h1>
                        <p className='font-extralight'>{getCategoryData(tingkatan.Katagori.tingkat).nama}</p>
                        <p className='mt-[3rem] text-xl font-medium'>{getCurrentQuestion().soal}</p>
                        <div className='flex flex-col w-full mt-[2rem]'>
                            {isAnswerSubmitted && (
                                <div className={isAnswerCorrect ? 'bg-lime-300/10 shadow-lg rounded-lg py-10 flex flex-col text-start gap-5 px-10 text-lime-300' : 'bg-lime-300/10 shadow-lg rounded-lg py-10 flex flex-col text-start gap-5 px-10 text-red-600'}>
                                    {isAnswerCorrect ? <p className='font-semibold text-[30px] '>Jawaban Anda Benar!</p> : <div><p className='font-semibold text-[30px] '>Jawaban Anda Salah!</p>  <p className='text-lime-200'> Jawaban yang Benar : {correctAnswer}</p></div>}
                                    <div className='flex flex-col text-white font-light text-start'>
                                        <p>Alasan : {getCurrentQuestion().reason}</p>
                                    </div>
                                </div>
                            )}
                            {!isAnswerSubmitted && (
                                <div className='flex flex-col gap-[4px]'>
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
                                    <button className='flex mt-5  items-center justify-center w-full rounded-md h-[4rem]  hover:border-0 hover:transition-all hover:duration-500 hover:ease-in-out transition-all ease-out duration-500 hover:shadow-lg hover:shadow-lime-200  bg-lime-400' onClick={handleAnswerSubmit}>
                                        <h1 className='text-white text-[1rem] md:text-[1.5rem] font-medium'>Answer</h1>
                                    </button>
                                </div>
                            )}

                        </div>
                        {isAnswerSubmitted && (
                            <button className='p-[1rem] mt-[2rem]  rounded-md h-[4rem]  hover:border-0 hover:transition-all hover:duration-500 hover:ease-in-out transition-all ease-out duration-500 hover:shadow-lg hover:shadow-lime-200  bg-lime-400' onClick={handleNextButtonClick}>
                                {isLastQuestion ? 'Selesai' : 'Berikutnya'}
                            </button>
                        )}
                    </div>}
            </div>
        </div >
    );
};

export default PlayQuestion;


