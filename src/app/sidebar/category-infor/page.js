'use client'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import '../../../scss/category-info.scss';
const CategoryLogin = () => {
    return (

        <Container>
            <div className='category' >
                <h1 style={{ fontWeight: 600 }}>Xin chào bạn!</h1>
                <hr style={{ color: 'gray' }} />
                <ListGroup className='list' variant="flush">
                    <ListGroup.Item className='item' action href="#link1" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-person"></i>
                        Tài khoản của tôi
                    </ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link2" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-suit-heart"></i>
                        Xe yêu thích</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link3" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-ev-front-fill"></i>
                        Xe của tôi</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link4" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-map-fill"></i>
                        Chuyến xe của tôi</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link5" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-basket-fill"></i>
                        Đơn hàng Thuê xe dài hạn</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link6" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-gift-fill"></i>
                        Quà tặng</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link7" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-pin-map-fill"></i>
                        Địa chỉ của tôi</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link8" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-key-fill"></i>
                        Đỗi mật khẩu</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link9" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-trash3-fill"></i>
                        Yêu cầu tài khoản</ListGroup.Item>
                    <ListGroup.Item className='item' action href="#link10" style={{ backgroundColor: '#f6f6f6' }}>
                        <i className="bi bi-box-arrow-left"></i>
                        Đăng xuất</ListGroup.Item>
                </ListGroup>
            </div>
        </Container>

    )
}
export default CategoryLogin;