import { useGLTF, useKeyboardControls } from "@react-three/drei"
import * as THREE from 'three';
import { useEffect, useRef, useState } from "react";
import useColor from "./store/useColor";
import { useFrame } from "@react-three/fiber";

function Couch3D({color, ...props}) {

    const { scene } = useGLTF("/models/Couch.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "couch" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "couch") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function Bookshelf({color, ...props}) {

    const { scene } = useGLTF("/models/Bookshelf.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "bookshelf" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "bookshelf") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        if (child.material.name !== "wood") return;
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        if (child.material.name !== "wood") return;
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function Drawer({color, ...props}) {

    const { scene } = useGLTF("/models/Drawer.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "drawer" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "drawer") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function Lamp({color, ...props}) {
    const { scene } = useGLTF("/models/Lamp.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "lamp" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "lamp") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function Table({ color, ...props }) {
    const { scene } = useGLTF("/models/Table.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "table" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "table") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function Cabinet({color, ...props}) {
    const { scene } = useGLTF("/models/Cabinet.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "cabinet" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "cabinet") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

function TV({color, ...props}) {
    const { scene } = useGLTF("/models/TV.glb");
    const selectedItem = useColor((state) => state.selectedItem);
    const body = useRef();
    const [subscribedKeys, getKeys] = useKeyboardControls();

    useFrame(() => {
        if (selectedItem === "tv" && body.current) {
            const { forward, backward, left, right } = getKeys();
            if (forward) {
                body.current.position.z += -0.01;
            }
            if (backward) {
                body.current.position.z += 0.01;
            }
            if (right) {
                body.current.position.x += 0.01;
            }
            if (left) {
                body.current.position.x += -0.01;
            }
        }
    });

    useEffect(() => {
        if (scene && color && selectedItem === "tv") {
            scene.traverse((child) => {
                if (child.isMesh) {
                    if (Array.isArray(child.material)) {
                        child.material = child.material.map(material => {
                            const clonedMaterial = material.clone();
                            clonedMaterial.color = new THREE.Color(color);
                            return clonedMaterial;
                        });
                    } else {
                        if (child.material.name !== "mat23") return;
                        const clonedMaterial = child.material.clone();
                        clonedMaterial.color = new THREE.Color(color);
                        child.material = clonedMaterial;
                    }
                }
            });
        }
    }, [scene, color]);

    return (
        <group ref={body} {...props}>
            <primitive object={scene} />
        </group>
    )
}

export {Couch3D, Bookshelf, Drawer, Lamp, Table, Cabinet, TV};