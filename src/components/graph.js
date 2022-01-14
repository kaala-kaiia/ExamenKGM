import React, { useState, useEffect } from 'react';
import { Fetch } from '../utils';
import { Col, Row } from "reactstrap";
import Chart from "react-apexcharts";


const GraphsDashboard = ({urlApi}) => {

    const [Data,setData] = useState([]);
    const [Values,setValues] = useState([]);
    const [dates,setDates] = useState([]);

    useEffect(async () => {
            const result = await Fetch(urlApi)
            const sortedResult = result.sort((a,b) => {
                return new Date(a.dateExtraction).getTime() - new Date(b.dateExtraction).getTime()
            })
            const dates = new Set()
            sortedResult.map(item => {
                const date = new Date(item.dateExtraction)
                const month = date.toLocaleString('default', { month: 'short' })
                const day = date.getDate()
                dates.add(month+day)
            })
            setDates([...dates])
            setData(result)
            const skuMapper = {}
            const data2 = sortedResult.reduce((obj,item)=>{
                if (!obj[item.sku])obj[item.sku] = []
                    
                obj[item.sku].push(item.price)
                
                if (!skuMapper[item.sku])skuMapper[item.sku] = item.name
                
                return obj;
            },{})
            setValues (
                Object.entries(data2).map(
                ([key,value])=> {
                    return(
                        {
                            name: skuMapper[key],
                            data: value,
                        }
                        
                    )
                }
            ))
        },[urlApi])

    const optionsGraph = {
        chart: {
            background: '#FFF',
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        grid:{
            row:{
                colors: ['#F8F8F8', '#FFFFFF']
            },
            padding: {
                top: 20,
                right: 32,
                bottom: 20,
                left: 20
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },  
        },
        tooltip: {
            enabled: false,
        },
        animations: {
            enabled: false
        },
        stroke: {
            width: [5,5,4],
            curve: 'smooth',
        },
        colors: ['#D6215B', '#7530B2' ,'#FFB448'],
        labels: dates,
        xaxis: {
            lines:{
                show: false,
            }
        },
        yaxis:{
            min: 0,
            max: 100,
            tickAmount: 2,
            labels: {
                formatter: function (value) {
                  return "$" + value;
                }
              },

        },
        legend:{
            fontWeight: 'normal',
            fontSize: '14px',
            horizontalAlign: 'center',
            itemMargin: {
                vertical: 20,
            },
        },
        responsive: [
            {
              breakpoint: 1000,
              options: {
                legend: {
                  position: "bottom",
                }
              }
            }
          ]
    };

    
    return(
        <Row>
            <Col xs='12'>
            <p className="c-blue-800 section mb-0 text-left">Price Evolution</p>
            </Col>
            <Chart options={optionsGraph} series={Values} type='line' height={350} width='100%'  />
            
        </Row>
  );
};
export default GraphsDashboard;