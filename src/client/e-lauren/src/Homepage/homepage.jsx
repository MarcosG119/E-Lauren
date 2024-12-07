import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

// Header Component
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #111;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  cursor: pointer;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      cursor: pointer;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>FitWear</Logo>
      <Nav>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

// Banner Component
const BannerContainer = styled.div`
  height: 400px;
  background: url("https://via.placeholder.com/1200x400") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerText = styled.h2`
  color: white;
  font-size: 36px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

function Banner() {
  return (
    <BannerContainer>
      <BannerText>Gear Up For Your Next Adventure</BannerText>
    </BannerContainer>
  );
}

// Categories Component
const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const CategoryCard = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h3 {
    margin-top: 10px;
  }
`;

function Categories() {
  const categories = ["Men", "Women", "Kids"];
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryCard key={category}>
          <img
            src={`https://via.placeholder.com/300?text=${category}`}
            alt={category}
          />
          <h3>{category}</h3>
        </CategoryCard>
      ))}
    </CategoriesContainer>
  );
}

// FeaturedProducts Component
const ProductsContainer = styled.div`
  margin: 40px 0;
`;

const ProductList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ProductCard = styled.div`
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  background-color: #fff;

  img {
    max-width: 100%;
    height: auto;
  }

  h4 {
    margin-top: 10px;
  }

  p {
    margin: 5px 0;
  }
`;

function FeaturedProducts() {
  const products = [
    { id: 1, name: "Running Shoes", price: "$120" },
    { id: 2, name: "Yoga Pants", price: "$80" },
    { id: 3, name: "Track Jacket", price: "$150" },
  ];

  return (
    <ProductsContainer>
      <h2>Featured Products</h2>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img
              src={`https://via.placeholder.com/300?text=${product.name}`}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </ProductCard>
        ))}
      </ProductList>
    </ProductsContainer>
  );
}

// Footer Component
const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #111;
  color: #fff;
  text-align: center;
`;

function Footer() {
  return <FooterContainer>© 2024 FitWear. All Rights Reserved.</FooterContainer>;
}

// Main App Component
function Homepage() {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </AppContainer>
  );
}

export default Homepage;
