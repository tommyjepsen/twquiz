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
import { CheckIcon } from "lucide-react";

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
  const [countDownNumber, setCountDownNumber] = useState<number>(10);
  const [isPlaying, setPlaying] = useState<boolean>(true);

  useEffect(() => {
    const QUESTIONS_RANDOM = QUESTIONS.sort(() => Math.random() - 0.5);

    setQuestions(QUESTIONS_RANDOM);
  }, []);

  const onNextQuestion = useCallback(() => {
    if (questionNumber + 1 < questions.length) {
      setPlaying(true);
      setQuestionNumber((prev) => prev + 1);
      setCountDownNumber(10);
    } else {
      setPlaying(false);
    }
  }, [questionNumber, questions.length]);

  useEffect(() => {
    let start = Date.now();
    if (!isPlaying || questions[questionNumber]?.didAnswer) return; // Stop timer if question is answered
    const interval = setInterval(() => {
      if (!isPlaying || questions[questionNumber]?.didAnswer) return; // Stop timer if question is answered
      const elapsed = Date.now() - start;
      if (elapsed >= 1000) {
        if (countDownNumber === 0) {
          setPlaying(false);
        } else {
          setCountDownNumber((prev) => prev - 1);
        }
        start = Date.now();
      }
    }, 0);
    return () => clearInterval(interval);
  }, [countDownNumber, isPlaying, questionNumber, questions, onNextQuestion]);

  const onAnswer = (answer: Answer) => {
    if (questions[questionNumber]?.didAnswer || !isPlaying) return;
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

  return (
    <main className="flex bg-background min-h-screen flex-col items-center justify-center p-4">
      <div className="fixed left-2 top-2">
        <ModeToggle />
      </div>
      <div className="w-full max-w-[400px]">
        {/* <Chart chartData={getChartData()} /> */}

        <Card className="w-full">
          <CardHeader>
            <div className="w-full border-b pb-6">
              <span className="flex flex-row justify-between items-center">
                <span className="font-normal text-[18px] text-zinc-600 dark:text-zinc-400">
                  Question {questionNumber + 1}
                </span>
                <div className="font-medium text-sm text-zinc-400 dark:text-zinc-500">
                  <span className="text-emerald-500">
                    {onGetCorrectAnswers()}
                  </span>{" "}
                  correct
                  {"  "}
                  <span className="text-rose-500">
                    {onGetIncorrectAnswers()}{" "}
                  </span>
                  incorrect
                </div>
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <span className="text-zinc-400 text-sm">
              Get your answer in before{" "}
              <span
                className={cn(
                  countDownNumber == 1 || countDownNumber == 0
                    ? "text-red-500"
                    : countDownNumber == 2
                    ? "text-orange-500"
                    : countDownNumber == 3
                    ? "text-yellow-500"
                    : "",
                  "font-bold"
                )}
              >
                {countDownNumber}
              </span>
              s
            </span>
            <p className="min-h-52 text-4xl">
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
            <Button onClick={() => onNextQuestion()} disabled={isPlaying}>
              Next question
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
