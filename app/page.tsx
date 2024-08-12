"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useMemo } from "react";
import { QUESTIONS } from "@/lib/questions";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Chart } from "@/components/chart";
import { CheckIcon, XIcon } from "lucide-react";

export interface Question {
  question: string;
  answers: Answer[];
  correctAnswer: Answer;
  didAnswer: Answer | null;
  timeAnswer?: number;
}

export interface Answer {
  answer: string;
  isCorrect: boolean;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 1, x: "-2%" },
};
export default function Home() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [countDownNumber, setCountDownNumber] = useState<number>(30);
  const [isWelcome, setWelcome] = useState<boolean>(true);
  const [isTimesUp, setTimesUp] = useState<boolean>(false);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    const QUESTIONS_RANDOM = QUESTIONS.sort(() => Math.random() - 0.5);

    setQuestions(QUESTIONS_RANDOM);
  }, []);

  const onNextQuestion = useCallback(() => {
    if (questionNumber + 1 < questions.length) {
      setPlaying(true);
      setQuestionNumber((prev) => prev + 1);
      // setCountDownNumber(30);
    } else {
      setPlaying(false);
    }
  }, [questionNumber, questions.length]);

  useEffect(() => {
    let start = Date.now();
    // if (!isPlaying || questions[questionNumber]?.didAnswer) return; // Stop timer if question is answered
    const interval = setInterval(() => {
      // if (!isPlaying || questions[questionNumber]?.didAnswer) return; // Stop timer if question is answered
      const elapsed = Date.now() - start;
      if (elapsed >= 1000) {
        if (countDownNumber === 0) {
          setPlaying(false);
          setTimesUp(true);
        } else {
          setCountDownNumber((prev) => prev - 1);
        }
        start = Date.now();
      }
    }, 0);
    return () => clearInterval(interval);
  }, [countDownNumber]);

  const tryOnMoreTime = () => {
    setPlaying(true);
    setTimesUp(false);
    setQuestionNumber(0);
    setCountDownNumber(30);
    setQuestions(QUESTIONS.sort(() => Math.random() - 0.5));
    setWelcome(false);
  };

  const onAnswer = (answer: Answer) => {
    if (questions[questionNumber]?.didAnswer || !isPlaying || isTimesUp) return;
    setPlaying(false);
    setQuestions((prev) => {
      const newQuestions = [...prev];
      newQuestions[questionNumber].timeAnswer = countDownNumber;
      newQuestions[questionNumber].didAnswer = answer;
      return newQuestions;
    });
  };

  const onGetCorrectAnswers = () => {
    return questions.filter((q) => q.didAnswer && q.didAnswer.isCorrect).length;
  };

  const onGetIncorrectAnswers = () => {
    return questions.filter((q) => q.didAnswer && !q.didAnswer.isCorrect)
      .length;
  };

  const getChartData = () => {
    const correctAnswers = questions.filter(
      (q) => q.didAnswer && q.didAnswer.isCorrect
    );
    const groupedAnswers = Array(11).fill(0);

    correctAnswers.forEach((q) => {
      const timeIndex = q.timeAnswer!;
      groupedAnswers[timeIndex]++;
    });

    const incorrectAnswers = questions.filter(
      (q) => q.didAnswer && !q.didAnswer.isCorrect
    );
    const groupedInAnswers = Array(11).fill(0);

    incorrectAnswers.forEach((q) => {
      const timeIndex = q.timeAnswer!;
      groupedInAnswers[timeIndex]++;
    });

    const chartData = [
      { date: "0", correct: groupedAnswers[0], incorrect: groupedInAnswers[0] },
      { date: "1", correct: groupedAnswers[1], incorrect: groupedInAnswers[1] },
      { date: "2", correct: groupedAnswers[2], incorrect: groupedInAnswers[2] },
      { date: "3", correct: groupedAnswers[3], incorrect: groupedInAnswers[3] },
      { date: "4", correct: groupedAnswers[4], incorrect: groupedInAnswers[4] },
      { date: "5", correct: groupedAnswers[5], incorrect: groupedInAnswers[5] },
      { date: "6", correct: groupedAnswers[6], incorrect: groupedInAnswers[6] },
      { date: "7", correct: groupedAnswers[7], incorrect: groupedInAnswers[7] },
      { date: "8", correct: groupedAnswers[8], incorrect: groupedInAnswers[8] },
      { date: "9", correct: groupedAnswers[9], incorrect: groupedInAnswers[9] },
      {
        date: "10",
        correct: groupedAnswers[10],
        incorrect: groupedInAnswers[10],
      },
    ];
    return chartData;
  };

  const onShareLinkToGame = () => {
    //Copy to clipboard
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        console.log("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <main className="flex bg-background min-h-screen flex-col items-center justify-center p-4">
      <div className="fixed left-2 top-2">
        <ModeToggle />
      </div>
      {isWelcome && (
        <div
          className="absolute z-10  left-0 right-0 top-0 bottom-0 bg-muted/50 backdrop-blur-sm flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[360px] bg-zinc-200 dark:bg-accent rounded-xl p-6 flex flex-col gap-2">
            <h1 className="text-2xl">Tailwind expert?</h1>
            <p className="opacity-70 mb-6">
              Take my quiz about Tailwind classes and see how many correct
              answers you can get within 30 seconds.
            </p>
            <Button onClick={tryOnMoreTime}>Start game</Button>
            <Button variant="ghost" onClick={onShareLinkToGame}>
              Share link to game
            </Button>
          </div>
        </div>
      )}
      {isTimesUp && (
        <div
          className="absolute z-10  left-0 right-0 top-0 bottom-0 bg-muted/50 backdrop-blur-sm flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className=" bg-zinc-100 border flex-row dark:bg-accent rounded-xl p-6 flex gap-2">
            <div className="w-[360px] border-r p-6 flex flex-col gap-2">
              <h1 className="text-2xl">Tailwind expert?</h1>
              <p className="opacity-70">Let{"'"}s take a look at your scores</p>
              <div className="flex justify-center flex-col items-center h-52">
                <span className="text-emerald-500 font-medium leading-none text-[140px]">
                  {onGetCorrectAnswers()}
                </span>
                <span className="text-emerald-500/80 font-medium text-base">
                  correct
                </span>
              </div>
              <div className="text-center mb-8">
                ...and{" "}
                <span className="text-rose-500">
                  {onGetIncorrectAnswers()} incorrect
                </span>
              </div>
              <Button onClick={tryOnMoreTime}>Try one more time</Button>
              <Button variant="ghost" onClick={onShareLinkToGame}>
                Share link to game
              </Button>
            </div>
            <div className="h-full  pl-6  max-w-[360px] gap-8 flex flex-col max-h-[480px] overflow-y-auto">
              <p className="text-zinc-400 pt-6">Questions answered</p>
              {questions
                .filter((q) => q.didAnswer && q.didAnswer.answer)
                .map((q, index) => (
                  <div
                    key={index}
                    className="flex  flex-row gap-4 justify-start items-start"
                  >
                    <div className="w-6 shrink-0 grow-0 pt-1">
                      {q.didAnswer?.isCorrect ? (
                        <CheckIcon className="h-4 w-4 text-emerald-500" />
                      ) : (
                        <XIcon className="w-4 h-4 text-rose-500" />
                      )}
                    </div>
                    <div className="flex pr-6 flex-col justify-start items-start">
                      <span className="text-zinc-950 dark:text-white">
                        {q.question}
                      </span>
                      <div className="flex flex-row justify-between w-full">
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {q.didAnswer?.answer}
                        </span>

                        <span
                          className={cn(
                            "",
                            q.didAnswer?.isCorrect
                              ? "text-emerald-500"
                              : "text-rose-500"
                          )}
                        >
                          {q.didAnswer?.isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {q.correctAnswer?.answer}
                        </span>

                        <span className="text-emerald-500">
                          {q.correctAnswer?.isCorrect ? "Correct" : "Incorrect"}{" "}
                          answer
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-[400px]">
        {/* <Chart chartData={getChartData()} /> */}

        <span className="flex mb-4 flex-row justify-between items-center">
          <span className="dark:text-zinc-400 text-zinc-600 text-sm">
            Get as many answers
            <br /> as possible before{" "}
            <span
              className={cn(
                countDownNumber == 1 || countDownNumber == 0
                  ? "text-red-500"
                  : countDownNumber == 2
                  ? "text-orange-500"
                  : countDownNumber == 3
                  ? "text-yellow-500"
                  : "dark:text-white",
                "font-bold"
              )}
            >
              {countDownNumber}
            </span>
            s
          </span>
          <div className="font-medium text-sm text-zinc-400 dark:text-zinc-500">
            <span className="text-emerald-500">
              {onGetCorrectAnswers()} correct
            </span>{" "}
            <br />
            <span className="text-rose-500">
              {onGetIncorrectAnswers()} incorrect
            </span>
          </div>
        </span>

        <Card className="w-full relative">
          <CardHeader>
            <div className="w-full border-b pb-4">
              <span className="flex flex-row justify-between items-center">
                <span className="font-normal text-lt text-zinc-600 dark:text-zinc-400">
                  Question {questionNumber + 1}
                </span>
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="min-h-40 mb-8 text-4xl">
              {questions[questionNumber]?.question}
            </p>

            {questions[questionNumber]?.answers.map((answer, index) => (
              <div className="flex items-center gap-4" key={index}>
                <span className="text-xs w-4 text-zinc-400">{index}</span>
                <Button
                  onClick={() => onAnswer(answer)}
                  variant="secondary"
                  className={cn(
                    questions[questionNumber].didAnswer
                      ? answer.answer ===
                        questions[questionNumber].didAnswer.answer
                        ? questions[questionNumber].didAnswer.isCorrect
                          ? "!bg-green-500/10 text-green-500 !border-green-500 !opacity-100 scale-105"
                          : "!bg-rose-500/10 text-rose-500 !border-rose-500 !opacity-100 scale-105"
                        : ""
                      : "",
                    !isPlaying
                      ? answer.isCorrect
                        ? "border-green-500 !bg-green-500/10 !text-green-500"
                        : ""
                      : "",
                    "text-left flex-1 hover:opacity-50 border transition-all flex flex-row justify-between items-center"
                  )}
                >
                  {answer.answer}
                  {answer.isCorrect &&
                    answer.answer ===
                      questions[questionNumber].didAnswer?.answer && (
                      <CheckIcon className="h-4 w-4" />
                    )}
                </Button>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              onClick={() => onNextQuestion()}
              disabled={isTimesUp || isPlaying}
            >
              Next question
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
