import React from 'react'
import styles from './Homepage.module.css';
import { Pagination } from 'antd';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Homepage() {
    return (
        //Demo cách sử dụng module.css trong react
        <div>
            <h1 className={styles.homepage_title}>Homepage</h1>

            {/* Demo cách apply 1 UI trong ant design */}
            <Pagination defaultCurrent={1} total={50} />

            {/* Demo cách sử dụng tailwindcss */}
            <div className='text-purple-400 hover:text-red-900 cursor-pointer'>Hello Thành</div>

            {/* Demo cách sử dụng thư viện react-bootstrap */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.dw.com/image/44278679_303.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
