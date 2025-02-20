import { useEffect, useState } from "react";
import Container from "./Container";
import { config } from "../../config";
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `${config?.baseUrl}/categories`;
            try {
                const data = await getData(endpoint);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);
    return (
        <Container>
            <div className="mb-10">
                <div className="flex items-center justify-between">
                    <Title text="Popular categories" />
                    <Link
                        to={"/category/tvAndAudio"}
                        className="font-medium relative group overflow-hidden"
                    >
                        View All Categories{" "}
                        <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
                    </Link>
                </div>
                <div className="w-full h-[1px] bg-gray-200 mt-3" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
                {categories.map((item: CategoryProps) => (
                    <Link
                        to={`/category/${item?._base}`}
                        key={item?._id}
                        className="flex flex-col items-center w-full h-auto group"
                    >
                        <div className="w-full h-36 flex items-center justify-center">
                            <img
                                src={item?.image}
                                alt="categoryImage"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <p className="text-sm md:text-base font-bold mt-2 text-center">
                            {item?.name}
                        </p>
                    </Link>
                ))}
            </div>


        </Container>
    );
};

export default Categories;