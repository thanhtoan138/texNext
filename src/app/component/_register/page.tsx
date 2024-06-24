'use client'
import React, { useState } from 'react'
import { Form, FormGroup } from 'react-bootstrap';
import { createUser } from '../_register/action';
import { toast,ToastContainer } from 'react-toastify';


export default function Register() {

    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const handleConfirm = (e) => {
        e.preventDefault();
        if (password === confirm) {
            toast.info("Đăng ký thành công !");
        } else {
            toast.error("Password không khớp !");
        }
    }
    return (
        <div className='form2' style={{ marginTop: '-20px' }}>
             <ToastContainer/>
            <h4 style={{ textAlign: 'center' }}>Đăng ký</h4>
            <Form action={createUser}>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name='phone' />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Tên hiển thị</Form.Label>
                    <Form.Control
                        type="text"
                        id="username"
                        aria-describedby="passwordHelpBlock"
                        name='username'
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Xác nhận mật khẩu</Form.Label>
                    <Form.Control type="password" onChange={(e) => setConfirm(e.target.value)} />
                </Form.Group>
                <FormGroup>
                    <Form.Label htmlFor="code">Mã giới thiệu</Form.Label>
                    <Form.Control
                        type="text"
                        aria-describedby="passwordHelpBlock"
                        name='code'
                    />
                </FormGroup>

                <Form.Group className="mb-3" id="formGridCheckbox" style={{ display: 'flex', marginTop: '10px', fontSize: '13px' }}>
                    <Form.Check type="checkbox" />
                    &nbsp;<p> Tôi đã đọc và đồng ký với <span style={{ fontWeight: '500', color: '#5fcf86' }}>Chính sách và quy định </span>
                        và <span style={{ fontWeight: '500', color: '#5fcf86' }}>Chính sách bảo vệ dữ liệu cá nhân</span> của Mioto
                    </p>
                </Form.Group>
                <button className='dk btn' type='submit' onClick={handleConfirm} style={{ paddingBottom: '15px' }}>Đăng ký</button>
                <div className='equal'>
                    <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
                    <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
                </div>

            </Form>
        </div>
    )

}