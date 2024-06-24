'use client';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '../../../scss/header.scss';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Register from '../../component/_register/page';


const Header = () => {
    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShow = () => setShow(true);
    const handleShowRegister = () => setShowRegister(true);


    return (
        <div className='header w-100'>
            <Navbar className="">
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
                    <Register />
                </Modal.Body>

            </Modal>

        </div >


    )
}
export default Header;