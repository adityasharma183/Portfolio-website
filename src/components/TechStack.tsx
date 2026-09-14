import * as THREE from "three";
import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./styles/TechStack.css";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiGithub,
  SiJira,
  SiPostman,
  SiAxios,
  SiNetlify,
  SiRender,
  SiGooglegemini,
} from "react-icons/si";

import {
  TbCode,
  TbDatabase,
  TbDeviceMobile,
  TbApi,
  TbCloud,
  TbInfinity,
  TbTerminal2,
  TbUsersGroup,
  TbGitBranch,
  TbTestPipe,
  TbSparkles,
  TbBrain,
  TbRocket,
} from "react-icons/tb";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Cloud & DevOps",
  "Tools",
  "Deployment",
  "Methodologies",
  "AI",
] as const;
type Category = (typeof categories)[number];

interface TechItem {
  id: string;
  name: string;
  category: Category;
  color: string;
  image: string;
  desc: string;
}

const techItems: TechItem[] = [
  {
    id: "react",
    name: "React.js",
    category: "Frontend",
    color: "#61dafb",
    image: "/images/react2.webp",
    desc: "Modern Component Architecture, Hooks, Context API, Virtual DOM",
  },
  {
    id: "next",
    name: "Next.js",
    category: "Frontend",
    color: "#ffffff",
    image: "/images/next2.webp",
    desc: "Server-Side Rendering, App Router, Full-Stack Production React",
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "Languages",
    color: "#3178c6",
    image: "/images/typescript.webp",
    desc: "Strict Static Typing, Generic Architectures, Reliable Codebases",
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Languages",
    color: "#f7df1e",
    image: "/images/javascript.webp",
    desc: "ES6+, Async/Await, High Performance Web Scripting",
  },
  {
    id: "node",
    name: "Node.js",
    category: "Backend",
    color: "#68a063",
    image: "/images/node2.webp",
    desc: "Scalable Event-Driven Runtime, REST APIs, Microservices",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    color: "#e2e8f0",
    image: "/images/express.webp",
    desc: "RESTful Routing, Middleware Architecture, JWT Authentication",
  },
  {
    id: "mongo",
    name: "MongoDB",
    category: "Database",
    color: "#47a248",
    image: "/images/mongo.webp",
    desc: "NoSQL Document Schemas, Aggregations, Mongoose ODM",
  },
  {
    id: "mysql",
    name: "PostgreSQL / SQL",
    category: "Database",
    color: "#38bdf8",
    image: "/images/mysql.webp",
    desc: "Relational Schemas, Prisma ORM, ACID Transactions",
  },
  {
    id: "gemini",
    name: "Google Gemini AI",
    category: "AI",
    color: "#c084fc",
    image: "/images/gemini.jpg",
    desc: "Generative AI APIs, Intelligent Triage, Prompt Engineering",
  },
  {
    id: "docker",
    name: "Docker",
    category: "Cloud & DevOps",
    color: "#00b4d8",
    image: "/images/docker.jpg",
    desc: "Containerization, Consistent Development & Production Workflows",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    category: "Cloud & DevOps",
    color: "#ff9900",
    image: "/images/aws.jpg",
    desc: "Cloud Infrastructure, Scalable Hosting, CI/CD Pipeline Workflows",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    color: "#38bdf8",
    image: "/images/tailwind.jpg",
    desc: "Utility-First CSS, Responsive Systems, Modern Glassmorphic UI",
  },
];

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillGroup {
  id: string;
  category: Category;
  title: string;
  accentColor: string;
  glowColor: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    category: "Languages",
    title: "Languages",
    accentColor: "#f7df1e",
    glowColor: "rgba(247, 223, 30, 0.25)",
    icon: TbCode,
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: TbDatabase },
    ],
  },
  {
    id: "frontend",
    category: "Frontend",
    title: "Frontend",
    accentColor: "#61dafb",
    glowColor: "rgba(97, 218, 251, 0.25)",
    icon: SiReact,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: TbDeviceMobile },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    title: "Backend",
    accentColor: "#68a063",
    glowColor: "rgba(104, 160, 99, 0.25)",
    icon: SiNodedotjs,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: TbApi },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
    ],
  },
  {
    id: "database",
    category: "Database",
    title: "Database",
    accentColor: "#47a248",
    glowColor: "rgba(71, 162, 72, 0.25)",
    icon: TbDatabase,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    id: "cloud-devops",
    category: "Cloud & DevOps",
    title: "Cloud & DevOps",
    accentColor: "#ff9900",
    glowColor: "rgba(255, 153, 0, 0.25)",
    icon: TbCloud,
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Cloud Computing", icon: TbCloud },
      { name: "CI/CD Pipelines", icon: TbInfinity },
      { name: "DevOps Fundamentals", icon: TbTerminal2 },
      { name: "Docker Fundamentals", icon: SiDocker },
    ],
  },
  {
    id: "tools",
    category: "Tools",
    title: "Tools",
    accentColor: "#f05032",
    glowColor: "rgba(240, 80, 50, 0.25)",
    icon: SiGit,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
      { name: "Postman", icon: SiPostman },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    id: "deployment",
    category: "Deployment",
    title: "Deployment",
    accentColor: "#00c7b7",
    glowColor: "rgba(0, 199, 183, 0.25)",
    icon: TbRocket,
    skills: [
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
    ],
  },
  {
    id: "methodologies",
    category: "Methodologies",
    title: "Methodologies",
    accentColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.25)",
    icon: TbUsersGroup,
    skills: [
      { name: "Agile Methodologies", icon: TbUsersGroup },
      { name: "SDLC", icon: TbGitBranch },
      { name: "Unit Testing", icon: TbTestPipe },
    ],
  },
  {
    id: "ai",
    category: "AI",
    title: "AI & Innovation",
    accentColor: "#c084fc",
    glowColor: "rgba(192, 132, 252, 0.25)",
    icon: TbSparkles,
    skills: [
      { name: "Google Gemini API", icon: SiGooglegemini },
      { name: "Prompt Engineering", icon: TbBrain },
    ],
  },
];

