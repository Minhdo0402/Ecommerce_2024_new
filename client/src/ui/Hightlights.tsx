import { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import { config } from "../../config";
import { HighlightsType } from "../../type";
import { Link } from "react-router-dom";

const Highlights = () => {
    const [highlightsData, setHighlightsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/highlights`;
            try {
                const data = await getData(endpoint);
                setHighlightsData(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    // Danh sách màu cho từng nút
    const buttonColors = ["bg-blue-600", "bg-red-500", "bg-green-500"];

    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightsData.map((item: HighlightsType, index) => (
                <div
                    key={item?._id}
                    className="relative h-64 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105"
                >
                    {/* Hình ảnh nền */}
                    <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl transition-all duration-300 group-hover:brightness-75"
                        style={{ backgroundImage: `url(${item?.image})` }}
                    ></div>

                    {/* Overlay làm tối nền */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Nội dung */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                        <h3 className="text-2xl font-bold">{item?.name}</h3>
                        <p className="text-sm opacity-90 mt-2">{item?.title}</p>

                        <Link
                            to={item?._base}
                            className={`mt-4 px-2 py-2 w-fit rounded-lg text-sm font-medium transition-all duration-300 ${buttonColors[index % buttonColors.length]} hover:opacity-80`}
                        >
                            {item?.buttonTitle}
                        </Link>

                    </div>
                </div>
            ))}
        </Container>
    );
};

export default Highlights;
