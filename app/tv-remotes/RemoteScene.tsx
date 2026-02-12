"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Environment, useGLTF } from "@react-three/drei";
import { animate } from "animejs";
import type { Group } from "three";

type Props = {
  modelUrl: string;
  className?: string;
};

type ScrollProps = {
  modelUrl: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
};

type ProgressRef = {
  value: number;
};

function RemoteModel({ modelUrl, scrollRef }: ScrollProps) {
  const groupRef = useRef<Group | null>(null);
  const progressRef = useRef<ProgressRef>({ value: 0.5 });
  const { scene } = useGLTF(modelUrl);

  useEffect(() => {
    const section = scrollRef.current;

    if (!section) {
      return;
    }

    let animationFrame = 0;
    let activeAnimation: ReturnType<typeof animate> | null = null;

    const update = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const total = rect.height + viewHeight;
      const progress = Math.min(
        Math.max((viewHeight - rect.top) / total, 0),
        1
      );

      if (activeAnimation) {
        activeAnimation.pause();
      }

      activeAnimation = animate(progressRef.current, {
        value: progress,
        duration: 420,
        easing: "easeOutQuad",
      });
    };

    const onScroll = () => {
      if (animationFrame) {
        return;
      }
      animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (activeAnimation) {
        activeAnimation.pause();
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) {
      return;
    }

    const progress = progressRef.current.value;
    group.rotation.x = (-12 + progress * 24) * (Math.PI / 180);
    group.rotation.y = (-28 + progress * 56) * (Math.PI / 180);
    group.position.y = (0.5 - progress) * 0.6;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={1.4} />
      </Center>
    </group>
  );
}

export default function RemoteScene({ modelUrl, className }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerClassName =
    className ?? "h-[420px] w-full sm:h-[520px] lg:h-[620px]";

  return (
    <div ref={scrollRef} className={containerClassName}>
      <Canvas camera={{ position: [0, 0.4, 3.4], fov: 42 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Environment preset="studio" />
        <RemoteModel modelUrl={modelUrl} scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/remote.glb");
