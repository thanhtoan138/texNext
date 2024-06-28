'use client'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../scss/infor.scss'
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import { useEffect, useState } from 'react';

const Infor = () => {
    const [user, setUsers] = useState(null);
    useEffect(() => {
        const u = localStorage.getItem('user');
        const value = !!u ? JSON.parse(u) : undefined;
        setUsers(value);
    }, [])
    return (

        <div className="account">
            {user && (
                <>
                    <div className="infor">

                        <Row>
                            <Col lg={4}>
                                <div className='title'>
                                    <h5>Thông tin tài khoản</h5>
                                    <i className="bi bi-pencil"></i>
                                </div>
                                <img src='https://n1-cstg.mioto.vn/m/avatars/avatar-1.png' alt='' width={170} />
                                <p style={{ fontWeight: 600, marginLeft: '35px' }}>{user.username}</p>
                                <p style={{ fontSize: '13px', marginLeft: '15px' }}>Tham gia: 13/06/2024</p>
                                <div className='marks'>
                                    <Image src="/img/medal.png" width={25} height={25} alt='' />
                                    <b>&nbsp;0 điểm</b>
                                </div>
                            </Col>
                            <Col lg={8}>

                                <div>
                                    <div className='icon flex-container'>
                                        <p><i className="bi bi-suitcase-fill"></i>0</p>
                                        <span>&nbsp; Chuyến</span>
                                    </div>
                                    <div className='bons'>
                                        <Row>
                                            <Col md={3}><p>Ngày sinh</p></Col>
                                            <Col md={3}></Col>
                                            <Col md={4}></Col>
                                            <Col md={2}> <span style={{ marginLeft: '-26px' }}>{user.bonse}</span><br /></Col>


                                            <Col md={3}> <p>Giới tính</p></Col>
                                            <Col md={3}></Col>
                                            <Col md={4}></Col>
                                            <Col md={2}><span>&nbsp;&nbsp;Nam</span><br /></Col>
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
                                                <p style={{ marginLeft: '13px' }}>{user.phone} <i className="bi bi-pencil"></i></p>
                                                <p style={{ marginLeft: '120px' }}>{user.email}<i className="bi bi-pencil"></i></p>
                                                <p>&nbsp;&nbsp;&nbsp;Thêm liên kết <i className="bi bi-link-45deg"></i></p>
                                                <p>&nbsp;&nbsp;&nbsp;Thêm liên kết <i className="bi bi-link-45deg"></i></p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                        </Row>

                    </div>

                    <div className='gplx'>
                        <div className='title'>
                            <h5>Giấy phép lái xe</h5>
                            <div className='imgs'>
                                <Image src='/img/dot.png' alt='' width={15} height={15} />
                                <p>Chưa xác thực</p>
                            </div>
                            <div className='edit'>
                                <a>Chỉnh sửa <i className="bi bi-pencil"></i></a>
                            </div>
                        </div>
                        <div className='note'>
                            <p> <span style={{ fontWeight: 500 }}>Lưu ý: </span>để tránh phát sinh vấn đề trong quá trình thuê xe, <span style={{ textDecoration: 'underline' }}>người đặt xe </span>
                                trên Mioto (đã xác thực GPLX) <span style={{ fontWeight: 500 }}>ĐỒNG THỜI</span> phải là <span style={{ textDecoration: 'underline' }}>người nhận xe.</span></p>
                        </div>
                        <Row className='update'>
                            <Col lg={6}>
                                <h5>Hình ảnh</h5>
                                <div className="imageBox">
                                    <div className="imageInn">
                                        <Image src='/img/update.png' width={80} height={50} alt='' />
                                    </div>
                                    <div className="hoverImg">
                                        <Image src='/img/camera.png' width={80} height={50} alt='' />
                                    </div>
                                </div>

                            </Col>
                            <Col lg={6}>
                                <h5>thông tin chung</h5>
                                <Form.Group>
                                    <Form.Label className='mt-2' style={{ color: 'gray', }}>Số GPLX</Form.Label>
                                    <Form.Control
                                        type="text"
                                        aria-describedby="passwordHelpBlock"

                                        style={{ color: 'gray', width: '385px' }}
                                    />

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='mt-2' style={{ color: 'gray' }}>Họ và tên</Form.Label>
                                    <Form.Control
                                        type="text"

                                        aria-describedby="passwordHelpBlock"

                                        style={{ color: 'gray', width: '385px' }}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='mt-2' style={{ color: 'gray' }}>Ngày sinh</Form.Label>
                                    <Form.Control
                                        type="text"
                                        aria-describedby="passwordHelpBlock"

                                        style={{ color: 'gray', width: '385px' }}
                                    />
                                </Form.Group>

                            </Col>
                            <p style={{ fontSize: '12px' }}>Vì sao tôi phải xác thực GPLX ?</p>
                        </Row>
                    </div>
                    <div className='intro'>
                        <Row>
                            <Col lg={4} className='title'>
                                <h4>Giới thiệu bạn mới</h4>
                                <p>Tìm hiểu chi tiết chương trình ?</p>
                            </Col>
                            <Col lg={8}>
                                <img src='https://www.mioto.vn/static/media/banner.9bfc25cb.png' width={530} height={360} alt='' />
                            </Col>
                        </Row>
                    </div>
                    <div className='cards'>
                        <div className='flex-container'>
                            <p style={{ fontSize: '24px', fontWeight: 500 }}>Thẻ của tôi</p>
                            <a className='btn'>Thêm thẻ <i className="bi bi-plus-circle"></i></a>
                        </div>
                        <img src='https://www.mioto.vn/static/media/my-card.c94c4868.svg' height={370} width={370} />
                        <p style={{ textAlign: 'center', fontSize: '24px', color: 'gray', fontWeight: 500 }}>Bạn chưa có thẻ nào</p>
                    </div>

                    <div className='list-cards'>
                        <div className='flex-container'>
                            <p style={{ fontSize: '24px', fontWeight: 500 }}>Danh sách xe</p>
                            <div className='tax'>


                                <Tabs
                                    defaultActiveKey="profile"
                                    id="fill-tab-example"
                                    className="mb-3"
                                    variant="underline"
                                >
                                    <Tab eventKey="home" title="Có tài xế">
                                    </Tab>
                                    <Tab eventKey="profile" title="Tự lái">
                                    </Tab>
                                </Tabs>

                            </div>

                        </div>
                        <img src='https://www.mioto.vn/static/media/empty-mycar.e023e681.svg' height={370} width={370} />
                        <p style={{ fontSize: '24px', color: 'gray', fontWeight: 500, marginLeft: '350px' }}>Không tìm thấy xe nào.</p>
                    </div>
                </>
            )}
        </div>

    )
}
export default Infor;