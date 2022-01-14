import React, { useState, useEffect } from 'react';
import { Fetch } from '../utils';
import { Col, Row } from "reactstrap";
import Chart from "react-apexcharts";


const DonutChart = ({urlApi}) => {

    const [Labels,setLabels] = useState([]);
    const [Series,setSeries] = useState([]);

    useEffect(async () => {
            const result = await Fetch(urlApi)
            setSeries ( result.map((item)=>item.presenceShare ) )
            setLabels ( result.map((item)=>item.name ) )
            
        },[urlApi])

    const optionsGraph = { 
        labels: Labels,
        chart:{
            background: '#FFF',
        },
        grid:{
            padding: {
                top: 20,
                right: 0,
                bottom: 20,
                left: 0
            }, 
        }, 
        dataLabels: {
            enabled: false,
        },
        colors: ['#D6215B', '#7530B2' ,'#006FFF', '#FF7A00', '#23B794'],
        legend:{
            fontWeight: 'normal',
            fontSize: '14px',
        },
        
    };

    
    return(
        <Row>
            <Col xs='12'>
                <p className="c-blue-800 section mb-0 text-left">Presence Share by Product</p>
            </Col>
            <Chart options={optionsGraph} series={Series} type='pie' height={350} width='100%' />
    
      </Row>
  );
};
export default DonutChart;