'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React, { useRef, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import '../../../scss/zoom.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
const Zoom = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="zoom">

            <Button className="me-2 mb-2" onClick={() => handleShow(values)}>
                Full screen

            </Button>

            <Modal className='body' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'black' }}>
                    <div className='slide'>
                        <Swiper

                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                            style={{ position: 'relative', width: '1500px' }}>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={1500} height={700} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" width={500} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" width={500} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" width={500} />
                            </SwiperSlide>



                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={15}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                            style={{ height: '200px' }}>
                            <SwiperSlide style={{ width: '120px', borderRadius: '10px', top: '7px' }}>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={120} height={100} style={{ border: '1px solid white', borderRadius: '10px', marginBottom: '-40px' }} />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: '120px', borderRadius: '20px', top: '7px' }}>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" width={120} height={100} style={{ borderRadius: '10px', marginBottom: '-40px' }} />
                            </SwiperSlide>


                        </Swiper>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}
export default Zoom;