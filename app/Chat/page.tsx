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
  const wordCount: Record<string, number> = {};
  let spamScore = 0;
  const sendMessage = () => {
    if (!input.trim()) return;

    const words = input.split(" ");
    const counts = [0, 0, 0];

    words.forEach((word) => {
      const lower = word.toLowerCase();

      // count word occurrences
      wordCount[lower] = (wordCount[lower] || 0) + 1;

      // increment sentiment counts
      if (DataSet.positive.includes(lower)) counts[0]++;
      else if (DataSet.negative.includes(lower)) counts[1]++;
      else if (DataSet.neutral.includes(lower)) counts[2]++;
    });

    // mark as spam if any word repeats too much
    for (const w in wordCount) {
      if (wordCount[w] > 5) spamScore++;
    }
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
  const positivePercent = total ? (sentiment[0] / total) * 100 : 0;
  const negativePercent = total ? (sentiment[1] / total) * 100 : 0;
  const neutralPercent = total ? (sentiment[2] / total) * 100 : 0;

  // Arrow angle from -90 (negative) to +90 (positive)
  const gaugeAngle =
    total === 0 ? 0 : ((positivePercent - negativePercent) / 100) * 90;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {message && (
          <div className="flex flex-wrap">
            {message.text.split(" ").map((word, i) => {
              const lower = word.toLowerCase();
              let className = "ml-1 text-black";

              if (DataSet.positive.includes(lower))
                className = "ml-1 text-green-600 font-semibold";
              else if (DataSet.negative.includes(lower))
                className = "ml-1 text-red-600 font-semibold";
              else if (DataSet.neutral.includes(lower))
                className = "ml-1 text-yellow-600 font-semibold";

              return (
                <span key={i} className={className}>
                  {word}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Semicircle Gauge */}
      <div className="flex justify-center p-4">
        <div className="relative w-72 h-36">
          {/* Color gradient semicircle */}
          <div
            className="absolute w-full h-full rounded-t-full overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, #f56565, #ecc94b, #48bb78)", // red → yellow → green
            }}
          ></div>

          {/* Arrow */}
          <div
            className="absolute bottom-0 left-1/2 w-1 h-36 bg-black origin-bottom transition-transform duration-300"
            style={{ transform: `translateX(-50%) rotate(${gaugeAngle}deg)` }}
          ></div>

          {/* Labels */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-800 px-2">
            <span>Bad</span>
            <span>Neutral</span>
            <span>Good</span>
          </div>
        </div>
      </div>

      {/* Sentiment Percentages */}
      <div className="p-3 border-t text-sm sm:text-base md:text-lg flex justify-around">
        <p className="text-green-600 font-semibold">
          Positive: {positivePercent.toFixed(0)}%
        </p>
        <p className="text-red-600 font-semibold">
          Negative: {negativePercent.toFixed(0)}%
        </p>
        <p className="text-yellow-600 font-semibold">
          Neutral: {neutralPercent.toFixed(0)}%
        </p>

        <p className=" text-black">Spam Score:{spamScore}</p>
      </div>

      {/* Input box */}
      <div className="p-3 border-t flex bg-white">
        <input
          className="flex-1 border border-gray-300 text-black rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={handleChange}
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
