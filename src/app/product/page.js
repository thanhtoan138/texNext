import { Col, Row, Container } from "react-bootstrap";
import '../../scss/product.scss'
import RightOutlined from 'antd';
const Product = () => {
    return (
        <div className="product">
            <Container>
                <Row>
                    <Col lg={8} className="eight">
                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/07/07/-0DmQmL7rrXcNMAUiPOJTQ.jpg' width='100%' height={650} />
                        <div className="title">
                            <div className="name">
                                <p style={{ fontSize: '35px', width: '500px', fontWeight: 600 }}>MITSUBISHI XPANDER 2020</p>
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
                            <h6>Đặc điểm</h6>
                            <Row>
                                <Col lg={3}>
                                    <i className="bi bi-star-fill"></i>
                                    so ghe<br/>
                                    5 cho
                                </Col>
                                <Col lg={3}>
                                    <i className="bi bi-star-fill"></i>
                                    so ghe<br/>
                                    5 cho
                                </Col>
                                <Col lg={3}>
                                    <i className="bi bi-star-fill"></i>
                                    so ghe<br/>
                                    5 cho
                                </Col>
                                <Col lg={3}>
                                    <i className="bi bi-star-fill"></i>
                                    so ghe<br/>
                                    5 cho
                                </Col>
                            </Row>
                        </div>

                        <hr />

                        <h6>Mô tả</h6>
                        <p>xe gia đình sử dụng , nội thât nguyên bản , sạch sẽ , rộng rãi , bão dưỡng thường xuyên .</p>
                        
                        <hr/>

                        <h6>Các tiện nghi khác</h6>
                        <div className="facilities flex-container">
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/map-v2.png"/>Bản đồ</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/bluetooth-v2.png"/>Bluetooth</li>
                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/dash_camera-v2.png"/>Camera hành trình</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/reverse_camera-v2.png"/>Camera lùi</li>
                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/tpms-v2.png"/>Cảm biến lốp</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/impact_sensor-v2.png"/>Cảm biến va chạm</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/head_up-v2.png"/>Cảnh báo tốc độ</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/gps-v2.png"/>Định vị GPS</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/usb-v2.png"/>Khe cắm USB</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/spare_tire-v2.png"/>Lốp dự phòng</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/dvd-v2.png"/>Màn hình DVD</li>
                            <li><img src="https://n1-cstg.mioto.vn/v4/p/m/icons/features/etc-v2.png"/>ETC</li>
                            <li><img src="	https://n1-cstg.mioto.vn/v4/p/m/icons/features/airbags-v2.png"/>Túi khí an toàn</li>

                        </div>

                        <hr/>
                        <h6 style={{fontSize:'20px'}}>Giờ thuê xe ?</h6>
                        <div className="time">
                            <p>Chọn 1 trong 2 hình thức</p>
                            <p>
                            <i className="bi bi-person-vcard"></i>  GPLX (đối chiếu) & CCCD (đối chiếu VNeID)
                            </p>
                            <p>
                            <i className="bi bi-passport"></i> GPLX (đối chiếu) & Passport (giữ lại)
                            </p>
                        </div>

                        <h6
                        style={{marginTop:'20px', fontSize:'20px'}}>Tài sản thế chấp</h6>
                        <div className="text">
                            <p>Không yêu cầu khách thuê thế chấp Tiền mặt hoặc Xe máy</p>
                           
                        </div>
                    </Col>
                    <Col lg={4} className="ford">
                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/08/05/8-IO0XFaFbtHQGobzkSRQQ.jpg' width='100%' height={220} />
                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/08/11/0cnlCl-0Y5hKx8Xqp0XqBg.jpg' width='100%' height={220} />
                        <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/07/07/AAHTS_Y2GqMhBg2dy3Jjxw.jpg' width='100%' height={220} />
                        
                        <div className="insurance">
                            <Row>
                               
                                <Col md={1}><img src='https://www.mioto.vn/static/media/insurance-polish.f54e308a.svg' width={40} style={{marginTop:'5px'}}/></Col>
                                <Col md={11} style={{paddingLeft:'15px'}}>
                                    <h6 style={{marginTop:'10px', fontSize:'18px', color:'#5fcf86'}}>Bảo hiểm thuê xe VNI</h6>
                                    <p style={{fontSize:'15px'}}>Chuyến đi có mua bảo hiểm. Khách thuê bồi thường<br/> tối đa 2.000.000 VNĐ trong trường hợp có sự <br/>cố ngoài ý muốn.</p>
                                    <a style={{color:'black'}}>Xem chi tiết</a>
                                </Col>
                            </Row>
                        </div>

                        <div className="payment">
                             <h4>574K /ngày</h4>
                             <div className="date">
                                    <Row>
                                        <Col xs={6}>
                                            <p>Nhận xe</p>
                                            <p>15/06/2024 21:00</p>
                                        </Col>
                                        <Col xs={6}>
                                            <p>Trả xe</p>
                                            <p>15/06/2024 21:00</p>
                                        </Col>
                                    </Row>       
                            </div>
                            <div className="locate">
                                  <p>Địa điểm giao xe</p>
                                  <h6>Quận Bình Thạnh, TP. Hồ Chí Minh</h6> 
                                  <p>Rất tiếc, chủ xe không hỗ trợ giao xe tận nơi</p> 
                            </div>  
                            <hr/>  
                            <div>
                                <p>Đơn giá thuê  <span>574 000đ/ ngày</span></p>
                                <p>Bảo hiểm thuê xe  <span>56 500đ/ ngày</span></p>
                            </div>
                            <hr/>
                            <div>
                                <p>Tổng cộng <span>630 500đ x 1 ngày</span></p>
                            </div>
                            <div>
                                <p>Mã khuyến mãi</p>
                            </div>
                            <div>
                                <p>Thành tiền</p>
                                <p>630 500đ</p>
                            </div>
                           <a style={{backgroundColor:'#5fcf86'}}>Chọn thuê</a>
                           
                        </div>
                      
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}
export default Product;