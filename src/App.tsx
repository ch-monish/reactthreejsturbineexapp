import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';
import { OrbitControls } from '@react-three/drei';
import Animatesphere, { JumpingBox } from './components/Animatesphere';
import {Model as Turbine} from "./components/Turbine"
function App() {
  return (
    <div className="App">
      <style>
        {
`
.canvas{
  background:#aaeedd;
}



`        }
      </style>
     <h2>abcd</h2>
     <Canvas shadows className='canvas' style={{height:"80vh"}}>
      <OrbitControls enableZoom={false} autoRotate={true}/>
      <ambientLight intensity={0.5} color={"white"} ></ambientLight>
      <directionalLight position={[-9,5,2]} intensity={2} ></directionalLight>
      <Box  ></Box>
      <Suspense fallback={null}></Suspense>
     </Canvas>



     <Canvas className='canvas' style={{height:"80vh"}}>
      <OrbitControls enableZoom={false}/>
      <ambientLight intensity={0.5} color={"white"}></ambientLight>
      <directionalLight position={[-9,5,2]} intensity={2} ></directionalLight>
      <Suspense fallback={null}>
     <Animatesphere></Animatesphere>
        
      </Suspense>
     </Canvas>


     
     <Canvas className='canvas' style={{height:"80vh"}}>
      <OrbitControls enableZoom={false} ></OrbitControls>
     <ambientLight intensity={0.5} color={"white"}></ambientLight>
      <directionalLight position={[-9,5,2]} intensity={2} ></directionalLight>
      <JumpingBox></JumpingBox>
     </Canvas>


     <Canvas shadows  className='canvas' style={{height:"90vh"}}>
     <OrbitControls enableZoom={true} rotateSpeed={2} autoRotate={true} autoRotateSpeed={4} ></OrbitControls>
     <ambientLight intensity={1} color={"white"}></ambientLight>
      <directionalLight position={[3,5,10]} intensity={1} ></directionalLight>
<Turbine></Turbine>
     </Canvas>

 

    </div>
  );
}

export default App;
