import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Book3DProps {
  className?: string;
}

export default function Book3D({ className = '' }: Book3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xf4a261, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xe9c46a, 0.8, 20);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);

    // Create book
    const bookGroup = new THREE.Group();

    // Book cover (front)
    const coverGeometry = new THREE.BoxGeometry(3, 4, 0.2);
    const coverMaterial = new THREE.MeshStandardMaterial({
      color: 0x16213e,
      roughness: 0.3,
      metalness: 0.2,
    });
    const cover = new THREE.Mesh(coverGeometry, coverMaterial);
    cover.castShadow = true;
    bookGroup.add(cover);

    // Book pages
    const pagesGeometry = new THREE.BoxGeometry(2.9, 3.9, 0.15);
    const pagesMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f5dc,
      roughness: 0.8,
    });
    const pages = new THREE.Mesh(pagesGeometry, pagesMaterial);
    pages.position.z = 0.175;
    bookGroup.add(pages);

    // Golden title area (simulated)
    const titleGeometry = new THREE.BoxGeometry(2.5, 0.8, 0.21);
    const titleMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4a261,
      emissive: 0xf4a261,
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 0.8,
    });
    const title = new THREE.Mesh(titleGeometry, titleMaterial);
    title.position.set(0, 1, 0.11);
    bookGroup.add(title);

    // Golden cross symbol
    const crossVertical = new THREE.BoxGeometry(0.1, 1, 0.22);
    const crossHorizontal = new THREE.BoxGeometry(0.6, 0.1, 0.22);
    const crossMaterial = new THREE.MeshStandardMaterial({
      color: 0xe9c46a,
      emissive: 0xe9c46a,
      emissiveIntensity: 0.5,
      roughness: 0.1,
      metalness: 0.9,
    });
    
    const crossV = new THREE.Mesh(crossVertical, crossMaterial);
    crossV.position.set(0, -0.5, 0.11);
    bookGroup.add(crossV);
    
    const crossH = new THREE.Mesh(crossHorizontal, crossMaterial);
    crossH.position.set(0, -0.5, 0.11);
    bookGroup.add(crossH);

    // Add glow effect around book
    const glowGeometry = new THREE.BoxGeometry(3.2, 4.2, 0.3);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4a261,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    bookGroup.add(glow);

    scene.add(bookGroup);

    // Animation
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating animation
      bookGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

      // Rotate based on mouse position
      bookGroup.rotation.y = mouseX * 0.5 + Math.sin(elapsedTime * 0.3) * 0.3;
      bookGroup.rotation.x = mouseY * 0.3 + Math.cos(elapsedTime * 0.2) * 0.1;

      // Pulsing glow
      glowMaterial.opacity = 0.1 + Math.sin(elapsedTime * 2) * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      coverGeometry.dispose();
      coverMaterial.dispose();
      pagesGeometry.dispose();
      pagesMaterial.dispose();
      titleGeometry.dispose();
      titleMaterial.dispose();
      crossVertical.dispose();
      crossHorizontal.dispose();
      crossMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
}
