"use client";
import { useState, ChangeEvent, KeyboardEvent } from "react";

interface Message {
  text: string;
}

const DataSet = {
  positive: [
    "good",
    "nice",
    "great",
    "amazing",
    "excellent",
    "fantastic",
    "awesome",
    "fabulous",
    "outstanding",
    "wonderful",
    "perfect",
    "brilliant",
    "superb",
    "incredible",
    "lovely",
    "pleasant",
    "satisfying",
    "delightful",
  ],
  neutral: [
    "okay",
    "average",
    "fine",
    "decent",
    "not bad",
    "alright",
    "fair",
    "moderate",
    "acceptable",
    "sufficient",
  ],
  negative: [
    "bad",
    "poor",
    "terrible",
    "awful",
    "horrible",
    "worst",
    "disappointing",
    "unpleasant",
    "mediocre",
    "boring",
    "cheap",
    "waste",
    "frustrating",
    "pathetic",
  ],
};

export default function ChatUI() {
  const [message, setMessage] = useState<Message | null>(null);
  const [input, setInput] = useState<string>("");
  const [sentiment, setSentiment] = useState([0, 0, 0]); // [positive, negative, neutral]

  const sendMessage = () => {
    if (!input.trim()) return;

    const words = input.split(" ");
    const counts = [0, 0, 0]; // [positive, negative, neutral]

    words.forEach((word) => {
      const lower = word.toLowerCase();
      if (DataSet.positive.includes(lower)) counts[0]++;
      else if (DataSet.negative.includes(lower)) counts[1]++;
      else if (DataSet.neutral.includes(lower)) counts[2]++;
    });

    setSentiment(counts); // update sentiment once
    setMessage({ text: input });
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const total = sentiment[0] + sentiment[1] + sentiment[2];
  const positivePercent = total ? ((sentiment[0] / total) * 100).toFixed(2) : 0;
  const negativePercent = total ? ((sentiment[1] / total) * 100).toFixed(2) : 0;
  const neutralPercent = total ? ((sentiment[2] / total) * 100).toFixed(2) : 0;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat messages */}
      <div className="flex-1 p-4 break-words text-lg sm:text-xl md:text-2xl lg:text-4xl">
        {message?.text.split(" ").map((word, i) => {
          const lower = word.toLowerCase();
          let className = "ml-2 text-black";

          if (DataSet.positive.includes(lower))
            className = "ml-2 text-green-600 font-semibold";
          else if (DataSet.negative.includes(lower))
            className = "ml-2 text-red-600 font-semibold";
          else if (DataSet.neutral.includes(lower))
            className = "ml-2 text-gray-600 font-medium";

          return (
            <span key={i} className={className}>
              {word}
            </span>
          );
        })}
      </div>

      {/* Sentiment percentages */}
      <div className="p-3 border-t text-sm text-black sm:text-base md:text-lg">
        <p>Positive: {positivePercent}%</p>
        <p>Negative: {negativePercent}%</p>
        <p>Neutral: {neutralPercent}%</p>
      </div>

      {/* Input box */}
      <div className="p-3 border-t flex">
        <input
          className="flex-1 border text-black rounded-full px-4 py-2 focus:outline-none"
          value={input}
          onChange={handleChange}
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}
