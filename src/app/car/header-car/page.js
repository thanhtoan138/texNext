'use client'
import '../../../scss/headcar.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'react-bootstrap/Container';
const HeaderCar = () => {
    return (
        <div className="findcar">
            <hr />
            <Container >
                <div className="head">

                    <div className="calendar">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>Hồ Chí Minh</p>
                        <i className="bi bi-calendar-day"></i>
                        <p>21:00,19/06/2024 - 20:00,20/06/2024</p>
                    </div>
                    <div className="mySwiper">
                        <div className="custom-pre">
                            <div className='turn'> <i class="bi bi-recycle"></i></div>
                            <div className='filter'><i class="bi bi-filter-square"><b> Bộ lọc</b></i></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>

                        <Swiper
                            // spaceBetween={5}
                            centeredSlides={false}
                            slidesPerView={8}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            modules={[Navigation]}

                        >
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-ev-front-fill"></i> Loại xe</p>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p> <i class="bi bi-globe-americas"></i> Hãng xe</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p> <i class="bi bi-airplane-engines"></i> Chủ xe 5 sao</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-lightning-charge"></i> Đặt nhanh</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-train-freight-front"></i > Miễn thuế chấp</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p> <i class="bi bi-radar"></i> Giao xe tận nơi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-file-slides-fill"></i> Xe giảm giá</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-ev-front"></i> Xe điện</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='nav-car'>
                                    <p><i class="bi bi-ev-station"></i> Truyền động</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default HeaderCar;