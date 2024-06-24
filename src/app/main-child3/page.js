'use client';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import "../../scss/nav3.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
const MainChild3 = () => {

    return (

        <div className='main3 w-100'>
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
                        <Nav variant="pills" defaultActiveKey="/main-child1">
                            <Nav.Item className='nav-pill-c' style={{ borderRadius: '10px 0px 0px 0px' }}>
                                <Nav.Link as='li' className='nav-link' eventKey="link-1">
                                    <Link href='/main-child1' style={{ textDecoration: 'none', color: 'rgb(90, 88, 88)', fontSize: '22px', fontWeight: 700, }}>
                                        <i className="bi bi-car-front-fill"></i>&nbsp;Xe tự lái
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-pill-c'>
                                <Nav.Link className='nav-link' as='li' eventKey="link-2">
                                    <Link href='/main-child2' style={{ textDecoration: 'none', color: 'rgb(90, 88, 88)', fontSize: '22px', fontWeight: 700 }}>
                                        <i className="bi bi-bus-front-fill"></i>
                                        &nbsp;Xe có tài xế
                                    </Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-pill-c' style={{ borderRadius: '0px 10px 0px 0px' }}>
                                <Nav.Link className='nav-link' as='li' eventKey="link-3">
                                    <Link href='/main-child3' style={{ textDecoration: 'none', color: 'rgb(90, 88, 88)', fontSize: '22px', fontWeight: 700 }} >
                                        <i className="bi bi-bus-front-fill"></i>
                                        &nbsp;Thuê xe dài hạn;

                                    </Link>
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='main-header bg-light'>
                    <Row>
                        <Col md={10} className='tp'>
                            <p style={{ color: 'gray' }}>
                                <i className="bi bi-geo-alt-fill"></i>
                                &nbsp; &nbsp;Địa điểm áp dụng hiện tại
                            </p>
                            <h4>TP. Hồ Chí Minh</h4>
                        </Col>
                        <Col md={2}>
                            <button style={{
                                color: 'white', backgroundColor: '#5fcf86', height: '70px',
                                border: '1px solid white', borderRadius: '10px', width: '86px', fontWeight: '500', marginTop: '40px', marginLeft: '200px'
                            }}><Link href='/list-car' style={{ textDecoration: 'none', color: 'white' }}>Tìm xe</Link></button>

                        </Col>
                    </Row>
                </div>
                <div className='micar'>
                    <Row>
                        <Col lg={7}>
                            <h1 style={{ fontWeight: 700, fontSize: '54px' }}>MiCar - đối tác thuê xe dài hạn của MIOTO</h1>
                            <p style={{ marginTop: '20px', lineHeight: '40px' }}>Từ nhu cầu sử dụng xe để phục vụ việc đi lại, công tác… cũng như những ưu<br /> điểm vượt
                                trội về sự tiện lợi, tính kinh tế so với việc mua xe, MiCar nay chính <br />thức ra mắt
                                dịch vụ thuê xe dài hạn. Là đối tác tin cậy đến từ MIOTO, MiCar<br /> thừa hưởng bề dày
                                kinh nghiệm trong lĩnh vực cho thuê xe cũng như nguồn<br /> xe chất lượng và uy tín.
                                MiCar không ngừng
                                tối ưu hoá dịch vụ đồng thời đưa <br />ra các chính sách và ưu đãi hết sức hấp dẫn nhằm
                                mang đến cho cho quý khách hàng trải nghiệm thuê xe tuyệt vời như xe nhà.</p>

                        </Col>
                        <Col lg={5}>
                            <img src='https://www.mioto.vn/static/media/bg_about.86355b12.png' />
                        </Col>
                    </Row>
                </div>
                <div className='long-time'>
                    <h1 style={{ fontWeight: '700', textAlign: 'center' }}>Ưu điểm thuê xe dài hạn MiCar</h1>
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
                            <p style={{ marginLeft: '40px', marginTop: '10px' }}>Thủ tục đơn giản</p>

                        </Col>
                        <Col lg={3} style={{ marginTop: '10px' }}>
                            <p>Không tốn phí bảo hiểm,<br />
                                phí đường bộ và phí bảo dưỡng xe</p>
                        </Col>
                        <Col lg={3} style={{ marginTop: '10px' }}>
                            <p>Không lo xe bị mất giá <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hằng năm</p>
                        </Col>
                        <Col lg={3} style={{ marginTop: '10px' }}>
                            <p>Dịch vụ giao xe và bảo<br /> dưỡng tận nhà miễn phí</p>
                        </Col>

                    </Row>

                    <Row className="title-f">
                        <div>
                            <img src="https://www.mioto.vn/static/media/advantage5.7eefbac7.svg" />
                            <p>Không cần đi vay, không lo<br /> áp lực trả lãi</p>
                        </div>
                        <div>
                            <img src="https://www.mioto.vn/static/media/advantage6.fdba2da7.svg" />
                            <p>Linh động thời gian, sử dụng<br /> theo nhu cầu</p>
                        </div>
                        <div>
                            <img src="https://www.mioto.vn/static/media/advantage7.86a51da5.svg" />
                            <p>Trải nghiệm nhiều dòng xe<br /> khác nhau theo ý muốn</p>
                        </div>

                    </Row>
                </div>

            </Container>

        </div>

    )
}
export default MainChild3;