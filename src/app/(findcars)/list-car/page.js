'use client'
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import '../../../scss/listcar.scss';
import { useEffect, useState } from "react";
const ListCar = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "http://localhost:8000/products");
            const data = await res.json();
            setList(data);
        };
        fetchData();
    }, []);

    // useEffect((list) => {
    //     fetch('http://localhost:8000/products')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setList(data)
    //         })
    // }, [])
    return (
        <div className="listcar bg-body-tertiary">
            <Container style={{ paddingTop: '15px' }}>
                <div className="grid-container">
                    {list?.map((l) => {
                        return (
                            <Card key={l.id} style={{ width: '310px', height: '25rem' }}>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted ">
                                        <Link href={`product/${l.id}`}>
                                            <img src={l.image} width={282} height={210} style={{ position: 'relative', right: '10px' }} />
                                        </Link>
                                        <div className="fast">
                                            <p>Đặt xe nhanh</p>
                                            <Image src='/img/storm.png' width={20} height={17} alt="" style={{ marginLeft: '5px' }} />
                                        </div>
                                        <div className="like">
                                            <Image src='/img/heart.png' width={20} height={17} alt="" />
                                        </div>
                                        <div className="logo">
                                            <img src='https://n1-astg.mioto.vn/g/2023/00/23/22/-kwISjxUWB2J-t98nNtLMQ.jpg' width={40} height={40} alt="" />
                                        </div>
                                        <div className="discount">
                                            <span>Giảm {l.discount * 100}%</span>
                                        </div>

                                    </Card.Subtitle>

                                    <Row className='' style={{ position: 'relative', bottom: '105px', marginBottom: '-80px' }}>
                                        <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '28px', textAlign: 'center' }}>
                                            <p>Số tự động</p>
                                        </Col>
                                        &nbsp;
                                        <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '28px', textAlign: 'center' }}>
                                            <p>Giao xe tận nơi</p>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>
                                    <p style={{ fontSize: '20px', fontWeight: '600', marginTop: '-100px', textAlign: 'center' }}>{l.name}</p>
                                    <p style={{ fontSize: '14px', marginTop: '-13px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                    <hr style={{ marginTop: '-10px' }} />
                                    <div style={{ fontSize: '13px', display: 'flex', marginTop: '-8px' }}>
                                        <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                        <i className="bi bi-suitcase-fill" style={{ color: '#5fcf86' }}></i>39 chuyến
                                        <del style={{ marginLeft: '20px', fontWeight: '500', color: 'gray' }}>{l.price}k</del>
                                        <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '17px', marginLeft: '5px', marginTop: '-3px' }}>{l.price - (l.price * l.discount)}K</span>/ngày
                                    </div>
                                </Card.Body>
                            </Card>

                        )
                    })}
                </div>

            </Container >
        </div >
    )
}
export default ListCar;