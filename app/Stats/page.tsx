"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const ReviewDashboard = () => {
  const data = {
    totalReviews: 2,
    ratings: {
      min: 2,
      max: 3,
      average: 2.5,
      median: 2.5,
      mode: [2, 3],
      standardDeviation: 0.5,
    },
    sentimentTotals: {
      good: 0,
      bad: 5,
      neutral: 5,
    },
    sentimentAverages: {
      good: 0,
      bad: 2.5,
      neutral: 2.5,
    },
    dominantSentimentCounts: {
      good: 0,
      bad: 1,
      neutral: 1,
    },
  };

  const sentimentColors: Record<string, string> = {
    good: "#22c55e",
    neutral: "#facc15",
    bad: "#ef4444",
  };

  // Prepare Pie Chart Data
  const sentimentPieData = Object.entries(data.sentimentTotals).map(
    ([key, value]) => ({
      name: key,
      value: value,
      color: sentimentColors[key],
    })
  );

  // Prepare Bar Chart Data for ratings analysis
  const ratingsGraphData = [
    { name: "Average", value: data.ratings.average },
    { name: "Median", value: data.ratings.median },
    { name: "Mode 1", value: data.ratings.mode[0] || 0 },
    { name: "Mode 2", value: data.ratings.mode[1] || 0 },
    { name: "Std Dev", value: data.ratings.standardDeviation },
  ];

  // Prepare Bar Chart Data for sentiment averages
  const sentimentAvgGraphData = Object.entries(data.sentimentAverages).map(
    ([key, value]) => ({ name: key, value })
  );

  return (
    <div className="p-8 bg-black min-h-screen text-white space-y-10">
      <h1 className="text-3xl font-bold text-center mb-4">Review Dashboard</h1>
      <p className="text-center text-gray-400 mb-6">
        Total Reviews:{" "}
        <span className="font-semibold">{data.totalReviews}</span>
      </p>

      {/* Min & Max as Cards */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center border-t-4 border-red-500">
          <h3 className="text-lg font-semibold">Minimum Rating</h3>
          <p className="text-3xl font-bold mt-2">{data.ratings.min}</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-md text-center border-t-4 border-green-400">
          <h3 className="text-lg font-semibold">Maximum Rating</h3>
          <p className="text-3xl font-bold mt-2">{data.ratings.max}</p>
        </div>
      </div>

      {/* Ratings Graph */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Ratings Analysis
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratingsGraphData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "8px",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
            />
            <Bar
              dataKey="value"
              radius={[5, 5, 0, 0]}
              fill="url(#ratingGradient)"
            />
            <defs>
              <linearGradient id="ratingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={1} />
                <stop offset="100%" stopColor="#16a34a" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Averages Bar Chart */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Sentiment Averages
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sentimentAvgGraphData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "8px",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
            />
            <Bar dataKey="value" radius={[5, 5, 0, 0]} fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Pie Chart */}
      <div className="bg-gray-900 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Sentiment Distribution
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={sentimentPieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {sentimentPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Dominant Sentiment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(data.dominantSentimentCounts).map(([key, value]) => (
          <div
            key={key}
            className={`bg-gray-900 rounded-xl p-4 flex flex-col items-center justify-center shadow-md border-t-4 transition-transform duration-200 hover:scale-105 ${
              key === "good"
                ? "border-green-400"
                : key === "neutral"
                ? "border-yellow-400"
                : "border-red-500"
            }`}
          >
            <h3 className="text-lg font-semibold capitalize">{key}</h3>
            <p className="text-2xl font-bold mt-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDashboard;
