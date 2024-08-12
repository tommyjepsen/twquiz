import { Question } from "@/app/page";

export const QUESTIONS: Question[] = [
  {
    question: "How many pixels height is `h-36`?",
    answers: [
      { answer: "140px", isCorrect: false },
      { answer: "148px", isCorrect: false },
      { answer: "144px", isCorrect: true },
      { answer: "142px", isCorrect: false },
    ],
    correctAnswer: { answer: "144px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How many pixels height is `h-48`?",
    answers: [
      { answer: "192px", isCorrect: true },
      { answer: "184px", isCorrect: false },
      { answer: "180px", isCorrect: false },
      { answer: "188px", isCorrect: false },
    ],
    correctAnswer: { answer: "192px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the height in pixels of the class `h-64`?",
    answers: [
      { answer: "256px", isCorrect: true },
      { answer: "240px", isCorrect: false },
      { answer: "232px", isCorrect: false },
      { answer: "248px", isCorrect: false },
    ],
    correctAnswer: { answer: "256px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How tall is an element with the `h-12` class?",
    answers: [
      { answer: "48px", isCorrect: true },
      { answer: "40px", isCorrect: false },
      { answer: "44px", isCorrect: false },
      { answer: "42px", isCorrect: false },
    ],
    correctAnswer: { answer: "48px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the height in pixels of `h-20`?",
    answers: [
      { answer: "80px", isCorrect: true },
      { answer: "72px", isCorrect: false },
      { answer: "76px", isCorrect: false },
      { answer: "84px", isCorrect: false },
    ],
    correctAnswer: { answer: "80px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which height class corresponds to 32 pixels?",
    answers: [
      { answer: "h-8", isCorrect: true },
      { answer: "h-10", isCorrect: false },
      { answer: "h-12", isCorrect: false },
      { answer: "h-6", isCorrect: false },
    ],
    correctAnswer: { answer: "h-8", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the pixel height of the `h-96` class?",
    answers: [
      { answer: "384px", isCorrect: true },
      { answer: "368px", isCorrect: false },
      { answer: "376px", isCorrect: false },
      { answer: "392px", isCorrect: false },
    ],
    correctAnswer: { answer: "384px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How many pixels is the height of `h-72`?",
    answers: [
      { answer: "288px", isCorrect: true },
      { answer: "272px", isCorrect: false },
      { answer: "280px", isCorrect: false },
      { answer: "296px", isCorrect: false },
    ],
    correctAnswer: { answer: "288px", isCorrect: true },
    didAnswer: null,
  },

  {
    question: "Which class gives an element a height of 56 pixels?",
    answers: [
      { answer: "h-14", isCorrect: true },
      { answer: "h-16", isCorrect: false },
      { answer: "h-12", isCorrect: false },
      { answer: "h-10", isCorrect: false },
    ],
    correctAnswer: { answer: "h-14", isCorrect: true },
    didAnswer: null,
  },

  {
    question: "What height in pixels does `h-28` represent?",
    answers: [
      { answer: "112px", isCorrect: true },
      { answer: "104px", isCorrect: false },
      { answer: "116px", isCorrect: false },
      { answer: "108px", isCorrect: false },
    ],
    correctAnswer: { answer: "112px", isCorrect: true },
    didAnswer: null,
  },

  {
    question: "How many pixels is the height for the `h-80` class?",
    answers: [
      { answer: "320px", isCorrect: true },
      { answer: "304px", isCorrect: false },
      { answer: "312px", isCorrect: false },
      { answer: "328px", isCorrect: false },
    ],
    correctAnswer: { answer: "320px", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class is used to break a word mid-line?",
    answers: [
      { answer: "word-break", isCorrect: false },
      { answer: "break-all", isCorrect: false },
      { answer: "break-words", isCorrect: true },
      { answer: "word-wrap", isCorrect: false },
    ],
    correctAnswer: { answer: "break-words", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which utility class will set the line-height to 1?",
    answers: [
      { answer: "leading-none", isCorrect: true },
      { answer: "leading-tight", isCorrect: false },
      { answer: "leading-snug", isCorrect: false },
      { answer: "leading-loose", isCorrect: false },
    ],
    correctAnswer: { answer: "leading-none", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies the default line-height?",
    answers: [
      { answer: "leading-normal", isCorrect: true },
      { answer: "leading-default", isCorrect: false },
      { answer: "leading-base", isCorrect: false },
      { answer: "leading-regular", isCorrect: false },
    ],
    correctAnswer: { answer: "leading-normal", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What class would you use for a line-height of 1.25?",
    answers: [
      { answer: "leading-tight", isCorrect: true },
      { answer: "leading-snug", isCorrect: false },
      { answer: "leading-normal", isCorrect: false },
      { answer: "leading-relaxed", isCorrect: false },
    ],
    correctAnswer: { answer: "leading-tight", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets the line-height to 2?",
    answers: [
      { answer: "leading-loose", isCorrect: true },
      { answer: "leading-wide", isCorrect: false },
      { answer: "leading-relaxed", isCorrect: false },
      { answer: "leading-double", isCorrect: false },
    ],
    correctAnswer: { answer: "leading-loose", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the font size applied by the 'text-xl' class?",
    answers: [
      { answer: "1.25rem (20px)", isCorrect: true },
      { answer: "1.5rem (24px)", isCorrect: false },
      { answer: "1rem (16px)", isCorrect: false },
      { answer: "1.75rem (28px)", isCorrect: false },
    ],
    correctAnswer: { answer: "1.25rem (20px)", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies a border radius of 0.5rem (8px)?",
    answers: [
      { answer: "rounded-md", isCorrect: true },
      { answer: "rounded-sm", isCorrect: false },
      { answer: "rounded-lg", isCorrect: false },
      { answer: "rounded", isCorrect: false },
    ],
    correctAnswer: { answer: "rounded-md", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class removes the border?",
    answers: [
      { answer: "border-none", isCorrect: true },
      { answer: "border-hidden", isCorrect: false },
      { answer: "border-solid", isCorrect: false },
      { answer: "border-clear", isCorrect: false },
    ],
    correctAnswer: { answer: "border-none", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets the outline offset to 2px?",
    answers: [
      { answer: "outline-offset-2", isCorrect: true },
      { answer: "outline-offset-1", isCorrect: false },
      { answer: "outline-offset-sm", isCorrect: false },
      { answer: "outline-offset-xs", isCorrect: false },
    ],
    correctAnswer: { answer: "outline-offset-2", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets the outline offset to 4px?",
    answers: [
      { answer: "outline-offset-4", isCorrect: true },
      { answer: "outline-offset-md", isCorrect: false },
      { answer: "outline-offset-2", isCorrect: false },
      { answer: "outline-offset-lg", isCorrect: false },
    ],
    correctAnswer: { answer: "outline-offset-4", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class removes all border radius?",
    answers: [
      { answer: "rounded-none", isCorrect: true },
      { answer: "rounded-zero", isCorrect: false },
      { answer: "rounded-sm", isCorrect: false },
      { answer: "rounded-clear", isCorrect: false },
    ],
    correctAnswer: { answer: "rounded-none", isCorrect: true },
    didAnswer: null,
  },
  {
    question:
      "Which class will allow words to break and add hyphens where needed?",
    answers: [
      { answer: "hyphens-auto", isCorrect: true },
      { answer: "hyphens-manual", isCorrect: false },
      { answer: "hyphens-break", isCorrect: false },
      { answer: "hyphens-none", isCorrect: false },
    ],
    correctAnswer: { answer: "hyphens-auto", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the effect of the 'hyphens-none' class?",
    answers: [
      { answer: "Prevents hyphenation of words", isCorrect: true },
      { answer: "Allows hyphenation only at manual breaks", isCorrect: false },
      {
        answer: "Forces hyphenation at all possible breakpoints",
        isCorrect: false,
      },
      { answer: "Adds hyphens to all words", isCorrect: false },
    ],
    correctAnswer: { answer: "Prevents hyphenation of words", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies a letter-spacing of 0.05em?",
    answers: [
      { answer: "tracking-wider", isCorrect: true },
      { answer: "tracking-wide", isCorrect: false },
      { answer: "tracking-tighter", isCorrect: false },
      { answer: "tracking-tight", isCorrect: false },
    ],
    correctAnswer: { answer: "tracking-wider", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What class would you use for a letter-spacing of -0.05em?",
    answers: [
      { answer: "tracking-tight", isCorrect: true },
      { answer: "tracking-tighter", isCorrect: false },
      { answer: "tracking-normal", isCorrect: false },
      { answer: "tracking-narrow", isCorrect: false },
    ],
    correctAnswer: { answer: "tracking-tight", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What does the class 'leading-snug' do?",
    answers: [
      { answer: "Sets line-height to 1.375", isCorrect: true },
      { answer: "Sets line-height to 1.5", isCorrect: false },
      { answer: "Sets line-height to 1.25", isCorrect: false },
      { answer: "Sets line-height to 1.75", isCorrect: false },
    ],
    correctAnswer: { answer: "Sets line-height to 1.375", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the line-height applied by 'leading-none'?",
    answers: [
      { answer: "line-height: 1", isCorrect: true },
      { answer: "line-height: 0", isCorrect: false },
      { answer: "line-height: 1.25", isCorrect: false },
      { answer: "line-height: 1.5", isCorrect: false },
    ],
    correctAnswer: { answer: "line-height: 1", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets an element's margin to 1rem?",
    answers: [
      { answer: "m-16", isCorrect: false },
      { answer: "m-8", isCorrect: false },
      { answer: "m-4", isCorrect: true },
      { answer: "m-2", isCorrect: false },
    ],
    correctAnswer: { answer: "m-4", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class is used for setting the width to full?",
    answers: [
      { answer: "w-100", isCorrect: false },
      { answer: "w-complete", isCorrect: false },
      { answer: "w-total", isCorrect: false },
      { answer: "w-full", isCorrect: true },
    ],
    correctAnswer: { answer: "w-full", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class makes the text bold?",
    answers: [
      { answer: "font-heavy", isCorrect: false },
      { answer: "font-strong", isCorrect: false },
      { answer: "font-thick", isCorrect: false },
      { answer: "font-bold", isCorrect: true },
    ],
    correctAnswer: { answer: "font-bold", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you apply a rounded border of 0.25rem?",
    answers: [
      { answer: "rounded-4", isCorrect: false },
      { answer: "rounded-quarter", isCorrect: false },
      { answer: "rounded-md", isCorrect: true },
      { answer: "rounded-0.25", isCorrect: false },
    ],
    correctAnswer: { answer: "rounded-md", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What class adds a medium shadow effect?",
    answers: [
      { answer: "s-md", isCorrect: false },
      { answer: "shadow-md", isCorrect: true },
      { answer: "shadow-medium", isCorrect: false },
      { answer: "shadow-normal", isCorrect: false },
    ],
    correctAnswer: { answer: "shadow-md", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class adds an underline to text?",
    answers: [
      { answer: "text-underline", isCorrect: false },
      { answer: "decoration-under", isCorrect: false },
      { answer: "underline", isCorrect: true },
      { answer: "text-line-bottom", isCorrect: false },
    ],
    correctAnswer: { answer: "underline", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class makes an element's width 50% of its parent?",
    answers: [
      { answer: "w-50", isCorrect: false },
      { answer: "w-50%", isCorrect: false },
      { answer: "w-1/2", isCorrect: true },
      { answer: "w-half", isCorrect: false },
    ],
    correctAnswer: { answer: "w-1/2", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you apply a max-width of 768px?",
    answers: [
      { answer: "max-w-768", isCorrect: false },
      { answer: "max-w-medium", isCorrect: false },
      { answer: "max-w-lg", isCorrect: true },
      { answer: "max-w-tablet", isCorrect: false },
    ],
    correctAnswer: { answer: "max-w-lg", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you set a line-height of 1.5?",
    answers: [
      { answer: "leading-relaxed", isCorrect: true },
      { answer: "leading-tight", isCorrect: false },
      { answer: "line-height-1.5", isCorrect: false },
      { answer: "lh-1.5", isCorrect: false },
    ],
    correctAnswer: { answer: "leading-relaxed", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets the border spacing to 4px?",
    answers: [
      { answer: "border-spacing-1", isCorrect: true },
      { answer: "border-spacing-2", isCorrect: false },
      { answer: "border-spacing-xs", isCorrect: false },
      { answer: "border-spacing-sm", isCorrect: false },
    ],
    correctAnswer: { answer: "border-spacing-1", isCorrect: true },
    didAnswer: null,
  },

  {
    question:
      "Which class would you use to shrink an element to half its original size?",
    answers: [
      { answer: "scale-50", isCorrect: true },
      { answer: "scale-75", isCorrect: false },
      { answer: "scale-100", isCorrect: false },
      { answer: "scale-25", isCorrect: false },
    ],
    correctAnswer: { answer: "scale-50", isCorrect: true },
    didAnswer: null,
  },
  {
    question:
      "Which class would you use to apply 16px vertical and 8px horizontal border spacing?",
    answers: [
      { answer: "border-spacing-y-4 border-spacing-x-2", isCorrect: false },
      { answer: "border-spacing-4-2", isCorrect: false },
      { answer: "border-spacing-y-4 border-spacing-x-1", isCorrect: false },
      { answer: "border-spacing-y-4 border-spacing-x-2", isCorrect: true },
    ],
    correctAnswer: {
      answer: "border-spacing-y-4 border-spacing-x-2",
      isCorrect: true,
    },
    didAnswer: null,
  },
  {
    question: "How do you apply horizontal padding of 2rem?",
    answers: [
      { answer: "p-x-8", isCorrect: false },
      { answer: "padding-x-2", isCorrect: false },
      { answer: "px-8", isCorrect: true },
      { answer: "ph-2", isCorrect: false },
    ],
    correctAnswer: { answer: "px-8", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class is used for uppercase text?",
    answers: [
      { answer: "text-upper", isCorrect: false },
      { answer: "caps", isCorrect: false },
      { answer: "uppercase", isCorrect: true },
      { answer: "all-caps", isCorrect: false },
    ],
    correctAnswer: { answer: "uppercase", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you apply a border of 2px?",
    answers: [
      { answer: "border-width-2", isCorrect: false },
      { answer: "border-2px", isCorrect: false },
      { answer: "border-2", isCorrect: true },
      { answer: "b-2", isCorrect: false },
    ],
    correctAnswer: { answer: "border-2", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies a red background?",
    answers: [
      { answer: "bg-red-default", isCorrect: false },
      { answer: "bg-red-medium", isCorrect: false },
      { answer: "bg-red-500", isCorrect: true },
      { answer: "background-red", isCorrect: false },
    ],
    correctAnswer: { answer: "bg-red-500", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you make text unselectable?",
    answers: [
      { answer: "no-select", isCorrect: false },
      { answer: "select-none", isCorrect: true },
      { answer: "unselectable", isCorrect: false },
      { answer: "prevent-select", isCorrect: false },
    ],
    correctAnswer: { answer: "select-none", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies 100% height?",
    answers: [
      { answer: "height-full", isCorrect: false },
      { answer: "h-100%", isCorrect: false },
      { answer: "h-full", isCorrect: true },
      { answer: "height-100", isCorrect: false },
    ],
    correctAnswer: { answer: "h-full", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies 100% width?",
    answers: [
      { answer: "width-full", isCorrect: false },
      { answer: "w-100%", isCorrect: false },
      { answer: "width-100", isCorrect: false },
      { answer: "w-full", isCorrect: true },
    ],
    correctAnswer: { answer: "w-full", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets an element to flex display?",
    answers: [
      { answer: "display-flex", isCorrect: false },
      { answer: "d-flex", isCorrect: false },
      { answer: "flex", isCorrect: true },
      { answer: "flexbox", isCorrect: false },
    ],
    correctAnswer: { answer: "flex", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What is the default display behavior of `hidden`?",
    answers: [
      { answer: "visibility: collapse;", isCorrect: false },
      { answer: "opacity: 0; visibility: hidden;", isCorrect: false },
      { answer: "display: none;", isCorrect: true },
      { answer: "position: absolute; left: -9999px;", isCorrect: false },
    ],
    correctAnswer: { answer: "display: none;", isCorrect: true },
    didAnswer: null,
  },
  {
    question:
      "Which utility class should be used to allow pinch-zoom and pan gestures in all directions?",
    answers: [
      { answer: "touch-manipulation", isCorrect: false },
      { answer: "touch-auto", isCorrect: true },
      { answer: "touch-pinch-zoom", isCorrect: false },
      { answer: "touch-pan-x touch-pan-y", isCorrect: false },
    ],
    correctAnswer: { answer: "touch-auto", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you apply padding on all sides of 1.5rem?",
    answers: [
      { answer: "p-1.5", isCorrect: false },
      { answer: "padding-6", isCorrect: false },
      { answer: "p-6", isCorrect: true },
      { answer: "p-24", isCorrect: false },
    ],
    correctAnswer: { answer: "p-6", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class applies a white text color?",
    answers: [
      { answer: "color-white", isCorrect: false },
      { answer: "text-#fff", isCorrect: false },
      { answer: "text-white", isCorrect: true },
      { answer: "font-color-white", isCorrect: false },
    ],
    correctAnswer: { answer: "text-white", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What does `bg-opacity-50` do?",
    answers: [
      { answer: "Sets element opacity to 50%", isCorrect: false },
      { answer: "Sets background opacity to 50%", isCorrect: true },
      { answer: "Applies a 50% transparent overlay", isCorrect: false },
      { answer: "Reduces color intensity by 50%", isCorrect: false },
    ],
    correctAnswer: {
      answer: "Sets background opacity to 50%",
      isCorrect: true,
    },
    didAnswer: null,
  },
  {
    question: "How do you add a gap of 1rem between flex items?",
    answers: [
      { answer: "x-4", isCorrect: false },
      { answer: "flex-gap-4", isCorrect: false },
      { answer: "gap-4", isCorrect: true },
      { answer: "item-spacing-4", isCorrect: false },
    ],
    correctAnswer: { answer: "gap-4", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class sets a max-height of 16rem?",
    answers: [
      { answer: "mh-64", isCorrect: false },
      { answer: "max-height-16", isCorrect: false },
      { answer: "max-h-64", isCorrect: true },
      { answer: "height-max-16", isCorrect: false },
    ],
    correctAnswer: { answer: "max-h-64", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What does `rounded-full` do?",
    answers: [
      { answer: "Applies maximum border-radius", isCorrect: true },
      { answer: "Creates a circular svg shape", isCorrect: false },
      { answer: "Rounds all corners to 9px", isCorrect: false },
      { answer: "Makes elements square", isCorrect: false },
    ],
    correctAnswer: {
      answer: "Applies maximum border-radius",
      isCorrect: true,
    },
    didAnswer: null,
  },

  {
    question: "How do you apply rounded corners on the top side only?",
    answers: [
      { answer: "r-top", isCorrect: true },
      { answer: "rounded-t-md", isCorrect: false },
      { answer: "rounded-top-md", isCorrect: false },
      { answer: "rounded-md", isCorrect: false },
    ],
    correctAnswer: { answer: "rounded-t", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "Which class adds a black border?",
    answers: [
      { answer: "border-black", isCorrect: true },
      { answer: "border-fuchsia-900", isCorrect: false },
      { answer: "border-heavy", isCorrect: false },
      { answer: "border-dark", isCorrect: false },
    ],
    correctAnswer: { answer: "border-black", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "How do you apply a blur effect of 4px?",
    answers: [
      { answer: "blur-sm", isCorrect: true },
      { answer: "blur-md", isCorrect: false },
      { answer: "blur-lg", isCorrect: false },
      { answer: "blur-none", isCorrect: false },
    ],
    correctAnswer: { answer: "blur-sm", isCorrect: true },
    didAnswer: null,
  },
  {
    question: "What does `text-stone-500` apply?",
    answers: [
      { answer: "Applies a red-ish text color", isCorrect: true },
      { answer: "Applies a brown-ish text color", isCorrect: false },
      { answer: "Applies a gray-ish text color", isCorrect: false },
      { answer: "Applies a black text color", isCorrect: false },
    ],
    correctAnswer: {
      answer: "Applies a medium-gray text color",
      isCorrect: true,
    },
    didAnswer: null,
  },
];
