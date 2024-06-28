'use client'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
const MyCar = () => {


    return (
        <>
            <div class="sidebar" role="cdb-sidebar" color="white">
                <div class="sidebar-container">
                    <div class="sidebar-header">
                        <a class="sidebar-brand">Contrast Light</a>
                        <a class="sidebar-toggler"><i class="fa fa-bars"></i></a>
                    </div>
                    <div class="sidebar-nav">
                        <div class="sidenav">
                            <a class="sidebar-item">
                                <div class="sidebar-item-content">
                                    <i class="fa fa-th-large sidebar-icon sidebar-icon-lg"></i>
                                    <span>Dashboard</span>
                                    <div class="suffix">
                                        <div class="badge rounded-pill bg-danger">new</div>
                                    </div>
                                </div>
                            </a>
                            <a class="sidebar-item">
                                <div class="sidebar-item-content">
                                    <i class="fa fa-sticky-note sidebar-icon"></i>
                                    <span>Components</span>
                                </div>
                            </a>
                            <a class="sidebar-item">
                                <div class="sidebar-item-content">
                                    <i class="fa fa-sticky-note sidebar-icon"></i>
                                    <span>Bootstrap</span>
                                </div>
                            </a>
                        </div>
                        <div class="sidebar-footer">Sidebar Footer</div>
                    </div>
                </div>
            </div>
        </>
        // <div className="container" style={{ height: '500px' }}>
        //     {/* <Row>
        //         <Col lg={5}>
        //             <Row>
        //                 <Col md={7}>
        //                     <div className='' style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>

        //                         <div id="ex">
        //                             <h1>asdasddas</h1>
        //                         </div>

        //                         <div>
        //                             <a id='btnpre'
        //                                 onClick={() => opPre()}
        //                                 aria-controls="example-collapse-text"

        //                             >
        //                                 'preV'
        //                             </a>
        //                         </div>
        //                         <div>
        //                             <a id='btnnext'
        //                                 onClick={() => opNext()}
        //                                 aria-controls="example-collapse-text"

        //                             >
        //                                 'Next'
        //                             </a>
        //                         </div>
        //                     </div>
        //                     {/* <ListGroup style={{ width: '200px' }}>
        //                         <ListGroup.Item>Cras justo odio</ListGroup.Item>
        //                         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        //                         <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        //                         <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        //                         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        //                     </ListGroup> */}
        //                 </Col>
        //                 <Col md={5}>
        //                     {/* <Fade in={open}>
        //                         <div id="example-fade-text">
        //                             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        //                             terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        //                             labore wes anderson cred nesciunt sapiente ea proident.
        //                         </div>
        //                     </Fade> */}
        //                 </Col>
        //             </Row>

        //         </Col>
        //         <Col lg={7}>


        //         </Col>
        //     </Row > */}



        // </div >
    )
}
export default MyCar