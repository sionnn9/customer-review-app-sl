"use client";
import React, { useState, useEffect } from "react";
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

interface Ratings {
  min: number;
  max: number;
  average: number;
  median: number;
  mode: number[];
  standardDeviation: number;
}

interface ReviewData {
  totalReviews: number;
  ratings: Ratings;
  sentimentTotals: Record<string, number>;
  sentimentAverages: Record<string, number>;
  dominantSentimentCounts: Record<string, number>;
}

const ReviewDashboard = () => {
  const [data, setData] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/getStats");
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-white text-center mt-10">Loading dashboard...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!data) return null;

  const sentimentColors: Record<string, string> = {
    good: "#22c55e",
    neutral: "#facc15",
    bad: "#ef4444",
  };

  const sentimentPieData = Object.entries(data.sentimentTotals).map(
    ([key, value]) => ({
      name: key,
      value,
      color: sentimentColors[key] || "#8884d8",
    })
  );

  const ratingsGraphData = [
    { name: "Average", value: data.ratings.average },
    { name: "Median", value: data.ratings.median },
    ...data.ratings.mode.map((m, idx) => ({
      name: `Mode ${idx + 1}`,
      value: m,
    })),
    { name: "Std Dev", value: data.ratings.standardDeviation },
  ];

  const sentimentAvgGraphData = Object.entries(data.sentimentAverages).map(
    ([key, value]) => ({
      name: key,
      value,
    })
  );

  return (
    <div className="p-8 bg-black min-h-screen text-white space-y-10">
      <h1 className="text-3xl font-bold text-center mb-4">Review Dashboard</h1>
      <p className="text-center text-gray-400 mb-6">
        Total Reviews:{" "}
        <span className="font-semibold">{data.totalReviews}</span>
      </p>

      {/* Min & Max Ratings */}
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

      {/* Ratings Analysis */}
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
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Bar dataKey="value" radius={[5, 5, 0, 0]} fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Averages */}
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
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
            />
            <Bar dataKey="value" radius={[5, 5, 0, 0]} fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sentiment Distribution Pie */}
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
            className={`bg-gray-900 rounded-xl p-4 flex flex-col items-center justify-center shadow-md border-t-4 ${
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
