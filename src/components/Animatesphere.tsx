import { Sphere, MeshDistortMaterial,Box } from "@react-three/drei";
import React from "react";

function Animatesphere() {
  return (<>
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8352fd"
        distort={0.8}
        speed={1}
        roughness={0}
        attach="material"
      ></MeshDistortMaterial>
    </Sphere>
    {/* <Box args={[2,4,2]}>
    <MeshDistortMaterial
        color="#8352fd"
        distort={1}
        speed={8}
        roughness={0}
        
      ></MeshDistortMaterial>
    </Box> */}
    </>
  );
}
export function JumpingBox(){
    return(
       <Box args={[2,4,2]} >
    <MeshDistortMaterial
        color="#8352fd"
        distort={0.6}
        speed={4}
        roughness={0}
      ></MeshDistortMaterial>
    </Box> 
    )
}
export default Animatesphere;
