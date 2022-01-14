import React, { useState, useEffect } from 'react';
import { Col, Table } from 'reactstrap';
import { Fetch } from '../utils';

const ProductTable = ()=>{
    const [Data,setData] = useState([]);
    useEffect(async () => {
            const result = await Fetch('https://atlantia-dev-test.herokuapp.com/api/beer-products/')
            setData(result)
        },[])

    return (
        <Col xs='12'>
            <p className='section text-left mb-0 c-blue800'>Comparative Analysis</p>
            <Table responsive className='product'>
                <thead>
                    <tr className='bg-gray py-23 c-blue-900 items'>
                        <td>Nombre</td>
                        <td>SKU</td>
                        <td>% Presencia</td>
                        <td>Av. price</td>
                        <td>Av. position</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Data.map((product,index) =>
                            <tr className={`px-7p py-15p c-gray-900 items ${index % 2 == 0 ? 'bg-white': 'bg-gray-100'}`}>
                                <td className='d-flex align-items-center'>
                                    <img src={product.productImage} width={121} className='pr-20'/>
                                    <p className='mb-0'>{product.name}</p>
                                </td>
                                <td>{product.sku}</td>
                                <td className={`${product.persistence < 0 ? 'c-pita': 'c-aqua'}`}>{`${parseFloat(product.persistence) }`}</td>
                                <td>{ Intl.NumberFormat("es-MX", {style: "currency", currency: "MXN"}).format(product.averagePrice)}</td>
                                <td>{product.averagePosition}</td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
        </Col>
    );
};
export default ProductTable;