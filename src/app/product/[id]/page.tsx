'use client'
import Image from "next/image"
import { Col, Row, Container } from "react-bootstrap";
import '../../../scss/product.scss'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from "react";
import { FreeMode, Thumbs } from 'swiper/modules';
import Modal from 'react-bootstrap/Modal';

// import { DatePicker } from "antd";
// import armchair from "../../img/armchair.png";
const Product = ({ params }: { params: { id: number } }) => {

    const [data, setData] = useState(null);
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
    //     fetch(`http://localhost:8000/products`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data);
    //         })
    // })
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    const handleClose = () => setShow(false);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);


    return (
        <div>
            {data?.map((item) => {
                if (item.id === params.id) {
                    return (
                        <div className="product" key={item.id}>
                            <Container>
                                <Row>
                                    <Col lg={8} className="eight">
                                        <img src={item.image1} width='100%' height={650} onClick={() => handleShow(values)} />
                                        <div className="title">
                                            <div className="name">
                                                <p style={{ fontSize: '35px', width: '500px', fontWeight: 600 }}>{item.name}</p>
                                                <div className="heart">
                                                    <i className="bi bi-share"></i>
                                                    <i className="bi bi-suit-heart"></i>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex' }}>
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                <li>Quận Bình Thạnh, TP. Hồ Chí Minh</li>
                                            </div>
                                            <p className="number">
                                                <span style={{ backgroundColor: '#eef7ff' }}>Số tự động</span>
                                                <span style={{ backgroundColor: '#dff5e7' }}>Giao xe tận nơi</span>
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="characteristic">
                                            <h4>Đặc điểm</h4>

                                            <Row>
                                                <Col lg={1}>
                                                    <Image src="/img/chair.png" width="50" height="40" alt="" />
                                                </Col>
                                                <Col lg={2}>
                                                    <p style={{ fontSize: '16px' }}>Số ghế &nbsp;<br />
                                                        <span style={{ fontSize: '20px' }}>5 chỗ</span></p>

                                                </Col>
                                                <Col lg={1}>
                                                    <Image src="/img/gear.png" width="50" height="40" alt="" />
                                                </Col>
                                                <Col lg={2}>
                                                    <p style={{ fontSize: '16px' }}>Truyền tự động &nbsp;<br />
                                                        <span style={{ fontSize: '20px', position: 'relative', bottom: '20px' }}>Số tự động</span></p>
                                                </Col>
                                                <Col lg={1}>
                                                    <Image src="/img/gas.png" width="50" height="40" alt="" />
                                                </Col>
                                                <Col lg={2}>
                                                    <p style={{ fontSize: '16px' }}>Nhiên liệu &nbsp;<br />
                                                        <span style={{ fontSize: '20px' }}>Điện</span></p>
                                                </Col>
                                                <Col lg={1}>
                                                    <Image src="/img/kan.png" width="50" height="40" alt="" />
                                                </Col>
                                                <Col lg={2}>
                                                    <p style={{ fontSize: '16px' }}>NL tiêu hao &nbsp;<br />
                                                        <span style={{ fontSize: '20px' }}>460 km /lần sạc</span></p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div>

                                        </div>

                                        <hr />

                                        <h4>Mô tả</h4>
                                        <p>xe gia đình sử dụng , nội thât nguyên bản , sạch sẽ , rộng rãi , bão dưỡng thường xuyên .</p>

                                        <hr />

                                        <h4>Các tiện nghi khác</h4>
                                        <div className="facilities flex-container">
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/map-v2.png" alt="" width={50} />Bản đồ</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth-v2.png" alt="" width={50} />Bluetooth</li>
                                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera-v2.png" alt="" width={50} />Camera hành trình</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera-v2.png" alt="" width={50} />Camera lùi</li>
                                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/tpms-v2.png" width={50} alt="" />Cảm biến lốp</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/impact_sensor-v2.png" alt="" width={50} />Cảm biến va chạm</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up-v2.png" width={50} alt="" />Cảnh báo tốc độ</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps-v2.png" width={50} alt="" />Định vị GPS</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb-v2.png" width={50} alt="" />Khe cắm USB</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire-v2.png" alt="" width={50} />Lốp dự phòng</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd-v2.png" width={50} alt="" />Màn hình DVD</li>
                                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc-v2.png" width={50} alt="" />ETC</li>
                                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags-v2.png" width={50} alt="" />Túi khí an toàn</li>

                                        </div>

                                        <hr />
                                        <h6 style={{ fontSize: '20px' }}>Giờ thuê xe ?</h6>
                                        <div className="time">
                                            <p>Chọn 1 trong 2 hình thức</p>
                                            <p>
                                                <i className="bi bi-person-vcard"></i>  GPLX (đối chiếu) & CCCD (đối chiếu VNeID)
                                            </p>
                                            <p>
                                                <i className="bi bi-passport"></i> GPLX (đối chiếu) & Passport (giữ lại)
                                            </p>
                                        </div>

                                        <h6 style={{ marginTop: '20px', fontSize: '20px' }}>Tài sản thế chấp</h6>
                                        <div className="text">
                                            <p>Không yêu cầu khách thuê thế chấp Tiền mặt hoặc Xe máy</p>
                                        </div>
                                        <div className="upan">
                                            <h4>Điều khoản</h4>
                                            <ul>
                                                Quy định khác:
                                                <li>Sử dụng xe đúng mục đích</li>
                                                <li>Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.</li>
                                                <li>Không sử dụng xe thuê để cầm cố, thế chấp.</li>
                                                <li>Không hút thuốc, nhả kẹo cao su, xả rác trong xe.</li>
                                                <li>Không chở hàng quốc cấm dễ cháy nổ</li>
                                                <li>Không chở hoa quả, thực phẩm nặng mùi trong xe.</li>
                                                <li>Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe.</li>

                                            </ul>
                                        </div>
                                        <div className="polite">
                                            <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>Chính sách huỷ chuyến</h4>
                                            <Table className="table" striped bordered hover size="xx">
                                                <thead>
                                                    <tr>

                                                        <th>Thời Điểm Hủy Chuyến</th>
                                                        <th>Khách Thuê Hủy Chuyến</th>
                                                        <th>Chủ Xe Hủy Chuyến</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td>
                                                            <p style={{ marginTop: '30px' }}>Trong Vòng 1h Sau Giữ Chỗ</p> </td>
                                                        <td>
                                                            <Image src="/img/stick.png" width="30" height="30" alt="" />
                                                            <p>Hoàn tiền giữ chỗ 100%</p> </td>
                                                        <td>
                                                            <Image src="/img/stick.png" width="30" height="30" alt="" />
                                                            <p> Không tốn phí<br />
                                                                (Đánh giá hệ thống 3*)</p></td>

                                                    </tr>
                                                    <tr>

                                                        <td>
                                                            <p style={{ marginTop: '30px' }}>Trước Chuyến Đi 7 Ngày</p></td>
                                                        <td>
                                                            <Image src="/img/stick.png" width="30" height="30" alt="" />
                                                            <p>Hoàn tiền giữ chỗ 70%</p>
                                                        </td>
                                                        <td>
                                                            <Image src="/img/stick.png" width="30" height="30" alt="" />
                                                            <p> Đền tiền 30%<br />
                                                                (Đánh giá hệ thống 3*)</p></td>
                                                    </tr>
                                                    <tr>
                                                        <td><p style={{ marginTop: '30px' }}>Trong Vòng 7 Ngày Trước Chuyến Đi</p></td>
                                                        <td >
                                                            <Image src="/img/cancel.png" width="30" height="30" alt="" />
                                                            <p> Không hoàn tiền</p></td>
                                                        <td>
                                                            <Image src="/img/cancel.png" width="30" height="30" alt="" />
                                                            <p> Đền tiền 100%<br />
                                                                (Đánh giá hệ thống 2*)</p></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <div style={{ color: "gray", fontSize: '12px' }}>
                                                <p>* Khách thuê không nhận xe sẽ không được hoàn tiền giữ chỗ</p>
                                                <p>* Chủ xe không giao xe sẽ hoàn và đền 100% tiền giữ chỗ cho bạn</p>
                                                <p>* Tiền giữ chỗ và tiền bồi thường do chủ xe hủy chuyến (nếu có) sẽ được Mioto hoàn trả đến bạn bằng chuyển khoản ngân hàng trong vòng 1-3 ngày làm việc</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="location grid-container">
                                            <h4 style={{ marginBottom: '20px' }}>Vị trí xe</h4>
                                            <div className="bi">
                                                <div>
                                                    <i className="bi bi-geo-alt-fill"></i> Quận Phú Nhuận, TP. Hồ Chí Minh
                                                </div>

                                                <div className="map">
                                                    <i className="bi bi-map"></i> Xem bản đồ <i className="bi bi-arrow-right-circle"></i>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }}>Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc</p>
                                        </div>
                                        <hr />
                                        <div className="person">
                                            <h4>Chủ xe</h4>
                                            <Row>
                                                <Col md={1}>
                                                    <img src="https://n1-astg.mioto.vn/g/2020/00/18/22/rgjxd8oBXoMhLk1jLYkbSw.jpg" width={70} alt="" />
                                                </Col>
                                                <Col md={3}>
                                                    <p style={{ fontSize: '20px', fontWeight: '500', color: 'black' }}>
                                                        Nguyen Hoang Vinh
                                                    </p>
                                                    <div style={{ display: 'flex', fontSize: '13px' }}>
                                                        <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                        <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                    </div>
                                                </Col>
                                                <Col md={1}>

                                                </Col>
                                                <Col md={2}>
                                                    <p>Tỉ lệ phản hồi</p>
                                                    <span>100%</span>
                                                </Col>
                                                <Col md={3}>
                                                    <p>Thời gian phản hồi</p>
                                                    <span>5 phút</span></Col>
                                                <Col md={2}>
                                                    <p>Tỉ lệ đồng ý</p>
                                                    <span>83%</span></Col>
                                            </Row>
                                            <div style={{ display: 'flex', fontSize: '16px', marginTop: '10px' }}>
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> &nbsp;5.0 &nbsp;
                                                <li>4 Đánh giá</li>
                                            </div>
                                        </div>

                                        <div className="rate grid-container">
                                            <div className="item1">
                                                <img src="https://n1-cstg.mioto.vn/m/avatars/avatar-1.png" width={90} />
                                            </div>
                                            <div className="item2">
                                                <p>Nguyễn Trọng Đạt</p>
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                            </div>
                                            <div className="item3"></div>
                                            <div className="item4">10/05/2024</div>
                                        </div>
                                        <div className="rate grid-container">
                                            <div className="item1">
                                                <img src="https://n1-cstg.mioto.vn/m/avatars/avatar-4.png" width={90} />
                                            </div>
                                            <div className="item2">
                                                <p>Văn Xuân Tiến</p>
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                                <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i>&nbsp;
                                            </div>
                                            <div className="item3"></div>
                                            <div className="item4">10/05/2024</div>
                                        </div>
                                        <div className="extra">
                                            <a className="btn">Xem thêm</a>
                                        </div>
                                    </Col>
                                    <Col lg={4} className="ford">
                                        <img src={item.image2} width='100%' height={220} onClick={() => handleShow(values)} />
                                        <img src={item.image3} width='100%' height={220} onClick={() => handleShow(values)} />
                                        <img src={item.image4} width='100%' height={220} onClick={() => handleShow(values)} />

                                        <div className="insurance">
                                            <Row>

                                                <Col md={1}><img src='https://www.mioto.vn/static/media/insurance-polish.f54e308a.svg' width={40} style={{ marginTop: '5px' }} /></Col>
                                                <Col md={11} style={{ paddingLeft: '15px' }}>
                                                    <h6 style={{ marginTop: '10px', fontSize: '18px', color: '#5fcf86' }}>Bảo hiểm thuê xe VNI</h6>
                                                    <p style={{ fontSize: '15px' }}>Chuyến đi có mua bảo hiểm. Khách thuê bồi thường<br /> tối đa 2.000.000 VNĐ trong trường hợp có sự <br />cố ngoài ý muốn.</p>
                                                    <a style={{ color: 'black' }}>Xem chi tiết</a>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="payment">
                                            <div style={{ display: 'flex', paddingTop: ' 10px' }}>
                                                <del>{item.price}K</del>
                                                <div className="sale">
                                                    <span>-{item.discount * 100}%</span>
                                                </div>
                                            </div>

                                            <h4 style={{ fontSize: '30px', fontWeight: 600 }}>{item.price - (item.price * item.discount)}K /ngày</h4>
                                            <div className="date">
                                                <Row className="booking">
                                                    <Col xs={6} className="sc">
                                                        <p>Nhận xe</p>
                                                        <p style={{ fontWeight: 500 }}>15/06/2024 21:00</p>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <p>Trả xe</p>
                                                        <p style={{ fontWeight: 500 }}>15/06/2024 21:00</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="locate">
                                                <p>Địa điểm giao xe</p>
                                                <h6>Quận Bình Thạnh, TP. Hồ Chí Minh</h6>
                                                <p style={{ color: 'gray', fontSize: '12px' }}>Rất tiếc, chủ xe không hỗ trợ giao xe tận nơi</p>
                                            </div>
                                            <hr />
                                            <div className="price">
                                                <p>Đơn giá thuê</p><span>574 000đ/ ngày</span>
                                                <p>Bảo hiểm thuê xe</p>  <span style={{ marginLeft: '10px' }}>56 500đ/ ngày</span>
                                            </div>
                                            <hr style={{ marginTop: '-5px ' }} />
                                            <div className="total">
                                                <p>Tổng cộng</p><span>630 500đ x 1 ngày</span>
                                            </div>
                                            <hr style={{ marginTop: '-5px ' }} />
                                            <div className="code">
                                                <div className="show">
                                                    <Form style={{ position: 'relative', marginRight: '-20px' }}>
                                                        {['radio'].map((type) => (
                                                            <div key={`default-${type}`} className="mb-3">
                                                                <Form.Check // prettier-ignore
                                                                    type={type}
                                                                    id={`default-${type}`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                    <Image src="/img/code1.png" alt="" width={40} height={30} style={{ position: 'relative', marginRight: '-20px' }} />
                                                    <p style={{ fontSize: '18px' }}>Chương trình giảm giá</p>
                                                    <span style={{ marginRight: '-70px', fontWeight: 700 }}>-120 000đ</span>
                                                </div>
                                                <p style={{ fontSize: '12px', marginTop: '-16px' }}>Giảm 120k trên đơn giá</p>

                                                <div className="show2">
                                                    <Form style={{ position: 'relative', marginRight: '-20px' }}>
                                                        {['radio'].map((type) => (
                                                            <div key={`default-${type}`} className="mb-3">
                                                                <Form.Check // prettier-ignore
                                                                    type={type}
                                                                    id={`default-${type}`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                    <Image src="/img/code2.png" alt="" width={40} height={30} style={{ position: 'relative', marginRight: '-20px' }} />
                                                    <p style={{ fontSize: '18px' }}>Mã khuyến mãi</p>
                                                    <Image src="/img/arrow.png" width={30} height={30} alt='' style={{ position: 'absolute', fontWeight: 700, right: '340px' }} />
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="money">
                                                <p>Thành tiền</p>
                                                <p className="sum">1 630 500đ</p>
                                            </div>
                                            <button style={{
                                                color: 'white', backgroundColor: '#5fcf86', height: '70px',
                                                borderRadius: '10px', width: '370px', fontWeight: '500', border: 'none',
                                                boxShadow: '0 3px 8px 0 rgba(0,0,0,0.2), 0 3px 8px 0 rgba(0,0,0,0.19)'
                                            }}>CHỌN THUÊ</button>
                                        </div>

                                        <div className="free">
                                            <h6 style={{ color: '#5fcf86' }}>Phụ phí có thể phát sinh</h6>
                                            <div className="text">
                                                <i className="bi bi-exclamation-lg"></i>
                                                <p style={{ marginLeft: '10px' }}>Phí vượt giới hạn</p>
                                                <span style={{ marginLeft: '186px', fontWeight: 700 }}>4 000đ/km</span>
                                            </div>
                                            <p style={{ color: ' gray' }}>Phụ phí phát sinh nếu lộ trình di chuyển vượt quá 350km khi thuê xe 1 ngày</p>
                                        </div>
                                        <div className="report">
                                            <a className="btn"><i className="bi bi-flag-fill"></i> Báo cáo xe này</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <div className="choose">
                                <Container style={{ paddingTop: '30px' }}>
                                    <h4 >Xe tương tự</h4>
                                    <div className="custom-pre">
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </div>
                                    <div>
                                        <Swiper
                                            spaceBetween={100}
                                            centeredSlides={false}
                                            slidesPerView={4}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}
                                            modules={[Navigation]}
                                            className="mySwiper1"
                                        >
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
                                                    <Card.Body>
                                                        <Card.Subtitle className="mb-2 text-muted ">
                                                            <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2021/p/g/2024/04/15/15/yJaEBC_wEiKG0dMtSqM0wg.jpg' width={290} height={240} />
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
                                                    <Card.Body>
                                                        <Card.Subtitle className="mb-2 text-muted ">
                                                            <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2013/p/g/2024/00/02/10/aCOk6958ZDKil-pcV-W7gQ.jpg' width={290} height={240} />
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
                                                    <Card.Body>
                                                        <Card.Subtitle className="mb-2 text-muted ">
                                                            <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2023/p/g/2023/10/15/20/-r6KjPeT-tYrGny7VLqdig.jpg' width={290} height={240} />
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
                                                    <Card.Body>
                                                        <Card.Subtitle className="mb-2 text-muted ">
                                                            <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2018/p/g/2022/01/18/10/40JtODZfo8Id1CIh6buKkw.jpg' width={290} height={240} />
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Card style={{ width: '21rem', height: '28rem' }}>
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
                                                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '5px', textAlign: 'center' }}>KIA K3 PREMEUM 2022</p>
                                                        <p style={{ fontSize: '16px', textAlign: 'center', marginTop: '-5px' }}><i className="bi bi-geo-alt"></i> &nbsp;Quận Bình Thạnh, TP.Hồ Chí Minh</p>

                                                        <hr style={{ marginTop: '-10px' }} />
                                                        <div style={{ fontSize: '14px', marginTop: '-10px', textAlign: 'center' }}>
                                                            <i className="bi bi-star-fill" style={{ display: 'inline-block', color: 'orange' }}></i> 5.0&nbsp;&nbsp;
                                                            <i className="bi bi-suitcase-fill" style={{ display: 'inline-block', color: '#5fcf86' }}></i>39 chuyến
                                                            <del style={{ marginLeft: '10px', fontWeight: '500', color: 'gray' }}>530k</del>
                                                            <span style={{ color: '#5fcf86', fontWeight: '500', fontSize: '18px', marginLeft: '5px' }}>979K</span>/ngày
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </SwiperSlide>

                                        </Swiper>
                                    </div>
                                </Container>

                            </div>
                            {/* zooommm                  */}
                            <div className="zoom" >

                                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}  >
                                    <Modal.Header style={{ backgroundColor: 'rgba(12, 12, 12, .5)', border: 'none', zIndex: '1082', position: 'absolute', left: '0', top: '0', width: '100%', height: '50px' }}>
                                        <a className="btn" style={{ color: 'white', fontSize: '22px', fontWeight: '500', position: 'relative', left: '1800px' }} onClick={handleClose} >X</a>
                                    </Modal.Header>

                                    <Modal.Body style={{ backgroundColor: 'black' }}>
                                        <div className="custom-pres">
                                            <div className="swiper-button-next"><i className="bi bi-arrow-right-circle-fill"></i></div>
                                            <div className="swiper-button-prev"><i className="bi bi-arrow-left-circle-fill"></i></div>
                                        </div>
                                        <Swiper

                                            loop={true}
                                            spaceBetween={10}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}
                                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                            style={{ position: 'relative', width: '1100px', height: '750px', bottom: '16px' }}>
                                            <SwiperSlide>
                                                <img src={item.image1} width={1000} height={750} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={item.image2} width={1000} height={750} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={item.image3} width={1000} height={750} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src={item.image4} width={1000} height={750} />
                                            </SwiperSlide>
                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            loop={true}
                                            spaceBetween={30}
                                            slidesPerView={15}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                            style={{ height: '200px' }}>
                                            <SwiperSlide style={{ width: '120px', borderRadius: '10px', top: '7px' }}>
                                                <img src={item.image1} width={120} height={100} style={{ border: '1px solid white', borderRadius: '10px' }} />
                                            </SwiperSlide>
                                            <SwiperSlide style={{ width: '120px', borderRadius: '20px', top: '7px' }}>
                                                <img src={item.image2} width={120} height={100} style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '-40px' }} />
                                            </SwiperSlide>
                                            <SwiperSlide style={{ width: '120px', borderRadius: '20px', top: '7px' }}>
                                                <img src={item.image3} width={120} height={100} style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '-40px' }} />
                                            </SwiperSlide>
                                            <SwiperSlide style={{ width: '120px', borderRadius: '20px', top: '7px' }}>
                                                <img src={item.image4} width={120} height={100} style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '-40px' }} />
                                            </SwiperSlide>
                                        </Swiper>

                                    </Modal.Body>

                                </Modal>

                            </div>
                        </div >
                    )
                }
            })}
        </div >
    )
}
export default Product;
