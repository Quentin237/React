import React from 'react'
import graphedata1 from '../graphe/uvs.json'
import graphedata2 from '../graphe/ca.json'
import { Component } from "react"
import { Line, Pie } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);



export class Charts extends Component {
	state = {
		dataLines1: {
			labels: graphedata1.uvs.map(graphedata1=>graphedata1.date),
			datasets: [
				{			
				label: 'UV',
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				data: graphedata1.uvs.map(i=>i.uv),
				}
			]
		},
	};
	state2 = {	
		dataLines2: {
			labels: graphedata2.ca.map(i=>i.sector),
			datasets: [
				{			
				label: '# of Votes',
				data: graphedata2.ca.map(i=>i.ca),
				backgroundColor: [
				  'rgba(255, 99, 132, 0.2)',
				  'rgba(54, 162, 235, 0.2)',
				  'rgba(255, 206, 86, 0.2)',
				  'rgba(75, 192, 192, 0.2)',
				  'rgba(153, 102, 255, 0.2)',
				  'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
				  'rgba(255, 99, 132, 1)',
				  'rgba(54, 162, 235, 1)',
				  'rgba(255, 206, 86, 1)',
				  'rgba(75, 192, 192, 1)',
				  'rgba(153, 102, 255, 1)',
				  'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
				}
			]
		}
	}

	render(){
		return(
			<MDBContainer>
				<Line options={{responsive: true}} data={this.state.dataLines1} />
				<Pie options={{responsive: true}} data={this.state2.dataLines2} />
			</MDBContainer>
		)
	}
	
}
  
export default Charts

