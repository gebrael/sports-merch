export async function getSliderImges() {
  const response = await fetch(
    "https://api-task.bit68.com/en/api/slider_image"
  );
  const sliderImgs = await response.json();
  return sliderImgs;
}

export default async function handler(req, res) {
  const sliderImgs = await getSliderImges();
  res.status(200).json(sliderImgs);
}
