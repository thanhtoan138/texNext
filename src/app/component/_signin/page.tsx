'use client'
import { useRouter } from "next/navigation"
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
export default function Login() {

  const router = useRouter()
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useEffect(() => {
  //   const onSubmit = async () => {
  //     const response = await fetch('http://localhost:8000/users');
  //     const data = await response.json();
  //     // Handle response if necessary
  //     data?.map((u) => {
  //       if (u.phone === phone && +u.password === +password) {
  //         toast.success('Đăng nhập thành công!');
  //         router.push('/main-child1')
  //         router.refresh();
  //       } else {
  //         toast.error('Sai tên đăng nhập hoặc mật khẩu!');
  //       }
  //     });
  //   }


  // }, []);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/users');
      const data = await response.json();
      // Handle response if necessary
      data?.map((u) => {
        if (u.phone === phone && +u.password === +password) {
          toast.success('Đăng nhập thành công!');
          return router.push('/my-car')

        } else {
          toast.error('Sai tên đăng nhập hoặc mật khẩu!');
        }
      });
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    }
  }

  return (
    <div className='login'>
      <Form onSubmit={onSubmit} className='form'>
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
        <button className='dn' type='submit'>Đăng nhập</button>
        <p style={{ textAlign: 'center', paddingTop: '10px' }}>Bạn chưa là thành viên? <span style={{ color: 'rgb(95, 207, 134)', fontWeight: "500" }}>Đăng ký ngay</span></p>
        <div className='equal'>
          <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
          <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
        </div>
      </Form >

    </div>
  )
}