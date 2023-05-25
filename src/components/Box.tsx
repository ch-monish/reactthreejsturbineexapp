import { MeshDistortMaterial } from '@react-three/drei'
import React from 'react'

function Box() {
    
  return (
   <mesh rotation={[90,0,20]}>

<boxBufferGeometry attach="geometry" args={[3,3,3]}>
{/* <MeshDistortMaterial attach="material"></MeshDistortMaterial> */}
</boxBufferGeometry>

<meshNormalMaterial attach="material" ></meshNormalMaterial>
{/* <meshLambertMaterial attach="material" color="blue"></meshLambertMaterial> */}
<mesh rotation={[3,4,1]}>
    <sphereBufferGeometry visible args={[2, 300, 200]} scale={3} ></sphereBufferGeometry>
    {/* <boxBufferGeometry attach="geometry" args={[3,3,3]}></boxBufferGeometry> */}
     <meshNormalMaterial attach="material" ></meshNormalMaterial>

</mesh>
   </mesh>
  )
}

export default Box