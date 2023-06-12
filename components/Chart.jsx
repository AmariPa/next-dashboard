import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const Chart = () => {
	const [barchartData, setbarchartData] = useState({
		datasets: [],
	});

	const [barchartOptions, setBarChartOptions] = useState({});

	useEffect(() => {
		setbarchartData({
			labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
			datasets: [
				{
					label: 'Sales $',
					data: [49034, 89213, 77493, 21894, 56232, 11147, 58794],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgb(53, 162, 235, 0.4',
				},
			],
		});
		setBarChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Daily Revenue',
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className='w-full md:col-span-2 relative lg:h-[70vh] m-auto p-4 border rounded-lg bg-white'>
				<Bar data={barchartData} options={barchartOptions} />
			</div>
		</>
	);
};

export default Chart;
