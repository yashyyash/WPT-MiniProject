export const fetchProducts = async (cat) => {
  try {
    const response = await fetch("https://localhost:7110/api/Product");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    // Filter based on category (if cat is provided)
    const filtered = cat ? products.filter((p) => p.category === cat) : products;

    // ✅ Alert once data is fetched
    alert(`Loaded ${filtered.length} product(s)${cat ? ` for '${cat}'` : ""}.`);

    return filtered;
  } catch (error) {
    console.error("Error fetching products:", error);
    alert("Failed to load products. See console for details.");
    return []; // Return empty array on error
  }
};
