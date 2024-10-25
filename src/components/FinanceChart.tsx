'use client'
import Image from 'next/image'

import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'January',
    income: 4000,
    expense: 2400,
    average: 1000,
  },
  {
    name: 'February',
    income: 3000,
    expense: 1398,
    average: 2210,
  },
  {
    name: 'March',
    income: 2000,
    expense: 9800,
    average: 1190,
  },
  {
    name: 'April',
    income: 2780,
    expense: 3908,
    average: 900,
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800,
    average: 1181,
  },
  {
    name: 'June',
    income: 2390,
    expense: 3800,
    average: 1500,
  },
  {
    name: 'July',
    income: 3490,
    expense: 4300,
    average: 600,
  },
  {
    name: 'August',
    income: 3490,
    expense: 2100,
    average: 1700,
  },
  {
    name: 'September',
    income: 3490,
    expense: 1200,
    average: 2100,
  },
  {
    name: 'October',
    income: 3490,
    expense: 1800,
    average: 1100,
  },
  {
    name: 'November',
    income: 3490,
    expense: 1500,
    average: 1190,
  },
  {
    name: 'December',
    income: 3490,
    expense: 1300,
    average: 1720,
  },
];

export default function FinanceChart() {

  return (
    <div className='bg-white rounded-lg p-4 h-full drop-shadow-md'>
        <div className=" flex items-center justify-between">
          <h1 className='text-lg font-semibold'>Finance</h1>
          <Image src='/moreDark.png' alt='' height={20} width={20} />
        </div>
        <div style={{ width: '100%', height: '50%'}}>
      

        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            width={500}
            height={100}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p>Average</p>

        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            width={500}
            height={100}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="average" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>

        
        <ResponsiveContainer width="100%" height={175}>
          <LineChart
            width={500}
            height={100}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="expense" stroke="#8884d8" fill="#8884d8" />
            <Brush height={30}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
