// src/pages/blog.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f9f9f9; /* Màu nền nhẹ nhàng cho toàn bộ container */
  border-radius: 15px;
`;

const Header = styled.header`
  padding: 50px;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(135deg, #004d40, #00796b); /* Gradient nền màu xanh đậm và xanh ngọc */
  border-radius: 15px;
  color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 1.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Hiệu ứng đổ bóng nhẹ cho tiêu đề */
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  margin: 20px 0 0;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Hiệu ứng đổ bóng nhẹ cho mô tả */
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const Article = styled.article`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.333% - 20px);
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    border-color: #004d40; /* Thay đổi màu sắc khi hover */
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
  object-fit: cover; /* Đảm bảo hình ảnh không bị méo */
  height: 200px; /* Đảm bảo kích thước đồng đều cho tất cả hình ảnh */
`;

const TitleArticle = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin: 10px 0;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
`;

const Blog: React.FC = () => {
    const articles = [
        {
            title: 'Phương thức thanh toán',
            description: 'Thông tin về các phương thức thanh toán được chấp nhận trên website của chúng tôi.',
            imageUrl: 'https://ehoadon.net/assets/images/5cd445efc30c3529f89cb1bc/thumbs/5e4424cfa5eb812844b69d46.png',
        },
        {
            title: 'Khuyến mãi',
            description: 'Các chương trình khuyến mãi và ưu đãi hấp dẫn dành cho khách hàng.',
            imageUrl: 'https://www.webtoffee.com/wp-content/uploads/2020/05/how-to-use-coupons-deals-and-offers-boost-woocommerce-sales.jpg',
        },
        {
            title: 'Chăm sóc khách hàng',
            description: 'Dịch vụ chăm sóc khách hàng chuyên nghiệp và tận tâm.',
            imageUrl: 'https://bizflyportal.mediacdn.vn/bizflyportal/243/346/2020/06/30/22/37/so-15935098307935.jpg',
        },
        {
            title: 'Tuyển dụng',
            description: 'Thông tin về các cơ hội nghề nghiệp và vị trí tuyển dụng hiện tại.',
            imageUrl: 'https://chanphong.com/datafiles/24675/upload/files/tuy%E1%BB%83n-d%E1%BB%A5ng-nh%C3%A2n-vi%C3%AAn-k%E1%BB%B9-thu%E1%BA%ADt.jpg',
        },
        {
            title: 'Sản phẩm mới',
            description: 'Giới thiệu về các sản phẩm mới sắp ra mắt.',
            imageUrl: 'https://openend.vn/wp-content/uploads/2021/05/phat-trien-san-pham-moi.png',
        },
        {
            title: 'Cẩm nang mua sắm',
            description: 'Những mẹo và gợi ý hữu ích để mua sắm thông minh.',
            imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.Ei5-btDgDNq6HjYQSoaA6wHaDt&pid=Api&P=0&h=220',
        },
        {
            title: 'Tin tức công ty',
            description: 'Những tin tức và sự kiện mới nhất từ công ty.',
            imageUrl: 'https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/types-of-ecommerce.jpg',
        },
        {
            title: 'Chia sẻ kinh nghiệm',
            description: 'Những kinh nghiệm quý giá từ những người đã thành công.',
            imageUrl: 'https://talentbold.com/Upload/news/20200817/095605652_cach-giao-tiep-tot-voi-dong-nghiep-1.jpg',
        },
        {
            title: 'Hướng dẫn sử dụng sản phẩm',
            description: 'Hướng dẫn chi tiết cách sử dụng các sản phẩm của chúng tôi.',
            imageUrl: 'https://www.scnsoft.com/blog-pictures/ecommerce/ecommerce-website-design-guide.png',
        },
    ];

    return (
        <Container>
            <Header>
                <Title>E-Commerce Awesome Blog</Title>
                <Subtitle>Welcome to E-Commerce blog. Here you'll find the latest updates and articles.</Subtitle>
            </Header>
            <Main>
                {articles.map((article, index) => (
                    <Article key={index}>
                        <Image src={article.imageUrl} alt={article.title} />
                        <TitleArticle>{article.title}</TitleArticle>
                        <Description>{article.description}</Description>
                    </Article>
                ))}
            </Main>
        </Container>
    );
};

export default Blog;
