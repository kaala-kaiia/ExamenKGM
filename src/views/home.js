import React from 'react';
import Logo from '../assets/images/logo.png'
import ProductTable from '../components/productTable';
import { Col, Container } from 'reactstrap';
import Chart from '../components/graph';
import DonutChart from '../components/donutGraph';

const Home = ()=>{
    return (
        <Container fluid className='px-28 bg-light-blue'>
            <section className='row'>
                <p className='principal c-blue-800 text-left'>General Perfomance Analysis</p>
                <Col xs='12' md='7'>
                    <Chart urlApi='https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/'/>
                </Col>
                <Col xs='12' md='5' className=''>
                    <DonutChart urlApi='https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/'/>
                </Col>
            </section>
            <section>
                <ProductTable/>
            </section>
        </Container>
    );
};
export default Home;