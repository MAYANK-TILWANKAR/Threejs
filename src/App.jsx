import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import "./style.css";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex flex-col justify-center items-center h-2/5 space-y-4">
        <h3 className="text-center text-white text-7xl font-bold">
          MacBook Pro
        </h3>
        <p className="text-white text-center max-w-xl text-base px-4">
          Experience the ultimate performance with the new MacBook Pro. Designed
          for professionals who need the best tools to create extraordinary
          work.
        </p>
      </div>

      <Canvas className="-my-48" camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
