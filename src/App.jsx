import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import "./style.css";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="bg-transparent p-5 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl tracking-wide">
            MacBook Pro
          </div>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-sm uppercase tracking-wider">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-sm uppercase tracking-wider">
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300 ease-in-out text-sm uppercase tracking-wider">
                Specs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-white text-gradient-to-b from-gray-900 to-gray-800 px-4 py-2 rounded-full hover:text-gray-900 transition duration-300 ease-in-out text-sm uppercase tracking-wider font-semibold">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center h-2/5 space-y-4 -my-10">
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
