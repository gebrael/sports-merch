export async function getPopularBrands() {
  const response = await fetch("https://api-task.bit68.com/en/api/brands");
  const popularBrands = await response.json();
  return popularBrands;
}

export default async function handler(req, res) {
  const popularBrands = await getPopularBrands();
  res.status(200).json(popularBrands);
}
