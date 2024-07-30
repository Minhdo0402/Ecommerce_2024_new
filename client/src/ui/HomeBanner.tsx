import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles
import homeBanner1 from "../assets/shopping-online-on-phone-paper-art-modern-pink-background-gifts-box-free-vector.jpg";
import homeBanner2 from "../assets/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg";
import homeBanner3 from "../assets/Online_Payment_Methods-1.jpg";
import homeBanner4 from "../assets/cash-on-delivery-banner.jpg";
//import homeBanner5 from "../assets/logistics-online-delivery-service-online-order-tracking-delivery-home-office-city-logistics-warehouse-truck-forklift-courier-227469445.jpg";
import Container from "./Container";
import LinkButton from "./LinkButton";
import CustomRightArrow from "./CustomRightArrow";
import CustomLeftArrow from "./CustomLeftArrow";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const HomeBanner = () => {
    return (
        <Container className="relative py-5 overflow-hidden">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000} // Thay đổi thời gian chuyển đổi giữa các banner (ms)
                transitionDuration={1000} // Thay đổi thời gian chuyển tiếp (ms)
                customRightArrow={<CustomRightArrow onClick={() => { }} />}
                customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                showDots={true} // Nếu bạn muốn hiển thị các chấm điều hướng
            >
                <div className="relative">
                    <img
                        src={homeBanner1}
                        alt="homeBanner1"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-end items-end px-10 pb-10 space-y-4 text-right">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-whiteText font-bold">
                            Mi Air Purifier
                        </h2>
                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mr-16">
                            The new tech gift you are wishing for right here.
                        </p>
                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mr-16" />
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={homeBanner2}
                        alt="homeBanner2"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-end items-end px-10 pb-10 space-y-4 text-right">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-whiteText font-bold">
                            Another Banner
                        </h2>
                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mr-16">
                            Another description here.
                        </p>
                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mr-16" />
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={homeBanner3}
                        alt="homeBanner3"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-end items-end px-10 pb-10 space-y-3 text-right">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-whiteText font-bold transform -translate-y-32 -translate-x-6">
                            Payment Methods
                        </h2>
                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mr-10 transform -translate-x-20 translate-y-4">
                            Another description here.
                        </p>
                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mr-10 transform -translate-x-24 translate-y-4" />
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={homeBanner4}
                        alt="homeBanner4"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-end items-end px-10 pb-10 space-y-3 text-right">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-whiteText font-bold transform -translate-y-48 -translate-x-6">
                            Delivery Service
                        </h2>
                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mr-10 transform -translate-x-20 translate-y-4">
                            Another description here.
                        </p>
                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mr-10 transform -translate-x-24 translate-y-4" />
                    </div>
                </div>
                {/* <div className="relative">
                    <img
                        src={homeBanner5}
                        alt="homeBanner5"
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-end items-end px-10 pb-10 space-y-3 text-right">
                        <h2 className="text-xl md:text-4xl lg:text-5xl text-whiteText font-bold transform -translate-y-48 -translate-x-6">
                            Delivery Service
                        </h2>
                        <p className="text-base md:text-lg font-semibold leading-6 text-whiteText/90 max-w-[250px] mr-10 transform -translate-x-20 translate-y-4">
                            Another description here.
                        </p>
                        <LinkButton className="w-44 flex items-center justify-center bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mr-10 transform -translate-x-24 translate-y-4" />
                    </div>
                </div> */}
            </Carousel>
        </Container>
    );
};

export default HomeBanner;