const RADIUS_X = 9.2;
const RADIUS_Z = 4.8;

type OrbProps = {
  item: TechItem;
  index: number;
  total: number;
  rotationRef: React.MutableRefObject<number>;
  activeId: string | null;
  selectedCategory: Category;
  onHover: (item: TechItem | null) => void;
  onClick: (item: TechItem) => void;
  texture: THREE.Texture;
};

function TechOrb({
  item,
  index,
  total,
  rotationRef,
  activeId,
  selectedCategory,
  onHover,
  onClick,
  texture,
}: OrbProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const isHovered = activeId === item.id;
  const isCategoryMatch =
    selectedCategory === "All" || item.category === selectedCategory;

  const sphereGeo = useMemo(() => new THREE.SphereGeometry(1.05, 32, 32), []);
  const ringGeo = useMemo(() => new THREE.TorusGeometry(1.28, 0.035, 16, 64), []);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Dynamically calculate responsive orbit radius based on viewport width
    const viewW = state.viewport.width;
    const currentRadiusX = Math.min(RADIUS_X, viewW * 0.42);
    const currentRadiusZ = Math.min(RADIUS_Z, currentRadiusX * 0.52);

    // Calculate position along 3D orbit
    const angle = rotationRef.current + (index / total) * Math.PI * 2;
    const x = Math.sin(angle) * currentRadiusX;
    const z = Math.cos(angle) * currentRadiusZ;
    const wave = Math.sin(angle * 2 + state.clock.getElapsedTime() * 0.9) * 0.4;

    groupRef.current.position.set(x, wave, z);
    groupRef.current.quaternion.copy(state.camera.quaternion);

    const depthFactor = (z + currentRadiusZ) / (2 * currentRadiusZ);
    const sizeMultiplier = Math.min(1, Math.max(0.7, viewW / 14));
    const targetScale =
      (isHovered
        ? 1.35
        : isCategoryMatch
        ? THREE.MathUtils.lerp(0.85, 1.15, depthFactor)
        : 0.65) * sizeMultiplier;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );

    if (ringRef.current) {
      ringRef.current.rotation.z += 0.015;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(item);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(item);
      }}
    >
      <mesh ref={ringRef} geometry={ringGeo}>
        <meshBasicMaterial
          color={item.color}
          transparent
          opacity={isHovered ? 0.95 : isCategoryMatch ? 0.45 : 0.15}
        />
      </mesh>

      <mesh geometry={sphereGeo}>
        <meshPhysicalMaterial
          map={texture}
          roughness={0.25}
          metalness={0.15}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
          emissive={new THREE.Color(isHovered ? item.color : "#222222")}
          emissiveIntensity={isHovered ? 0.6 : isCategoryMatch ? 0.25 : 0.05}
          transparent
          opacity={isCategoryMatch ? 1 : 0.35}
        />
      </mesh>
    </group>
  );
}

function ConstellationParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#c481ff"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [activeItem, setActiveItem] = useState<TechItem>(techItems[0]);
  const [isHovering, setIsHovering] = useState(false);

  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const previousPointerXRef = useRef(0);
  const velocityRef = useRef(0.0035);

  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const textures = useMemo(() => {
    return techItems.map((item) => {
      const tex = textureLoader.load(item.image);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    });
  }, [textureLoader]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    previousPointerXRef.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - previousPointerXRef.current;
    previousPointerXRef.current = e.clientX;
    rotationRef.current -= deltaX * 0.0045;
    velocityRef.current = -deltaX * 0.0045;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const handleGlobalUp = () => {
      isDraggingRef.current = false;
    };
    window.addEventListener("pointerup", handleGlobalUp);
    return () => window.removeEventListener("pointerup", handleGlobalUp);
  }, []);

  const filteredSkillGroups = useMemo(() => {
    if (selectedCategory === "All") return skillGroups;
    return skillGroups.filter((group) => group.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="techstack" id="techstack">
      <div className="techstack-header">
        <h2>Technical Stack</h2>
        <p className="techstack-subtitle">
          Interactive 3D Ecosystem • Frameworks, Cloud, Databases & Engineering Tooling
        </p>

        {/* Category Filter Chips */}
        <div className="tech-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-tab ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas Showcase */}
      <div
        className="tech-canvas-wrapper"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <Canvas
          camera={{ position: [0, 1.8, 17], fov: 36, near: 0.1, far: 100 }}
          className="tech-canvas"
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={1.4} />
          <pointLight position={[0, 8, 10]} intensity={2.2} color="#ffffff" />
          <pointLight position={[10, -5, 5]} intensity={1.5} color="#c481ff" />
          <pointLight position={[-10, 5, -5]} intensity={1.2} color="#61dafb" />

          <ConstellationParticles />

          <SceneController
            rotationRef={rotationRef}
            isDraggingRef={isDraggingRef}
            velocityRef={velocityRef}
            isHovering={isHovering}
          />

          {techItems.map((item, i) => (
            <TechOrb
              key={item.id}
              item={item}
              index={i}
              total={techItems.length}
              rotationRef={rotationRef}
              activeId={activeItem?.id || null}
              selectedCategory={selectedCategory}
              texture={textures[i]}
              onHover={(hovered) => {
                if (hovered) {
                  setActiveItem(hovered);
                  setIsHovering(true);
                } else {
                  setIsHovering(false);
                }
              }}
              onClick={(clicked) => {
                setActiveItem(clicked);
              }}
            />
          ))}
        </Canvas>
      </div>

      {/* Focused Technology Information Banner */}
      {activeItem && (
        <div className="tech-info-banner">
          <span
            className="banner-icon"
            style={{ backgroundColor: activeItem.color, color: activeItem.color }}
          />
          <div>
            <span className="banner-title">{activeItem.name}</span>
            <span className="banner-desc"> — {activeItem.desc}</span>
          </div>
        </div>
      )}

      {/* Interactive Quick-Select Tech Badges */}
      <div className="tech-badges-roster">
        {techItems.map((item, idx) => {
          const isSelected = activeItem?.id === item.id;
          const isCategoryMatch =
            selectedCategory === "All" || item.category === selectedCategory;
          return (
            <button
              key={item.id}
              type="button"
              className={`tech-roster-pill ${isSelected ? "is-active" : ""} ${
                !isCategoryMatch ? "is-dimmed" : ""
              }`}
              style={{
                borderColor: isSelected ? item.color : undefined,
                boxShadow: isSelected ? `0 0 15px ${item.color}40` : undefined,
              }}
              onClick={() => {
                setActiveItem(item);
                rotationRef.current = -(idx / techItems.length) * Math.PI * 2;
                velocityRef.current = 0.001;
              }}
            >
              <span
                className="roster-pill-dot"
                style={{ backgroundColor: item.color }}
              />
              <span className="roster-pill-name">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Comprehensive Technical Skills Matrix */}
      <div className="skills-matrix-section">
        <div className="skills-matrix-header">
          <h3>Technical Skills Matrix</h3>
          <p>Structured taxonomy of engineering capabilities and proficiencies</p>
        </div>

        <div className="skills-cards-grid">
          {filteredSkillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.id}
                className="skill-category-card"
                style={
                  {
                    "--card-accent": group.accentColor,
                    "--card-accent-glow": group.glowColor,
                  } as React.CSSProperties
                }
              >
                <div className="skill-card-header">
                  <div className="skill-card-icon-wrap">
                    <GroupIcon />
                  </div>
                  <h4 className="skill-card-title">{group.title}</h4>
                </div>

                <div className="skill-pills-wrap">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="skill-pill">
                        <SkillIcon className="skill-pill-icon" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Controls continuous rotation & inertia
function SceneController({
  rotationRef,
  isDraggingRef,
  velocityRef,
  isHovering,
}: {
  rotationRef: React.MutableRefObject<number>;
  isDraggingRef: React.MutableRefObject<boolean>;
  velocityRef: React.MutableRefObject<number>;
  isHovering: boolean;
}) {
  useFrame((_state, delta) => {
    if (!isDraggingRef.current) {
      const baseSpeed = isHovering ? 0.0008 : 0.003;
      velocityRef.current = THREE.MathUtils.lerp(
        velocityRef.current,
        baseSpeed,
        0.05
      );
      rotationRef.current += velocityRef.current * (delta * 60);
    }
  });

  return null;
}

export default TechStack;
