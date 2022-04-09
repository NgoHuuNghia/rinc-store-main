import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import chartOptions from "./chartOptions";

const BarChart = ({chartData}) => {
    return <Bar 
        data={chartData}
        options={chartOptions}
    />;
}

export default BarChart;