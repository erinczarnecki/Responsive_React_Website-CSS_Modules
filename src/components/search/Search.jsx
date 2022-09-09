import React from 'react'
import styles from './Search.module.css';
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles.heading}>
                <h1>Find Your Location</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the venue gallery</span>
                    </p>
                </div>
            </div>

            <div className={styles.slider_container}>

                <Swiper
                    //Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    navigation
                    loop="true"
                    breakpoints={{
                        //window >=340px
                        340: {
                            width: 200,
                            slidesPerView: 1,
                        },
                        //window >=768
                        768: {
                            width: 768,
                            slidesPerView: 1,
                        },
                        //widow >=1040
                        1040: {
                            width: 1040,
                            slidesPerView: 4,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card
                            image="https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHZlbnVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            location="New Orleans" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            image="https://images.unsplash.com/photo-1505944357431-27579db47558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            location="Lake Placid" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            image="https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            location="North Carolina" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            image="https://images.unsplash.com/photo-1571268373914-e888c6dafeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMHZlbnVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            location="Vermont" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            image="https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            location="Pensacola" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Search
