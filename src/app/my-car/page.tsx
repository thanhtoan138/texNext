'use client'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Row, Col, AccordionHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Fade from 'react-bootstrap/Fade';
import Accordion from 'react-bootstrap/Accordion';


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
                <div className="row flex-nowrap">
                    <div className="col-auto px-0">



                        <div id="sidebar" className="collapse collapse-horizontal show border-end" >

                            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                                {show === false && (
                                    <div onClick={() => setShow(true)} style={{ minWidth: '200px', outline: 'none' }}>
                                        <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="borders rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
                                    </div>
                                )}
                                <a style={{ display: 'flex' }} href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Item</span> </a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-film"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-heart"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bricks"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-clock"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-archive"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-gear"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-calendar"></i> <span>Item</span></a>
                                <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-envelope"></i> <span>Item</span></a>
                            </div>
                        </div>
                    </div>
                    <main className="col ps-md-2 pt-2">
                        <div className="page-header pt-3">
                            {show === true && (
                                <div onClick={() => setShow(false)} >
                                    <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> ok</a>
                                </div>
                            )}
                            <h2>Bootstrap 5 Sidebar Menu - Simple</h2>
                        </div>
                        <p className="lead">A offcanvas "push" vertical nav menu example.</p>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <p>This is a simple collapsing sidebar menu for Bootstrap 5. Unlike the Offcanvas component that overlays the content, this sidebar will "push" the content. Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default MyCar