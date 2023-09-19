export const getData = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");

  if (!res.ok) {
    throw new Error("Could not find the product data");
  }
  return res.json();
};
