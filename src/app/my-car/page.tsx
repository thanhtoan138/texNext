'use client'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyCar = () => {
    const [show, setShow] = useState(false);
    function Close() {
        setShow(false)

    }
    function Open() {
        setShow(true)

    }

    return (
        <>
            <div className="container">
                <div className="row flex-nowrap mt-5">
                    <div className="col-auto px-0">
                        <div id="sidebar" className="collapse collapse-horizontal show " >
                            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                                {show === false && (
                                    <>
                                        <div onClick={() => setShow(true)} style={{ minWidth: '300px', outline: 'none', display: 'flex' }}>
                                            <h2 style={{ textAlign: 'left', color: 'black', fontWeight: '500', marginLeft: '10px' }}>Xe của tôi</h2>
                                            <a href="#" style={{ marginLeft: '100px' }} data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none">
                                                <i className="bi bi-caret-left-fill"></i>
                                            </a>
                                        </div>
                                        <div>
                                            <hr style={{ color: 'gray', position: 'relative', bottom: '-10px' }} />
                                            <ListGroup variant="flush" style={{ fontSize: '22px' }}>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-ev-front-fill"></i>&nbsp;&nbsp;<span style={{ fontSize: '16px' }}> Danh sách xe</span> </ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-calendar-day"></i>&nbsp;&nbsp;<span style={{ fontSize: '16px' }}> Lịch chung</span></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-router"></i> &nbsp;&nbsp;<span style={{ fontSize: '16px' }}>GPS không dây</span></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-table"></i> &nbsp;&nbsp;<span style={{ fontSize: '16px' }}>GPS có dây</span></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-file-earmark-spreadsheet"></i>&nbsp;&nbsp;<span style={{ fontSize: '16px' }}> Hợp đồng mẫu</span></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-wallet-fill">&nbsp;&nbsp; <span style={{ fontSize: '16px' }}>Ví của tôi</span></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-ev-front"></i>&nbsp;&nbsp; <span style={{ fontSize: '16px' }}>Đăng ký xe</span></ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </>
                                )}
                                {show === true && (
                                    <>
                                        <div onClick={() => setShow(false)} style={{ position: 'relative', left: '100px' }}>
                                            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none">
                                                <i className="bi bi-caret-right-fill"></i>
                                            </a>
                                        </div>
                                        <hr style={{ color: 'gray', position: 'relative', bottom: '-10px' }} />
                                        <div>
                                            <ListGroup variant="flush" style={{ fontSize: '22px' }}>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-ev-front-fill"></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-calendar-day"></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-router"></i> </ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-table"></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-file-earmark-spreadsheet"></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-wallet-fill"></i></ListGroup.Item>
                                                <ListGroup.Item style={{ padding: '10px' }}><i className="bi bi-ev-front"></i></ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <h3 style={{ position: 'relative', left: '860px' }}>Số dư: 0đ</h3>
                    <div className="col-auto px-2 mt-4"  >
                        <div className="page-header pt-5" style={{ position: 'relative', right: '1300px' }}>
                            <h2>Danh sách xe</h2>
                        </div>
                        <div className="page-header " style={{ position: 'relative', right: '590px', bottom: '50px', display: 'flex' }}>
                            <div style={{ justifyContent: 'right', marginRight: '30px' }}>
                                <h5>Trạng thái</h5>
                            </div>
                            <div style={{ justifyContent: 'right', border: '1px solid gray', padding: '5px', width: '140px', textAlign: 'center', borderRadius: '5px' }}>
                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Tất cả"
                                    menuVariant="white"
                                >
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </div>

                        </div>
                        <div className="page-header pt-5" style={{ position: 'relative', right: '1050px', bottom: '100px' }}>
                            <img src="https://www.mioto.vn/static/media/empty-mycar.e023e681.svg" width={400} alt="" />
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default MyCar