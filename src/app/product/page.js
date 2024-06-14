import { Col, Row, Container } from "react-bootstrap";
import '../../scss/product.scss'
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
                                    <i class="bi bi-share"></i>
                                    <i class="bi bi-suit-heart"></i>
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
                    </Col>
                    <Col lg={4} className="ford">
                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/08/05/8-IO0XFaFbtHQGobzkSRQQ.jpg' width='100%' height={220} />
                        <img src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/08/11/0cnlCl-0Y5hKx8Xqp0XqBg.jpg' width='100%' height={220} />
                        <img src='	https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2020/p/g/2023/10/07/07/AAHTS_Y2GqMhBg2dy3Jjxw.jpg' width='100%' height={220} />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Product;