const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Athletic Wear</div>
        <nav style={styles.nav}>
          <a href="#categories" style={styles.navLink}>
            Shop
          </a>
          <a href="#featured" style={styles.navLink}>
            Featured
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>Welcome to Athletic Wear</h1>
        <p>Shop the latest and greatest in performance gear</p>
        <button style={styles.heroButton}>Shop Now</button>
      </section>

      {/* Categories Section */}
      <section id="categories" style={styles.categories}>
        {[
          { name: "Men's Wear", img: "https://via.placeholder.com/400" },
          { name: "Women's Wear", img: "https://via.placeholder.com/400" },
          { name: "Accessories", img: "https://via.placeholder.com/400" },
        ].map((category) => (
          <div style={styles.category} key={category.name}>
            <img src={category.img} alt={category.name} style={styles.categoryImage} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </section>

      {/* Featured Products Section */}
      <section id="featured" style={styles.featuredProducts}>
        <h2>Featured Products</h2>
        <div style={styles.productList}>
          {[
            { name: "Running Shoes", price: "$120.00", img: "https://via.placeholder.com/300" },
            { name: "Compression Tights", price: "$60.00", img: "https://via.placeholder.com/300" },
            { name: "Sports Bra", price: "$50.00", img: "https://via.placeholder.com/300" },
            { name: "Fitness Watch", price: "$150.00", img: "https://via.placeholder.com/300" },
          ].map((product) => (
            <div style={styles.product} key={product.name}>
              <img src={product.img} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Athletic Wear. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Inline Styles
const styles = {
  header: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "1rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  hero: {
    background: "url('https://via.placeholder.com/1500x500') no-repeat center center/cover",
    color: "#fff",
    textAlign: "center",
    padding: "5rem 2rem",
  },
  heroButton: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "2rem",
    justifyContent: "center",
  },
  category: {
    flex: "1 1 calc(33.333% - 1rem)",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    padding: "1rem",
    borderRadius: "8px",
  },
  categoryImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  featuredProducts: {
    padding: "2rem",
    textAlign: "center",
  },
  productList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  product: {
    flex: "1 1 calc(25% - 1rem)",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff",
  },
  productImage: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  footer: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
  },
};

export default Homepage;
