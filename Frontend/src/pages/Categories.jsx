import { Link } from "react-router-dom";

const Categories = () => (
  <section>
    <h2>Select Category</h2>
    <ul>
      <li><Link to="/products/electronic">Electronic</Link></li>
      <li><Link to="/products/grocery">Grocery</Link></li>
      <li><Link to="/products/home-decor">Home Decor</Link></li>
    </ul>
  </section>
);

export default Categories;
