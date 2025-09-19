'use client';

import { useEffect, useState } from 'react';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import type { Swiper } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './BannerSlider.module.scss';

interface BannerExhibition {
  exhibitionId: string;
  imgComAtfl: string;
  bannerExhibitionName: string;
}

interface BannerItem {
  imgComAtfl: string;
  bannerSubSjNm: string;
  bannerMainSjNm: string;
  bannerLndgDvcd: string;
  bannerrLndgInfoRm: string;
  bannerExhibitions: BannerExhibition[];
}

const BannerSwiperScrollArea = ({ activeIndex, totalSlides }: { activeIndex: number; totalSlides: number }) => {
  const padZero = (num: number): string => num.toString().padStart(2, '0');

  return (
    <div className={styles.wrapSideArea}>
      <div className={styles.wrapperSwiperScroll}>
        <span className={styles.activeSlide}>{padZero(activeIndex + 1)}</span>
        <div className={`wrap-swiper-scroll ${styles.wrapSwiperScroll}`}></div>
        <span className={styles.totalSlides}>{padZero(totalSlides)}</span>
      </div>
    </div>
  );
};

export default function BannerSlider() {
  const [bannerList, setBannerList] = useState<BannerItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  const onSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const onSubItemClick = (exhibitionId: string) => {
    // Navigate to promotional special page
    // navigateTo({ path: `/promotional/special/${exhibitionId}/` })
    console.log('Navigate to:', `/promotional/special/${exhibitionId}/`);
  };

  const onItemClick = (type: string, value: string, hasSubList: boolean) => {
    // Only execute banner click action when there's no sublist
    if (!hasSubList) {
      // goLink({ type, value })
      console.log('Go to link:', { type, value });
    }
  };

  const getVisualBannerList = async (): Promise<BannerItem[]> => {
    // Mock data - replace with actual API call
    return [
      {
        imgComAtfl: '/img/banner-1.jpg',
        bannerSubSjNm: 'New Collection',
        bannerMainSjNm: 'PREMIUM BRANDS',
        bannerLndgDvcd: 'link',
        bannerrLndgInfoRm: 'https://example.com',
        bannerExhibitions: [
          {
            exhibitionId: '1',
            imgComAtfl: '/img/sub-1.jpg',
            bannerExhibitionName: 'Special Exhibition 1',
          },
          {
            exhibitionId: '2',
            imgComAtfl: '/img/sub-2.jpg',
            bannerExhibitionName: 'Special Exhibition 2',
          },
        ],
      },
      {
        imgComAtfl: '/img/banner-2.jpg',
        bannerSubSjNm: 'Limited Edition',
        bannerMainSjNm: 'EXCLUSIVE DEALS',
        bannerLndgDvcd: 'link',
        bannerrLndgInfoRm: 'https://example2.com',
        bannerExhibitions: [],
      },
      {
        imgComAtfl: '/img/banner-3.jpg',
        bannerSubSjNm: 'Seasonal Sale',
        bannerMainSjNm: 'UP TO 50% OFF',
        bannerLndgDvcd: 'link',
        bannerrLndgInfoRm: 'https://example3.com',
        bannerExhibitions: [],
      },
    ];
  };

  const init = async () => {
    const data = await getVisualBannerList();
    setBannerList(data);
  };

  useEffect(() => {
    init();
  }, []);

  const initSwiper = (name: string, swiper: Swiper) => {
    setSwiperInstance(swiper);
    console.log('Swiper initialized:', name, swiper);
  };

  return (
    <div className={`${styles.mainVisual} ${styles.hasSubList}`}>
      <div className={styles.wrapMainSwiper}>
        {bannerList.length > 0 && (
          <SwiperComponent
            className={styles.swiperMain}
            navigation={false}
            modules={[Autoplay, Pagination, Scrollbar, A11y]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            slidesPerView={1}
            autoHeight={true}
            loop={true}
            scrollbar={{
              el: '.wrap-swiper-scroll',
            }}
            onSlideChange={onSlideChange}
            onSwiper={(swiper) => initSwiper('mainBanner', swiper)}
          >
            {bannerList.map((item, i) => (
              <SwiperSlide
                key={`main-visual-${i}`}
                className={styles.mainSlideItem}
                style={{ backgroundImage: `url('${item.imgComAtfl}')` }}
                onClick={() =>
                  onItemClick(item.bannerLndgDvcd, item.bannerrLndgInfoRm, item.bannerExhibitions.length > 0)
                }
              >
                <div className={styles.slideItemInner}>
                  <div className={styles.textMain}>{item.bannerSubSjNm}</div>
                  <div className={styles.textSub}>{item.bannerMainSjNm}</div>
                </div>

                {item.bannerExhibitions.length > 0 && (
                  <div className={`${styles.wrapMainSub} no-swiping`}>
                    {item.bannerExhibitions.map((subItem, j) => (
                      <div
                        key={`main-visual-sub-${i}-${j}`}
                        className={styles.subItem}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSubItemClick(subItem.exhibitionId);
                        }}
                      >
                        <img
                          className={styles.subItemImg}
                          src={subItem.imgComAtfl}
                          alt={subItem.bannerExhibitionName}
                        />
                        <div className={styles.subItemText}>{subItem.bannerExhibitionName}</div>
                      </div>
                    ))}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </SwiperComponent>
        )}

        <BannerSwiperScrollArea activeIndex={activeIndex} totalSlides={bannerList.length} />
      </div>
    </div>
  );
}
