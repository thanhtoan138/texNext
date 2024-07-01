'use client';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import '../../../scss/header.scss';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Register from '../../component/_register/page';
// import SignIn from '../../component/_signin/page.tsx';
import { useRouter, redirect } from "next/navigation"
import { toast } from 'react-toastify';
// import { useSWRConfig } from "swr"
import useSWR from 'swr'
// import { mutate } from "swr"
const Header = () => {
    const router = useRouter()
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShow = () => setShow(true);
    const handleShowRegister = () => setShowRegister(true);
    const [users, setUsers] = useState(undefined);
    // const { mutate } = useSWRConfig()
    const { data } = useUser();

    // useEffect(() => {
    //     const u = localStorage.getItem('user');
    //     const value = !!u ? u : undefined;
    //     setUsers(value);
    //     console.log(value);
    //     // console.log(JSON.stringify(value));

    // }, []);
    const handleLogout = () => {
        const x = localStorage.removeItem('user');
        setUsers(x);
        return router.push('/main-child1')
    }

    function useUser() {
        const fetcher = (...args) => fetch(...args).then(res => res.json());
        return useSWR('http://localhost:8000/users', fetcher);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        try {
            const account = data.find((item) => item.phone === phone && item.password === password);
            if (!account) {
                toast.error('Sai tên đăng nhập hoặc mật khẩu!');
            } else {
                toast.success('Đăng nhập thành công!');
                localStorage.setItem('user', JSON.stringify(account));
                setUsers(account);
                setShow(false);
                return router.push('/infor');
            }

            // const response = await fetch('http://localhost:8000/users');
            // const data = await response.json();
            // Handle response if necessary
            // console.log(JSON.stringify(data))

            // if (data.users.phone === +phone && data.users.password === +password) {
            //     alert('ok')
            // } else {
            //     alert('fas')
            // }


            // if (account) {
            //     toast.success('Đăng nhập thành công!');
            //     localStorage.setItem('user', account);
            //     setShow(false);
            //     return router.push('/my-car');


            // } else {
            //     toast.error('Sai tên đăng nhập hoặc mật khẩu!');

            // }

        } catch (error) {
            // Handle error if necessary
            console.error(error)
        }
    }

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


                        {!users && (
                            <>
                                <Navbar.Text className='ntext'>
                                    <a onClick={handleShowRegister}>Đăng ký</a>
                                </Navbar.Text>
                                <Navbar.Text >
                                    <a className='dn btn' onClick={handleShow}>Đăng nhập</a>
                                </Navbar.Text>
                            </>
                        )}
                        {users && (
                            <>
                                <Navbar.Text className='ntext'>
                                    <i className="bi bi-bell-fill"></i>
                                </Navbar.Text>
                                <Navbar.Text className='ntext'>
                                    <Link href='/'>
                                        <img src='https://n1-cstg.mioto.vn/m/avatars/avatar-1.png' alt='' width={35} height={35} />
                                    </Link>
                                </Navbar.Text>
                                <Navbar.Text className='ntext'>
                                    <Link href='/infor' style={{ textDecoration: 'none', color: '#5fcf86' }}>{users.username}</Link>
                                </Navbar.Text>
                                <Navbar.Text className='ntext'>
                                    {/* <svg fill="#000000" width="27px" height="27px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z"></path></g>
                                    </svg> */}
                                    <a className='dn btn' onClick={handleLogout}>Đăng Xuất</a>
                                </Navbar.Text>

                            </>
                        )}
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
                    <div className='login'>
                        <Form className='form'>
                            <h4 className='title'>Đăng nhập</h4>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="sdt">Số điện thoại hoặc email</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="sdt"
                                    aria-describedby="passwordHelpBlock"
                                    name="phone" onChange={(e) => setPhone(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label htmlFor="inputPassword5" style={{ marginTop: '10px' }}>Mật khẩu </Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    name="password" onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <i className="bi bi-eye-slash" style={{ position: 'relative', bottom: '45px', left: '437px' }}></i>
                            <p style={{ marginLeft: '330px', color: 'rgb(95, 207, 134)' }}>Quên mật khẩu?</p>
                            <button className='dn' onClick={handleLogin}>Đăng nhập</button>
                            <p style={{ textAlign: 'center', paddingTop: '10px' }}>Bạn chưa là thành viên? <span style={{ color: 'rgb(95, 207, 134)', fontWeight: "500" }}>Đăng ký ngay</span></p>
                            <div className='equal'>
                                <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
                                <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
                            </div>
                        </Form >

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