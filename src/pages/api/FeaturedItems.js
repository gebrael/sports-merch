export async function getFeaturedItems() {
  const response = await fetch("https://api-task.bit68.com/en/api/items");
  const FeaturedItems = await response.json();
  return FeaturedItems;
}

export default async function handler(req, res) {
  const FeaturedItems = await getFeaturedItems();
  res.status(200).json(FeaturedItems);
}
