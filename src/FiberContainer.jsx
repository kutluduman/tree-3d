import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SceneBox from "./SceneBox";
import SceneTree from "./SceneTree";
import Ground from "./Ground";


const FiberContainer = () => {
  return (
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }} shadows>
      {/* <SceneBox/> */}
      <SceneTree/>
      <Ground />
      <OrbitControls minDistance={1} maxDistance={200} />
    </Canvas>
  )
}

export default FiberContainer;