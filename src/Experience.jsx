import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Bookshelf, Cabinet, Couch3D, Drawer, Lamp, Table, TV } from "./Models";
import useColor from "./store/useColor";

export default function Experience() {
  const { scene } = useGLTF("/models/room.glb");

  const color = useColor((state) => state.color);
  const selectedItem = useColor((state) => state.selectedItem);
  const setSelectedItem = useColor((state) => state.setSelectedItem);

  const handleClick = (name) => {
    setSelectedItem(name);
  };

  const handlePointerMissed = () => {
    setSelectedItem(null);
  };

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />

      <directionalLight castShadow position={[-7, 2, 3]} intensity={2.5} />
      <ambientLight intensity={1.5} />
      <color args={["#6495ED"]} attach="background" />

      <Physics gravity={[0, -9.8, 0]}>
        <group scale={1.15}>
          <Text
            font="./assets/fonts/Bangers.ttf"
            fontSize={0.35}
            position={[3.3, 0.6, 0]}
            rotation={[0, -0.5, 0]}
          >
            Room {"\n"}Configurator.
          </Text>
          <RigidBody type="fixed" scale={1.65}>
            <primitive object={scene} />
          </RigidBody>
          <Couch3D
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("couch")}
            onPointerMissed={handlePointerMissed}
            scale={0.02}
            position={[-6.8, -1.19, 3.4]}
          />
          <Bookshelf
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("bookshelf")}
            onPointerMissed={handlePointerMissed}
            scale={0.0009}
            rotation={[0, 1.5, 0]}
            position={[-1.2, -1.08, -1]}
          />
          <Drawer
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("drawer")}
            onPointerMissed={handlePointerMissed}
            scale={2.5}
            position={[-0.8, -1.3, 1.55]}
            rotation={[0, -7.9, 0]}
          />
          <Lamp
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("lamp")}
            onPointerMissed={handlePointerMissed}
            scale={0.0027}
            position={[-1, -0.63, 1.3]}
          />
          <Table
            color={color}
            position={[-6.7, -1.2, 4.4]}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("table")}
            onPointerMissed={handlePointerMissed}
            scale={0.02}
          />
          <Cabinet
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("cabinet")}
            onPointerMissed={handlePointerMissed}
            scale={1.5}
            rotation={[0, -1.56, 0]}
            position={[-1, -1.2, 0.7]}
          />
          <TV
            color={color}
            onPointerEnter={handleMouseOver}
            onPointerLeave={handleMouseOut}
            onClick={() => handleClick("tv")}
            onPointerMissed={handlePointerMissed}
            scale={0.25}
            rotation={[0, 3.2, 0]}
            position={[-1.14, -0.65, 0.1]}
            />
        </group>
      </Physics>
    </>
  );
}

/*
Couch:
posX: -6.80,
posY: -1.19,
posz: 3.40

bookshelf:
-1.20, -1.08, -1

drawer: 
-0.80, -1.30, 1.55

lamp:
-1, -0.63, 1.30

table: 
-6.70, -1.2, 4.4

Cabinet:
-1, -1.2, 0.7

TV:
-1.14, -0.65, 0.10
*/
