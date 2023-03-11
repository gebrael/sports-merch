export async function getMainCategories() {
  const response = await fetch("https://api-task.bit68.com/en/api/categories");
  const mainCategories = await response.json();
  return mainCategories;
}

export default async function handler(req, res) {
  const mainCategories = await getMainCategories();
  res.status(200).json(mainCategories);
}
