import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../scss/infor.scss'
import Image from 'next/image';
const Infor = () => {
    return (
        <div className="account">
            <div className="infor">
                <Row>
                    <Col lg={4}>
                        <div className='title'>
                            <h5>Thông tin tài khoản</h5>
                            <i className="bi bi-pencil"></i>
                        </div>
                        <img src='https://n1-cstg.mioto.vn/m/avatars/avatar-1.png' alt='' width={170} />
                        <p style={{ fontWeight: 600, marginLeft: '45px' }}>nguyen te</p>
                        <p style={{ fontSize: '13px', marginLeft: '15px' }}>Tham gia: 13/06/2024</p>
                        <div className='marks'>
                            <Image src="/img/medal.png" width={25} height={25} />
                            <b>&nbsp;0 điểm</b>
                        </div>

                    </Col>
                    <Col lg={8}>
                        <div className='icon flex-container'>
                            <p><i className="bi bi-suitcase-fill"></i>0</p>
                            <span>&nbsp; Chuyến</span>
                        </div>
                        <div className='bons'>
                            <Row>
                                <Col md={3}><p>Ngày sinh</p></Col>
                                <Col md={3}></Col>
                                <Col md={4}></Col>
                                <Col md={2}> <span>../../../</span><br /></Col>


                                <Col md={3}> <p>Giới tính</p></Col>
                                <Col md={3}></Col>
                                <Col md={4}></Col>
                                <Col md={2}> <span>&nbsp;&nbsp;Nam</span><br /></Col>
                            </Row>
                        </div>
                        <div className='contact'>
                            <Row>
                                <Col md={6}>
                                    <div className='sdt'>
                                        <p>Số điện thoại</p>
                                        <div className='sdt-child' >
                                            <Image src='/img/i.png' alt='' width={17} height={17} />
                                            <p>&nbsp;Xác minh</p>
                                        </div>
                                    </div>

                                    <div className='email'>
                                        <p>Email</p>
                                        <div className='email-child'>
                                            <Image src='/img/i.png' alt='' width={17} height={17} />
                                            <p>&nbsp;Xác minh</p>
                                        </div>
                                    </div>
                                    <p>Facebook</p>
                                    <p>Google</p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={1}></Col>
                                <Col md={4} style={{ fontWeight: 500 }}>
                                    <p>+8495952324 <i className="bi bi-pencil"></i></p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thêm email <i className="bi bi-pencil"></i></p>
                                    <p>&nbsp;&nbsp;&nbsp;Thêm liên kết <i className="bi bi-link-45deg"></i></p>
                                    <p>&nbsp;&nbsp;&nbsp;Thêm liên kết <i className="bi bi-link-45deg"></i></p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='gplx'>
                <div className='title'>
                    <h5>Giấy phép lái xe</h5>
                    <div className=''>
                        <Image src='/img/dot.png' alt='' width={15} height={15} />
                        <p>Chưa xác thực</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Infor;