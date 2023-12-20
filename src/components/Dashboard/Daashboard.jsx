import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Daashboard = () => {
  const students = [
    {
      studentId: 1,
      name: "John Doe",
      math: 87,
      phy: 92,
      bangla: 78,
    },
    {
      studentId: 2,
      name: "Jane Smith",
      math: 60,
      phy: 90,
      bangla: 65,
    },
    {
      studentId: 3,
      name: "Bob Johnson",
      math: 78,
      phy: 70,
      bangla: 80,
    },
    {
      studentId: 4,
      name: "Emily Davis",
      math: 95,
      phy: 94,
      bangla: 89,
    },
    {
      studentId: 5,
      name: "Alex Wilson",
      math: 82,
      phy: 88,
      bangla: 85,
    },
    {
      studentId: 6,
      name: "Sophia Miller",
      math: 90,
      phy: 91,
      bangla: 88,
    },
    {
      studentId: 7,
      name: "Ryan Brown",
      math: 75,
      phy: 80,
      bangla: 70,
    },
    {
      studentId: 8,
      name: "Olivia Taylor",
      math: 94,
      phy: 89,
      bangla: 82,
    },
    {
      studentId: 9,
      name: "Michael White",
      math: 86,
      phy: 84,
      bangla: 76,
    },
    {
      studentId: 10,
      name: "Ava Robinson",
      math: 93,
      phy: 95,
      bangla: 90,
    },
    {
      studentId: 11,
      name: "Ethan Harris",
      math: 79,
      phy: 55,
      bangla: 75,
    },
    {
      studentId: 12,
      name: "Emma Thompson",
      math: 91,
      phy: 93,
      bangla: 55,
    },
  ];

  return (
    <div>
      <LineChart width={1100} height={300} data={students}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="math"></Line>
        <Line dataKey="phy" stroke="#8884d8"></Line>
        <Line dataKey="bangla" stroke="#82ca9d"></Line>
      </LineChart>
    </div>
  );
};

export default Daashboard;
