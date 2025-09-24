import { Image, useWindowDimensions } from "react-native";

export function PlantlyImage({ size, imageUrl }) {
  const { width } = useWindowDimensions();
  const imageSize = size ?? Math.min(width / 1.5, 400);
  console.log(imageUrl);

  return (
    <Image
      source={imageUrl ? { uri: imageUrl } : require("@/assets/plantly.png")}
      style={{ width: imageSize, height: imageSize, borderRadius: 6 }}
    />
  );
}
