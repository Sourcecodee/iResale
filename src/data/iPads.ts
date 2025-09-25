export interface iPad {
  name: string;
  display: string;
  chip: string;
  ram: string;
  storageOptions: string[];
  releaseYear: number;
  battery: string;
  cameras: {
    rear: string;
    front: string;
  };
  image: string;
  description: string;
}

const ipads: iPad[] = [
    {
      name: "iPad (10th Generation)",
      display: "10.9‑inch Liquid Retina IPS LCD, 2360×1640 px",
      chip: "A14 Bionic",
      ram: "4 GB",  // base model RAM per 9to5Mac listing :contentReference[oaicite:0]{index=0}
      storageOptions: ["64 GB", "256 GB"],
      releaseYear: 2022,
      battery: "Up to 10 hours of web / video use",
      cameras: {
        rear: "12 MP Wide",
        front: "12 MP Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-10th-Generation.jpeg",
      description: "A modern redesign from older base iPads — USB‑C, flat edges, brighter screen and fresh colours."
    },
    {
      name: "iPad (11th Generation / A16 base iPad)",
      display: "10.9‑inch LED/Liquid Retina, 2360×1640 px",
      chip: "A16 chip",
      ram: "6 GB",  // as listed for the 11th-gen base iPad in recent reviews :contentReference[oaicite:1]{index=1}
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2025,
      battery: "Similar battery as previous generation, ~10 hours typical usage",
      cameras: {
        rear: "12 MP Wide",
        front: "12 MP Center Stage"
      },
      image: "/assets/iPads/iPad-11th-Generation.jpeg",
      description: "Latest base iPad: upgraded chip, doubled starting storage, refined internals for everyday use."
    },
    {
      name: "iPad Air (11‑inch, M3)",
      display: "11‑inch Liquid Retina, 2360×1640 px IPS LCD (LED backlit)",
      chip: "Apple M3",
      ram: "8 GB",  // per Apple specs for the Air models :contentReference[oaicite:2]{index=2}
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2024,
      battery: "Approx typical use battery; solid for daily tasks", 
      cameras: {
        rear: "12 MP Wide",
        front: "12 MP Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-Air-11-inch-M3.jpeg",
      description: "Lightweight yet powerful: the M3 chip, great display, high storage options, ideal for creatives & multitaskers."
    },
    {
      name: "iPad Air (13‑inch, M3)",
      display: "13‑inch Liquid Retina, 2732×2048 px IPS LCD",
      chip: "Apple M3",
      ram: "8 GB",  // same as 11‑inch Air per Apple specs :contentReference[oaicite:3]{index=3}
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2024,
      battery: "Large battery; good for long hours of use, video, drawing etc.",
      cameras: {
        rear: "12 MP Wide",
        front: "12 MP Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-Air-13-inch-M3.jpeg",
      description: "Big‑screen Air: excellent for multitasking, content creation, or as a laptop replacement in portability‑focused setups."
    },
    {
      name: "iPad mini (6th / latest)",
      display: "8.3‑inch Liquid Retina, 2266×1488 px IPS LCD",
      chip: "A15 Bionic / latest chip (if newer model)",  
      ram: "8 GB",  // recent tests and reports confirm 8 GB for mini as of 2024/2025 :contentReference[oaicite:4]{index=4}
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2024,  // for latest mini update :contentReference[oaicite:5]{index=5}
      battery: "Good battery for small form‑factor; less than Air/Pro but very portable",
      cameras: {
        rear: "12 MP Wide",
        front: "12 MP Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-mini-6th-latest.jpeg",
      description: "Compact powerhouse: less size, strong chip & RAM, ideal for portability and travel."
    },
    {
      name: "iPad Pro (11‑inch, M4)",
      display: "11‑inch OLED / Liquid Retina / ProMotion depending on variant, high refresh rate",
      chip: "Apple M4",
      ram: "8 GB (up to 16 GB for higher/storage models)",  // as per leaks / 9to5Mac data :contentReference[oaicite:6]{index=6}
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
      releaseYear: 2024,
      battery: "Top‑level battery life, good for heavy workloads, pro apps, video editing",
      cameras: {
        rear: "12 MP Wide + Ultra Wide + Telephoto / LiDAR etc.",
        front: "12 MP / Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-Pro-11-inch-M4.jpeg",
      description: "Designed for power users: high refresh display, strong chip, excellent for creatives & professionals."
    },
    {
      name: "iPad Pro (13‑inch, M4)",
      display: "13‑inch high end OLED / Liquid Retina / ProMotion display",
      chip: "Apple M4",
      ram: "8‑16 GB depending on storage tier",  // high storage = more RAM in Pro models :contentReference[oaicite:7]{index=7}
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"],
      releaseYear: 2024,
      battery: "Largest battery in Pro line; great for video editing, design work on larger canvas",
      cameras: {
        rear: "12 MP Wide + Ultra Wide + Telephoto / LiDAR etc.",
        front: "12 MP / Ultra Wide Center Stage"
      },
      image: "/assets/iPads/iPad-Pro-13-inch-M4.jpeg",
      description: "Max canvas size, highest specs, powerhouse performance for professional & creator workflows."
    }
  ];

export default ipads;