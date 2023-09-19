export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Could not find the product data");
  }
  return res.json();
};
