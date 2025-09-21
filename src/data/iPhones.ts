export interface iPhone {
  name: string;
  display: string;
  chip: string;
  ram: string;
  cameras: {
    rear: string;
    front: string;
  };
  battery: string;
  storageOptions: string[];
  releaseYear: number;
  image: string;
  description: string;
}

const iphones: iPhone[] = [
    {
      name: "iPhone XR",
      display: "6.1‑inch Liquid Retina HD LCD",
      chip: "A12 Bionic",
      ram: "3 GB",
      cameras: {
        rear: "12 MP Wide",
        front: "7 MP TrueDepth"
      },
      battery: "Up to 16 hrs video playback",
      storageOptions: ["64 GB", "128 GB", "256 GB"],
      releaseYear: 2018,
      image: "/src/assets/iPhone/iPhone XR/iPhone-XR.jpeg",
      description: "Balanced performance with good battery life, and a solid all-rounder at a lower cost in the XR line."
    },
    {
      name: "iPhone 12 mini",
      display: "5.4‑inch Super Retina XDR OLED",
      chip: "A14 Bionic",
      ram: "4 GB",  // :contentReference[oaicite:1]{index=1}
      cameras: {
        rear: "Dual 12 MP (Wide + Ultra Wide)",
        front: "12 MP TrueDepth"
      },
      battery: "≈ 2,227 mAh",  // :contentReference[oaicite:2]{index=2}
      storageOptions: ["64 GB", "128 GB", "256 GB"],
      releaseYear: 2020,
      image: "/src/assets/iPhone/iPhone 12/iPhone-12-Mini.jpeg",
      description: "Compact‑sized model; great for users who prefer smaller devices but still want flagship features."
    },
    {
      name: "iPhone 12",
      display: "6.1‑inch Super Retina XDR OLED",
      chip: "A14 Bionic",
      ram: "4 GB",  // :contentReference[oaicite:3]{index=3}
      cameras: {
        rear: "Dual 12 MP (Wide + Ultra Wide)",
        front: "12 MP TrueDepth"
      },
      battery: "≈ 2,815 mAh",  // :contentReference[oaicite:4]{index=4}
      storageOptions: ["64 GB", "128 GB", "256 GB"],
      releaseYear: 2020,
      image: "/src/assets/iPhone/iPhone 12/iPhone-12.jpeg",
      description: "Standard base model in the 12 series; offers OLED display, 5G, and strong performance."
    },
    {
      name: "iPhone 12 Pro",
      display: "6.1‑inch Super Retina XDR OLED",
      chip: "A14 Bionic",
      ram: "6 GB",  // :contentReference[oaicite:5]{index=5}
      cameras: {
        rear: "Triple 12 MP (Wide + Ultra Wide + Telephoto) + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "≈ 2,815 mAh",  // :contentReference[oaicite:6]{index=6}
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2020,
      image: "/src/assets/iPhone/iPhone 12/iPhone-12-Pro.jpeg",
      description: "Pro‑level camera improvements, premium materials, and enhanced photography features."
    },
    {
      name: "iPhone 12 Pro Max",
      display: "6.7‑inch Super Retina XDR OLED",
      chip: "A14 Bionic",
      ram: "6 GB",  // :contentReference[oaicite:7]{index=7}
      cameras: {
        rear: "Triple 12 MP (Wide + Ultra Wide + Telephoto) + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "≈ 3,687 mAh",  // :contentReference[oaicite:8]{index=8}
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2020,
      image: "/src/assets/iPhone/iPhone 12/iPhone-12-Pro-Max.jpeg",
      description: "Largest screen in the 12 lineup, better zoom, best battery capacity among the 12 series."
    },
    {
      name: "iPhone 13",
      display: "6.1‑inch Super Retina XDR OLED",
      chip: "A15 Bionic",
      ram: "4 GB",  // :contentReference[oaicite:9]{index=9}
      cameras: {
        rear: "Dual 12 MP (Wide + Ultra Wide)",
        front: "12 MP TrueDepth"
      },
      battery: "Improved over 12, moderate gains",
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2021,
      image: "/src/assets/iPhone/iPhone 13/iPhone-13.jpeg",
      description: "Solid all‑round model: improvements in camera processing, battery efficiency, and slight design tweaks."
    },
    {
      name: "iPhone 13 Pro",
      display: "6.1‑inch Super Retina XDR OLED (ProMotion)",
      chip: "A15 Bionic",
      ram: "6 GB",  // :contentReference[oaicite:10]{index=10}
      cameras: {
        rear: "Triple 12 MP (Wide + Ultra Wide + Telephoto) + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "Better than non‑Pro; stronger for photography/video",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2021,
      image: "/src/assets/iPhone/iPhone 13/iPhone-13-Pro.jpeg",
      description: "Pro benefits: smoother display, better camera flexibility, enhanced video features."
    },
    {
      name: "iPhone 13 Pro Max",
      display: "6.7‑inch Super Retina XDR OLED (ProMotion)",
      chip: "A15 Bionic",
      ram: "6 GB",  // :contentReference[oaicite:11]{index=11}
      cameras: {
        rear: "Triple 12 MP (Wide + Ultra Wide + Telephoto) + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "Largest in the 13 series, great for video & gaming",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2021,
      image: "/src/assets/iPhone/iPhone 13/iPhone-13-Pro-Max.jpeg",
      description: "Flagship size in 13, with best camera and battery in that generation."
    },
    {
      name: "iPhone 14",
      display: "6.1‑inch Super Retina XDR OLED",
      chip: "A15 Bionic (updated with new internal features)",
      ram: "6 GB",  // :contentReference[oaicite:12]{index=12}
      cameras: {
        rear: "Dual 12 MP (Wide + Ultra Wide)",
        front: "12 MP TrueDepth"
      },
      battery: "Better efficiency and small battery improvements over 13",
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2022,
      image: "/src/assets/iPhone/iPhone 14/iPhone-14.jpeg",
      description: "Incremental upgrades: slightly better performance, camera tweaks, new safety features."
    },
    {
      name: "iPhone 14 Pro",
      display: "6.1‑inch OLED, ProMotion 120Hz",
      chip: "A16 Bionic",
      ram: "6 GB",
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "Stronger battery, more power for high frame rate usage",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2022,
      image: "/src/assets/iPhone/iPhone 14/iPhone-14-Pro.jpeg",
      description: "Flagship‑grade model with high refresh rate display and advanced camera sensors."
    },
    {
      name: "iPhone 14 Pro Max",
      display: "6.7‑inch OLED, ProMotion 120Hz",
      chip: "A16 Bionic",
      ram: "6 GB",
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + LiDAR",
        front: "12 MP TrueDepth"
      },
      battery: "Largest battery in 14 series, excellent for multimedia",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2022,
      image: "/src/assets/iPhone/iPhone 14/iPhone-14-Pro-Max.jpeg",
      description: "Largest screen in the 14 lineup with Pro features and best battery capacity."
    },
    {
      name: "iPhone 15",
      display: "6.1‑inch OLED with improvements (USB‑C etc.)",
      chip: "A16 Bionic",
      ram: "6 GB",  // :contentReference[oaicite:14]{index=14}
      cameras: {
        rear: "48 MP Main + Ultra Wide",
        front: "Front upgraded over 14"
      },
      battery: "Better efficiency and battery life than 14",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB (in Pro)"],
      releaseYear: 2023,
      image: "/src/assets/iPhone/iPhone 15/iPhone-15.jpeg",
      description: "First mid‑tier base with 48 MP main camera; more improvements in charging & display tech."
    },
    {
      name: "iPhone 15 Pro",
      display: "6.1‑inch ProMotion OLED 120Hz",
      chip: "A17 Pro",
      ram: "8 GB",
      cameras: {
        rear: "48 MP + Ultra Wide + Telephoto + other Pro sensors",
        front: "High‑spec front camera"
      },
      battery: "Improved power delivery, better performance under load",
      storageOptions: ["128 GB", "256 GB", "512 GB", "1 TB"],
      releaseYear: 2023,
      image: "/src/assets/iPhone/iPhone 15/iPhone-15-Pro.jpeg",
      description: "Top of the line: Pro features (display, camera, materials) designed for power users."
    },
    {
      name: "iPhone 15 Pro Max",
      display: "6.7‑inch ProMotion OLED 120Hz",
      chip: "A17 Pro",
      ram: "8 GB",
      cameras: {
        rear: "48 MP + Ultra Wide + Telephoto + other Pro sensors",
        front: "High‑spec front camera"
      },
      battery: "Largest battery in 15 series, excellent for power users",
      storageOptions: ["256 GB", "512 GB", "1 TB"],
      releaseYear: 2023,
      image: "/src/assets/iPhone/iPhone 15/iPhone-15-Pro-Max.jpeg",
      description: "Largest screen in the 15 lineup with Pro features and best battery capacity."
    },
    {
      name: "iPhone 16",
      display: "6.1‑inch OLED (same as base of iPhone 16 series)",
      chip: "A18 Bionic",
      ram: "8 GB",
      cameras: {
        rear: "48 MP Main + Ultra Wide",
        front: "12 MP TrueDepth or upgraded spec"
      },
      battery: "Enhanced efficiency and battery life improvements over 15",
      storageOptions: ["128 GB", "256 GB", "512 GB"],
      releaseYear: 2024,
      image: "/src/assets/iPhone/iPhone 16/iPhone-16.jpeg",
      description: "Value & performance in the 16 series; good balance if you want newer chip & camera without going Pro."
    },
    {
      name: "iPhone 16 Pro",
      display: "6.1‑inch ProMotion OLED 120Hz",
      chip: "A18 Pro",
      ram: "8 GB",
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + LiDAR",
        front: "12 MP TrueDepth or upgraded spec"
      },
      battery: "Enhanced efficiency and battery life improvements over 15 Pro",
      storageOptions: ["256 GB", "512 GB", "1 TB"],
      releaseYear: 2024,
      image: "/src/assets/iPhone/iPhone 16/iPhone-16-Pro.jpeg",
      description: "Pro model in the 16 lineup: advanced display, cameras, and features for creators and heavy users."
    },
    {
      name: "iPhone 16 Pro Max",
      display: "6.7‑inch ProMotion OLED 120Hz",
      chip: "A18 Pro",
      ram: "8 GB",
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + LiDAR",
        front: "12 MP TrueDepth or upgraded spec"
      },
      battery: "Largest battery in 16 series, excellent for multimedia, gaming",
      storageOptions: ["256 GB", "512 GB", "1 TB"],
      releaseYear: 2024,
      image: "/src/assets/iPhone/iPhone 16/iPhone-16-Pro-Max.jpeg",
      description: "Flagship of flagships: max display size, top camera setup, highest RAM & storage."
    },
    {
      name: "iPhone 17",
      display: "6.3‑inch Super Retina XDR OLED with ProMotion / Always‑On (expected)",
      chip: "A19 Bionic",
      ram: "8 GB",  // leaks say base iPhone 17 may have 8 GB :contentReference[oaicite:17]{index=17}
      cameras: {
        rear: "48 MP Main + Enhanced Ultra Wide",
        front: "18 MP / Center Stage (expected upgrades)"
      },
      battery: "Longer battery life, faster charging, more efficient internals",
      storageOptions: ["256 GB", "512 GB", "1 TB"],
      releaseYear: 2025,
      image: "/src/assets/iPhone/iPhone 17/iPhone-17.jpeg",
      description: "Latest generation; more powerful chip, display improvements; good choice for those wanting the newest without going Pro‑Max."
    },
    {
      name: "iPhone 17 Pro",
      display: "6.3‑inch ProMotion OLED 120Hz",
      chip: "A19 Pro",
      ram: "12 GB",  // confirmed for Pro & Pro Max models :contentReference[oaicite:18]{index=18}
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + LiDAR/other advanced sensors",
        front: "18 MP high‑spec front camera"
      },
      battery: "Top of the line power, large battery expected (Pro versions designed for power users)",
      storageOptions: ["256 GB", "512 GB", "1 TB", "2 TB"],
      releaseYear: 2025,
      image: "/src/assets/iPhone/iPhone 17/iPhone-17-Pro.jpeg",
      description: "Pro model in the 17 lineup: advanced display, cameras, and features for creators and heavy users."
    },
    {
      name: "iPhone 17 Pro Max",
      display: "6.9‑inch ProMotion OLED 120Hz",
      chip: "A19 Pro",
      ram: "12 GB",  // :contentReference[oaicite:19]{index=19}
      cameras: {
        rear: "48 MP Main + Ultra Wide + Telephoto + best optics among 17 line",
        front: "18 MP high spec front camera"
      },
      battery: "Largest battery in 17 series, excellent for multimedia, gaming",
      storageOptions: ["256 GB", "512 GB", "1 TB", "2 TB"],
      releaseYear: 2025,
      image: "/src/assets/iPhone/iPhone 17/iPhone-17-Pro-Max.jpeg",
      description: "Flagship of flagships: max display size, top camera setup, highest RAM & storage."
    }
  ];

export default iphones;
  