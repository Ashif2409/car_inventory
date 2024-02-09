// src/components/CarInventoryTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const CarInventoryTable = () => {
    const [carInventory, setCarInventory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/car-inventory')
            .then(response => {
                setCarInventory(response.data);
            })
            .catch(error => {
                console.error('Error fetching car inventory:', error);
            });
    }, []);

    return (
        <div className="CarInventoryTable">
            <h1>Car Inventory</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Stock Count</th>
                        <th>Purchase Order IDs</th>
                        <th>Sales Order IDs</th>
                        <th>Total Purchase Value</th>
                        <th>Total Sales Value</th>
                    </tr>
                </thead>
                <tbody>
                    {carInventory.map(item => (
                        <tr key={item.item_id}>
                            <td>{item.item_id}</td>
                            <td>{item.stock_count}</td>
                            <td>{item.purchase_order_ids }</td>
                            <td>{item.sales_order_ids}</td>
                            <td>{item.total_purchase_value}</td>
                            <td>{item.total_sales_value}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default CarInventoryTable;
