import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { planetData } from '../data/planetData';

const PlanetCharts: React.FC = () => {
  return (
    <div className="charts-container">
      <h3>행성 크기 비교 (지름)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={planetData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="size" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h3>행성 질량 비교</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={planetData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mass" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlanetCharts;
