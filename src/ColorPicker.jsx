import { HexColorPicker } from "react-colorful";
import useColor from "./store/useColor";

export default function ColorPicker() {

    const selectedItem = useColor((state) => state.selectedItem);
  const color = useColor((state) => state.color);
  const setColor = useColor((state) => state.setColor);

  return (
    <div className={`color-picker ${!selectedItem ? "hidden" : ""}`}>
      <HexColorPicker color={color ?? "#ffffff"} onChange={setColor} />
    </div>
  );
}
