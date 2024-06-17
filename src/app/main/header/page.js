'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '../../../scss/header.scss';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Header = () => {


    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShow = () => setShow(true);
    const handleShowRegister = () => setShowRegister(true);


    return (
        <div className='header w-100'>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link href='/'>
                            <img src='https://www.mioto.vn/static/media/logo-full.ea382559.png' alt='' width={200} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='ntext'>
                            Về Mioto
                        </Navbar.Text>
                        <Navbar.Text className='ntext'>
                            Trở thành chủ xe
                        </Navbar.Text>
                        <Navbar.Text className='ntext'>
                            <span>|</span>
                        </Navbar.Text>
                        <Navbar.Text className='ntext'>
                            <a onClick={handleShowRegister}>Đăng ký</a>
                        </Navbar.Text>
                        <Navbar.Text >
                            <a className='dn btn' onClick={handleShow}>Đăng nhập</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Container>
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
                                <Link className="nav-link" href='/main-child1' style={{ textDecoration: 'none', color: 'white' }}>
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
            </Container> */}


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <a variant="secondary" onClick={handleClose} style={{
                    marginLeft: '430px', marginRight: '28px', fontSize: '15px', borderRadius: '100%',
                    paddingLeft: '17px', paddingTop: '10px', paddingBottom: '7px', backgroundColor: 'rgb(231, 231, 229)', fontWeight: '500'
                }}>
                    X
                </a>

                <Modal.Body>
                    <h4 style={{ textAlign: 'center', marginBottom: '25px' }}>Đăng nhập</h4>
                    <div className='form'>
                        <Form.Label htmlFor="sdt">Số điện thoại hoặc email</Form.Label>
                        <Form.Control
                            type="text"
                            id="sdt"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="inputPassword5" style={{ marginTop: '10px' }}>Mật khẩu </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"

                        />
                        <i className="bi bi-eye-slash" style={{ position: 'relative', bottom: '30px', left: '437px' }}></i>

                        <p style={{ marginLeft: '330px', marginTop: '10px', color: 'rgb(95, 207, 134)' }}>Quên mật khẩu?</p>
                        <a className='dn btn '>Đăng nhập</a>
                        <p style={{ textAlign: 'center', paddingTop: '10px' }}>Bạn chưa là thành viên? <span style={{ color: 'rgb(95, 207, 134)', fontWeight: "500" }}>Đăng ký ngay</span></p>
                        <div className='equal'>
                            <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
                            <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>

            {/* regíster */}

            <Modal
                show={showRegister}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <a variant="secondary" onClick={handleCloseRegister} style={{
                    marginLeft: '430px', marginRight: '28px', fontSize: '15px', borderRadius: '100%',
                    marginTop: '27px', paddingLeft: '17px', paddingTop: '10px', paddingBottom: '7px', backgroundColor: 'rgb(231, 231, 229)', fontWeight: '500'
                }}>
                    X
                </a>

                <Modal.Body style={{ height: '700px' }}>
                    <h4 style={{ textAlign: 'center', marginBottom: '25px', }}>Đăng ký</h4>
                    <div className='form2 '>
                        <Form.Label htmlFor="sdt">Số điện thoại</Form.Label>
                        <Form.Control
                            type="text"
                            id="sdt"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="sdt">Tên hiển thị</Form.Label>
                        <Form.Control
                            type="text"
                            id="sdt"
                            aria-describedby="passwordHelpBlock"
                        />

                        <Form.Label htmlFor="inputPassword5" style={{ marginTop: '10px' }}>Mật khẩu </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"

                        />

                        <Form.Label htmlFor="inputPassword5" style={{ marginTop: '10px' }}>Xác nhận mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"

                        />

                        <Form.Label htmlFor="sdt">Mã giới thiệu</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form style={{ display: 'flex', marginTop: '10px' }}>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type={type}
                                        id={`default-${type}`}
                                    />
                                </div>
                            ))}
                            &nbsp;<p> Tối đã đọc và đồng ký với <span style={{ fontWeight: '500', color: '#5fcf86' }}>Chính sách và quy định </span>
                                và <span style={{ fontWeight: '500', color: '#5fcf86' }}>Chính sách bảo vệ dữ liệu cá nhân</span> của Mioto
                            </p>
                        </Form>
                        <i className="a bi bi-eye-slash" style={{ position: 'relative', bottom: '175px', left: '437px' }}></i>
                        <i className="b bi bi-eye-slash" style={{ position: 'relative', bottom: '105px', left: '422px' }}></i>
                        <a className='dk btn'>Đăng ký</a>
                        <div className='equal'>
                            <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
                            <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>

        </div>


    )
}
export default Header;