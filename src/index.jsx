import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { HexColorPicker } from "react-colorful";
import useColor from "./store/useColor.js";
import ColorPicker from "./ColorPicker.jsx";
import { KeyboardControls } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <ColorPicker />
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "left", keys: ["ArrowLeft", "KeyA"] },
        { name: "right", keys: ["ArrowRight", "KeyD"] },
      ]}
    >
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [4, 2, 6],
      }}
    >
      <Experience />
      </Canvas>
      </KeyboardControls>
  </>
);
