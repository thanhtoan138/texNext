'use client'
const { useState, useEffect } = require("react")
import { Form, FormGroup } from 'react-bootstrap';
export default function SignIn (){
    const [user, setUser] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
     useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch('http://localhost:8000/users',{
                method: 'GET'
            });
            const data = await response.json(); 
            setUser(data);
        }; fetchData();
     },[]);
     const handleLogin =(e) =>{
        e.preventDefault();

        // let account = '';
        user?.map((u) =>{
                console.log(u.username);
        })
    //     if(phone === user.phone && password === user.password){
    //         alert('dang nhap thanh cong')
    //    }else{
    //     alert('sai mat khau')
    //    }
     }
    return(
        <div className='form' style={{height:'450px',marginTop: '35px'}}>
            
        <h4 style={{ textAlign: 'center', marginBottom: '55px' }}>Đăng nhập</h4>
            <Form>
              <Form.Group >
              <Form.Label htmlFor="sdt">Số điện thoại hoặc email</Form.Label>
                        <Form.Control
                            type="text"
                            id="phone"
                            aria-describedby="passwordHelpBlock"
                            name='phone'
                            onChange={(e) =>setPhone(e.target.value)}
                        />
               </Form.Group>
                     <Form.Group >
                        <Form.Label htmlFor="inputPassword5" style={{ marginTop: '10px' }}>Mật khẩu </Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            name='password'
                            onChange={(e)=>setPassword(e.target.value)}

                        />
                         </Form.Group>
                        <i className="bi bi-eye-slash" style={{ position: 'relative', bottom: '30px', left: '437px' }}></i>
                        <p style={{ marginLeft: '330px', marginTop: '10px', color: 'rgb(95, 207, 134)' }}>Quên mật khẩu?</p>
                        <a className='dn btn' onClick={handleLogin}>Đăng nhập</a>
                        <p style={{ textAlign: 'center', paddingTop: '10px' }}>Bạn chưa là thành viên? <span style={{ color: 'rgb(95, 207, 134)', fontWeight: "500" }}>Đăng ký ngay</span></p>
                        <div className='equal'>
                            <a className='fb btn'><img src='https://nhanhtravel.com/wp-content/uploads/2022/12/TS-FB-Icon1-e1670787566310.png' width={18} /> Facebook</a>
                            <a className='gg btn'><img src='https://cdn.pixabay.com/photo/2021/05/24/09/15/google-logo-6278331_960_720.png' width={18} /> Google</a>
                        </div>
           
       </Form>
       </div>
    )
}