'use client';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import "../../scss/nav1.scss";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

const MainChild1 = () => {
    const router = useRouter();

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "http://localhost:8000/products");
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:8000/products')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //             setLoading(false)
    //         })
    // }, [])



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className='main1 w-100'>
            <Container>
                <div className='nav-head'>
                    <div className='img-bg w-100 mt-3'>
                        <img src='https://www.mioto.vn/static/media/bg-landingpage-1.34e13e49.png' alt='' width={1300} height={600} />
                    </div>
                    <div className='title'>
                        <p className='first'>Mioto - Cùng Bạn<br /> Đến Mọi Hành Trình</p>
                        <hr className='second' noshade="noshade" />
                        <p className='three'>Trải nghiệm sự khác biệt từ <span>hơn 8000</span> xe gia đình đời mới khắp Việt Nam</p>
                    </div>
                    <div className='nav-pill'>
                        <Nav variant="pills">

                            <Nav.Item className='nav-pill-c' style={{ borderRadius: '10px 0px 0px 0px' }}>
                                <Link className="nav-link" href='/' style={{ textDecoration: 'none', color: 'white' }}>
                                    <i className="bi bi-car-front-fill"></i>&nbsp;Xe tự lái
                                </Link>

                            </Nav.Item>
                            <Nav.Item className='nav-pill-c'>

                                <Link className='nav-link' href='/main-child2' style={{ textDecoration: 'none', color: 'white' }}>
                                    <i className="bi bi-bus-front-fill"></i>
                                    &nbsp;Xe có tài xế
                                </Link>

                            </Nav.Item>
                            <Nav.Item className='nav-pill-c' style={{ borderRadius: '0px 10px 0px 0px' }}>

                                <Link className='nav-link' href='/main-child3' style={{ textDecoration: 'none', color: 'white' }} >
                                    <i className="bi bi-bus-front-fill"></i>
                                    &nbsp;Thuê xe dài hạn
                                </Link>

                            </Nav.Item>

                        </Nav>

                    </div>
                </div>
            </Container>
            <Container>
                <div className='main-header bg-light'>
                    <Row>
                        <Col md={4}>
                            <p style={{ fontSize: '18px', fontWeight: "500", color: "gray", textAlign: 'left', marginTop: '10px', marginLeft: "10px" }}><i className="bi bi-geo-alt"></i>&nbsp; Địa điểm</p>
                            <div>
                                <a type='btn' onClick={handleShow} style={{ fontSize: '22px', fontWeight: "500", textAlign: 'left' }}>Hồ Chí Minh &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="bi bi-caret-down-fill"></i></a>
                            </div>

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ fontSize: '18px', fontWeight: "500" }}>Địa điểm</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Modal.Body>

                            </Modal>
                        </Col>
                        <Col md={1}>
                            <div className='straign'></div>
                        </Col>
                        <Col md={7}>
                            <p style={{ fontSize: '18px', fontWeight: "500", color: "gray", textAlign: 'left', marginTop: '10px' }}><i className="bi bi-calendar-check"></i>&nbsp; Thời gian thuê</p>
                            <div style={{ textAlign: 'left' }}>
                                <span style={{ fontSize: '18px', fontWeight: '500' }}>21:00,08/06/2024 - 20:00 09/06/2024</span> &nbsp; &nbsp;
                                <i className="bi bi-caret-down-fill"></i>&nbsp; &nbsp;
                                <button href='' style={{
                                    backgroundColor: '#5fcf86', height: '50px',
                                    border: '1px solid white', borderRadius: '10px', width: '70px', fontWeight: '500'
                                }}><Link href='/list-car' style={{ textDecoration: 'none', color: 'white' }}>Tìm xe</Link></button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='main-body'>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '52px' }}>Chương Trình Khuyến Mãi</h1>
                        <h4>Nhận nhiều ưu đãi hấp dẫn từ Mioto</h4>
                    </div>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={false}
                            slidesPerView={3}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper1"
                        >
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={430} height={270} /></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/05/03/14/SDFAW8Q.jpg' alt='' width={430} height={270} /></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/05/01/08/BR7YYDU3.jpg' alt='' width={430} height={270} /></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/05/01/07/1IYDW45Y.jpg' alt='' width={430} height={270} /></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/05/01/07/BNBE2HRQ.jpg' alt='' width={430} height={270} /></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/g/2024/05/01/07/BJKIZCHI.jpg' alt='' width={430} height={270} /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
            <div className='main-car'>
                <Container>
                    <div style={{ fontSize: '52px', textAlign: 'center', marginTop: '50px', paddingBottom: '50px', paddingTop: '40px' }}>
                        <h1 style={{ fontWeight: '700' }}>Xe dành cho bạn</h1>
                    </div>
                    <Row className='card-e'>
                        {data?.map((item) => {
                            return (
                                <Col key={item.id}>
                                    <Card style={{ width: '19rem', marginBottom: '60px', height: '29rem' }}>
                                        <Card.Body>

                                            <Card.Subtitle className="mb-2 text-muted ">
                                                <Link href={`/product/${item.id}`}>
                                                    <img src={item.image} width={270} height={240} />
                                                </Link>
                                            </Card.Subtitle>

                                            <Row className='mt-3'>
                                                <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                                    <p>Số tự động</p>
                                                </Col>
                                                &nbsp;
                                                <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                                    <p>Giao xe tận nơi</p>
                                                </Col>
                                                <Col md={1}></Col>
                                            </Row>
                                            {/* href={`/product/${item.id}`} */}
                                            <Link href={`/product/${item.id}`} style={{ textDecoration: "none", color: 'black' }}>
                                                <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px', textAlign: 'center' }}>
                                                    {item.name}
                                                </p>
                                            </Link>
                                            <p><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                            <hr />
                                            <div>
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>{item.price}k</del>
                                                <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '20px', marginLeft: '3px' }}>{item.price - (item.price * item.discount)}K</span>/ngày
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}

                    </Row>
                    <Row className='card-e'>
                        <Col>
                            <Card style={{ width: '19rem', marginBottom: '60px', height: '29rem' }}>
                                <Card.Body>

                                    <Card.Subtitle className="mb-2 text-muted ">
                                        <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2022/11/28/09/OYnnZPsn8CO1mSFtxM3Cnw.jpg' width={270} height={240} />
                                    </Card.Subtitle>

                                    <Row className='mt-3'>
                                        <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Số tự động</p>
                                        </Col>
                                        &nbsp;
                                        <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Giao xe tận nơi</p>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>


                                    <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px' }}>KIA K3 PREMEUM 2022</p>
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
                        </Col>
                        <Col>
                            <Card style={{ width: '19rem', marginBottom: '20px', height: '29rem' }}>
                                <Card.Body>

                                    <Card.Subtitle className="mb-2 text-muted ">
                                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2023/p/g/2024/01/05/13/poF_tm-fWT9z3juTxXB-4w.jpg' width={270} height={240} />
                                    </Card.Subtitle>

                                    <Row className='mt-3'>
                                        <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Số tự động</p>
                                        </Col>
                                        &nbsp;
                                        <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Giao xe tận nơi</p>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>


                                    <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px' }}>KIA K3 PREMEUM 2022</p>
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
                        </Col>
                        <Col>
                            <Card style={{ width: '19rem', marginBottom: '20px', height: '29rem' }}>
                                <Card.Body>

                                    <Card.Subtitle className="mb-2 text-muted ">
                                        <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2023/p/g/2024/01/05/13/poF_tm-fWT9z3juTxXB-4w.jpg' width={270} height={240} />
                                    </Card.Subtitle>

                                    <Row className='mt-3'>
                                        <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Số tự động</p>
                                        </Col>
                                        &nbsp;
                                        <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Giao xe tận nơi</p>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>


                                    <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px' }}>KIA K3 PREMEUM 2022</p>
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
                        </Col>
                        <Col>
                            <Card style={{ width: '19rem', marginBottom: '20px', height: '29rem' }}>
                                <Card.Body>

                                    <Card.Subtitle className="mb-2 text-muted ">
                                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2021/p/g/2024/00/24/20/5oaUGIk_VyOhK1KAZ3IIhA.jpg' width={270} height={240} />
                                    </Card.Subtitle>

                                    <Row className='mt-3'>
                                        <Col md={5} style={{ backgroundColor: '#eef7ff', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Số tự động</p>
                                        </Col>
                                        &nbsp;
                                        <Col md={6} style={{ backgroundColor: '#dff5e7', borderRadius: '10px', height: '30px', textAlign: 'center' }}>
                                            <p>Giao xe tận nơi</p>
                                        </Col>
                                        <Col md={1}></Col>
                                    </Row>


                                    <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '10px' }}>KIA K3 PREMEUM 2022</p>
                                    <p><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                    <hr />
                                    <div>
                                        <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0
                                        <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến&nbsp;&nbsp;
                                        <del style={{ fontWeight: '500', color: 'gray' }}>530k</del>
                                        <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '22px' }}>979K</span>/ngày
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='checkin'>
                <Container>
                    <h1 style={{ textAlign: "center", marginBottom: '40px', fontSize: '52px', fontWeight: '700' }}>Địa điểm nổi bật</h1>
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={false}
                            slidesPerView={4}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // modules={[Autoplay, Navigation]}
                            className="mySwiper2"
                        >
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HoChiMinh_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HaNoi_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/DaNang_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/BinhDuong_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div></SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/BinhDuong_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide> <img src='https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities_v2/HoChiMinh_v2.jpg' alt='' width={300} height={470} />
                                <div className='slide-c'>
                                    <p style={{ fontSize: '23px' }}>TP. HỒ CHÍ MINH<br />
                                        <b style={{ fontSize: '17px' }}>2300+ xe</b>
                                    </p>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </div>
            <div className="swiper-custom">
                <Container>
                    <div className="swiper-container">
                        <Row>

                            <Col lg={2} className="custom-pre">
                                <h2 style={{ fontWeight: '700' }}>Giao xe tại sân bay</h2>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </Col>
                            <Col lg={10}>
                                <Swiper
                                    spaceBetween={10}
                                    centeredSlides={false}
                                    slidesPerView={4}

                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}

                                    modules={[Navigation]}
                                    className="mySwiper3"
                                >
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2022/04/14/17/NGXIIKNY.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2022/04/14/17/HU5WFGGX.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2022/04/14/17/ND4NE32Q.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2022/04/14/17/IJKX9Q3Q.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>

                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide> <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>

                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide> <SwiperSlide className="swi">
                                        <img src='https://n1-cstg.mioto.vn/g/2024/04/30/09/1KSBN9MF.jpg' alt='' width={80} height={70} />
                                        <h4 style={{ marginLeft: "60px", marginTop: '10px' }}>Tân sơn nhất</h4>
                                        <p style={{ marginLeft: "87px", fontSize: '18px', fontWeight: '400px' }}>1000+ xe</p>
                                    </SwiperSlide>



                                </Swiper>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className="priority">
                <Container>
                    <div className="title">
                        <h1 style={{ fontWeight: '700' }}>Ưu Điểm Của Mioto</h1>
                        <p style={{ fontSize: '22px' }}>Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên Mioto.</p>
                    </div>
                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={3}>
                            <img src="https://www.mioto.vn/static/media/thue_xe_co_tai_xe.a6f7dc54.svg" />
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={2}>
                            <img src="https://www.mioto.vn/static/media/dich_vu_thue_xe_tu_lai_hanoi.f177339e.svg" />
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={3}>
                            <img src="	https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_tphcm.1e7cb1c7.svg" />
                        </Col>
                        <Col lg={1}></Col>
                    </Row>

                    <Row style={{ fontSize: '18px', fontWeight: '400' }}>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '10px' }}>Lái xe an toàn cùng Mioto</h4>
                            <p>Chuyến đi trên Mioto được bảo vệ với    &nbsp;&nbsp;&nbsp;&nbsp;Gói bảo hiểm thuê xe tự lái từ <br />MIC & VNI.
                                Khách thuê sẽ chỉ bồi &nbsp;&nbsp;&nbsp;thường tối đa 2,000,000VNĐ  <br />trong trường hợp có sự cố ngoài <br /> ý muốn.</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '50px' }}>An tâm đặt xe</h4>
                            <p>Không tính phí huỷ chuyến trong  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vòng 1h sau khi đặt cọc.<br />
                                Hoàn cọc và bồi thường 100% nếu  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chủ xe huỷ chuyến trong<br /> vòng 7 ngày trước huyến đi.</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '40px' }}>Thủ tục đơn giản</h4>
                            <p>Chỉ cần có CCCD gắn chip (Hoặc Passport)
                                & Giấy phép lái xe <br />là bạn đã đủ điều kiện thuê xe trên Mioto.</p>
                        </Col>

                    </Row>

                    <Row>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <img src="https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_hanoi.735438af.svg" />
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={2} style={{ marginTop: '20px' }}>
                            <img src="https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hcm.ffd1319e.svg" />
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <img src="	https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hanoi.4035317e.svg" />
                        </Col>
                        <Col lg={1}></Col>
                    </Row>

                    <Row style={{ fontSize: '18px', fontWeight: '400' }}>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '10px' }}>Thanh toán dễ dàng</h4>
                            <p>Đa dạng hình thức thanh toán: <br />&nbsp;&nbsp;&nbsp;ATM, thẻ Visa & Ví điện tử <br />&nbsp;&nbsp;&nbsp;&nbsp;(Momo, VnPay, ZaloPay).</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '50px' }}>Giao xe tận nơi</h4>
                            <p style={{ marginLeft: '20px' }}>Bạn có thể lựa chọn giao xe<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tận nhà/sân bay... <br />Phí tiết kiệm chỉ từ 15k/km.</p>
                        </Col>
                        <Col lg={1}></Col>
                        <Col lg={3} style={{ marginTop: '20px' }}>
                            <h4 style={{ marginLeft: '30px' }}>Dòng xe đa dạng</h4>
                            <p>Hơn 100 dòng xe cho bạn tuỳ ý<br />&nbsp;&nbsp;&nbsp; lựa chọn: Mini, Sedan, CUV,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SUV, MPV, Bán tải.</p>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className="joyney">
                <Container>
                    <h1 style={{ textAlign: 'center', paddingTop: '40px', fontWeight: '700' }}>Hành Trình Của Bạn Luôn Được Bảo Vệ</h1>
                    <Row className="row-img">
                        <Col lg={3} >
                            <img src='	https://www.mioto.vn/static/media/global-care.e4fc7ef6.jpg' width={320} />
                        </Col>
                        <Col lg={3} >
                            <img src='https://www.mioto.vn/static/media/mic.ad48f066.jpg' width={320} />
                        </Col>
                        <Col lg={3} >
                            <img src='	https://www.mioto.vn/static/media/vni.d1b15e7a.jpg' width={320} />
                        </Col>
                        <Col lg={3}>
                            <img src='	https://www.mioto.vn/static/media/pvi.cfd4805b.jpg' width={320} style={{ backgroundColor: 'white' }} />
                        </Col>
                    </Row>
                </Container>

            </div>

            <div className="service">
                <Container>
                    <h1 style={{ textAlign: 'center', fontWeight: '700', marginTop: '40px' }}>Dịch Vụ Của Mioto</h1>
                    <Row style={{ marginTop: '60px' }}>

                        <Col lg={6} className='ser1'>
                            <img src='https://www.mioto.vn/static/media/gia_thue_xe_tu_lai_4cho_tai_hanoi.e6ebc385.png' width={700} />
                            <div className='content'>
                                <p className="tilte">Xe đã sẵn sàng.
                                    <br /> Bắt đầu hành trình ngay!</p>
                                <p style={{ fontSize: '18px' }}>Tự tay cầm lái chiếc xe bạn yêu thích<br />
                                    cho hành trình thêm hứng khởi.</p>
                                <a className='btn'>Thuê xe tự lái</a>
                            </div>
                        </Col>
                        <Col lg={6} className='ser2'>
                            <img src='https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_va_co_tai.9df79c9f.png' width={700} />
                            <div className='content'>
                                <p className="tilte">Tài xế của bạn đã đến!</p>
                                <p style={{ fontSize: '18px', marginLeft: '155px' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chuyến đi thêm thú vị<br />
                                    cùng các bác tài 5* trên Mioto.</p>
                                <a className='btn'>Thuê xe có tài xế</a>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className='instruct'>
                <Container>
                    <div className='tilte'>
                        <h1 style={{ fontWeight: '700' }}>Hướng Dẫn Thuê Xe</h1>
                        <p>Chỉ với 4 bước đơn giản để trải nghiệm thuê xe Mioto<br /> một cách nhanh chóng</p>
                    </div>
                    <Row className="title-p">
                        <Col lg={3}>
                            <img src="https://www.mioto.vn/static/media/cho_thue_xe_co_taigia_re_tphcm.12455eba.svg" />
                        </Col>
                        <Col lg={3}>
                            <img src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_tphcm.9455973a.svg" />
                        </Col>
                        <Col lg={3}>
                            <img src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_hanoi.0834bed8.svg" />
                        </Col>
                        <Col lg={3}>
                            <img src="https://www.mioto.vn/static/media/gia_thue_xe_4cho_tai_tphcm.9dcd3930.svg" />
                        </Col>

                        <Col lg={3}>
                            <div><span style={{ color: '#5fcf86' }}>01</span>&nbsp; Đặt xe trên<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app/web Mioto</div>

                        </Col>
                        <Col lg={3}>
                            <div><span style={{ color: '#5fcf86' }}>02</span>
                                &nbsp;Nhận xe</div>
                        </Col>
                        <Col lg={3}>
                            <div><span style={{ color: '#5fcf86' }}>03</span>
                                &nbsp;Bắt đầu<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hành trình</div>
                        </Col>
                        <Col lg={3}>
                            <div><span style={{ color: '#5fcf86' }}>04</span>
                                &nbsp;Trả xe & kết thúc<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chuyến đi</div>
                        </Col>

                    </Row>

                    <div className="more">
                        <Row>
                            <Col lg={6} className="more1">
                                <img src="https://www.mioto.vn/static/media/thue_xe_co_tai_xe_tphcm_gia_re.465b3169.png" />
                            </Col>
                            <Col lg={6} className="more2">
                                <img src="https://www.mioto.vn/static/media/logo-full.ea382559.png" width={200} />
                                <h1 style={{ fontWeight: "700", fontSize: '52px' }}>Bạn muốn biết thêm<br /> về Mioto?</h1>
                                <p style={{ fontSize: '18px' }}>Mioto kết nối khách hàng có nhu cầu thuê xe với hàng ngàn chủ xe ô tô ở TPHCM, Hà Nội & các tỉnh thành khác.
                                    Mioto hướng đến việc xây dựng cộng đồng người dùng ô tô văn minh & uy tín tại Việt Nam.</p>
                                <a className='btn'>Tìm hiểu thêm</a>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className='instruct2'>
                <Container>
                    <div className="more">
                        <Row>
                            <Col lg={6} className="more2">
                                <img src="https://www.mioto.vn/static/media/logo-full.ea382559.png" width={200} />
                                <h1 style={{ fontWeight: "700", fontSize: '42px' }}>Bạn muốn cho thuê xe?</h1>
                                <p style={{ fontSize: '19px', marginTop: '30px' }}>Hơn 5,000 chủ xe đang cho thuê hiệu quả trên Mioto<br />
                                    &nbsp;&nbsp;&nbsp; Đăng ký trở thành đối tác của chúng tôi ngay<br />  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;hôm nay để gia tăng thu nhập hàng tháng.</p>
                                <div>
                                    <a className='btn mx-2'>Tìm hiểu ngay</a>
                                    <a className='btn'>Đăng ký thuê xe</a>

                                </div>
                            </Col>
                            <Col lg={6} className="more1">
                                <img src="https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png" />
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>


            <div className='instruct3'>
                <Container>
                    <div className="more">
                        <Row>
                            <Col lg={6} className="more2">
                                <span className='icon'><i className="bi bi-phone"></i></span>

                                <h1 style={{ fontWeight: "700", fontSize: '42px', marginBottom: '60px' }}>Trải nghiệm trọn vẹn
                                    cùng <br />ứng dụng Mioto</h1>

                                <div>
                                    <img src='https://nhanhtravel.com/wp-content/uploads/2022/11/GG.png' width={200} />
                                    <img src='https://nhanhtravel.com/wp-content/uploads/2022/11/ios.png' width={200} />

                                </div>
                            </Col>
                            <Col lg={6} className="more1">
                                <img src="https://www.mioto.vn/static/media/dich_vu_cho_thue_oto_tu_lai.38588237.png" width={630} />
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

            <div className='blog'>
                <Container>
                    <h1 style={{ textAlign: 'center', fontSize: '62px', fontWeight: '600' }}>MIOTO Blog</h1>
                    <Row style={{ marginTop: '40px' }}>
                        <Col lg={4}>
                            <div className='cental1'>
                                <img src='https://n1-cstg.mioto.vn/g/2024/04/24/15/3I8R33E8.jpg' width={420} height={270} />
                                <div className='content'>
                                    <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '-2px' }}>24-05-2024</p>
                                    <p style={{ fontSize: '22px', fontWeight: '500' }}>Thuê xe ô tô tự lái du lịch mùa hè:  <br />Tự do khám phá và trải nghiệm thú vị</p>
                                </div>
                            </div>
                            <div className='cental2'>
                                <img src='https://n1-cstg.mioto.vn/g/2024/04/24/15/3I8R33E8.jpg' width={420} height={270} />
                                <div className='content'>
                                    <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '-2px' }}>29-02-2024</p>
                                    <p style={{ fontSize: '22px', fontWeight: '500' }}>Thuê xe ô tô tự lái: Du lịch sau lễ thảnh thơi đi muôn nơi</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} className='cental3'>
                            <img src='https://n1-cstg.mioto.vn/g/2024/00/24/15/61NBR2RZ.jpg' width={858} height={560} />
                            <div className='content'>
                                <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '-5px' }}>02-01-2024</p>
                                <p style={{ fontSize: '32px', fontWeight: '500' }}>Thuê xe ô tô tự lái: An tâm đưa gia đình đi muôn nơi dịp Tết Nguyên Đán</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>

    )
}
export default MainChild1;