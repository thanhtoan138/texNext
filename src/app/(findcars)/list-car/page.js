'use client'
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../../scss/listcar.scss';
const ListCar = () => {
    return (
        <div className="listcar">
            <Container>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '12px', marginTop: '20px' }}>
                    <Card style={{ width: '310px', marginBottom: '60px', height: '29rem' }}>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted ">
                                <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/01/20/13/4pvGdgRfdXG6EuykmRQ85w.jpg' width={290} height={240} />
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

                            </Card.Subtitle>

                            <Row className='' style={{ position: 'relative', bottom: '80px', marginBottom: '-80px' }}>
                                <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '28px', textAlign: 'center' }}>
                                    <p>Số tự động</p>
                                </Col>
                                &nbsp;
                                <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '28px', textAlign: 'center' }}>
                                    <p>Giao xe tận nơi</p>
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                            <p><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                            <hr />
                            <div>
                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '22px', marginLeft: '3px' }}>979K</span>/ngày
                            </div>
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </div>
    )
}
export default ListCar;