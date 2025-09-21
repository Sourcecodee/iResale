export interface AppleWatch {
  name: string;
  chip: string;
  ram: string;
  storage: string;
  display: {
    size: string;
    resolution: string;
    protection: string;
    features: string;
  };
  releaseYear: number;
  battery: string;
  sensors: string[];
  image: string;
  description: string;
}

const appleWatches: AppleWatch[] = [
    {
      name: "Apple Watch Series 8",
      chip: "Apple S8",
      ram: "1 GB",  // GSMArena shows 1 GB RAM :contentReference[oaicite:0]{index=0}
      storage: "32 GB",  // internal storage :contentReference[oaicite:1]{index=1}
      display: {
        size: "1.9‑inch Retina LTPO OLED",
        resolution: "484 x 396 pixels",
        protection: "Sapphire crystal glass",
        features: "Always‑on display, LTPO, 1000 nits peak brightness"  // approx from sources :contentReference[oaicite:2]{index=2}
      },
      releaseYear: 2022,
      battery: "308 mAh",  // non‑removable :contentReference[oaicite:3]{index=3}
      sensors: [
        "ECG",
        "Heart Rate",
        "Temp sensor (body)",  // note: body temperature sensor is a feature in later models; Series 8 has temperature sensor used for e.g. cycle tracking retrospective; check whether “body” sensor available regionally :contentReference[oaicite:4]{index=4}
        "SpO2",
        "Altimeter",
        "Compass",
        "Gyroscope",
        "Accelerometer",
        "Ambient light sensor"
      ],
      image: "/src/assets/Watch/series8/Apple-Watch-Series-8.jpeg",
      description: "Series 8 brings a solid set of health sensors, 1 GB RAM, a durable build, always‑on display and 32 GB storage – good balance between features and price."
    },
    {
      name: "Apple Watch Series 9",
      chip: "Apple S9",
      ram: "1 GB",  // often reported same as Series 8; some uncertainty but reliable sources indicate 1 GB :contentReference[oaicite:5]{index=5}
      storage: "64 GB",  // internal storage :contentReference[oaicite:6]{index=6}
      display: {
        size: "1.9‑inch Retina LTPO OLED",
        resolution: "484 x 396 pixels",
        protection: "Sapphire crystal glass",
        features: "Always‑on display, LTPO, ~2000 nits peak brightness"  // brighter than Series 8 :contentReference[oaicite:7]{index=7}
      },
      releaseYear: 2023,
      battery: "308 mAh",  // similar to Series 8 in many specs :contentReference[oaicite:8]{index=8}
      sensors: [
        "ECG",
        "Heart Rate",
        "Body Temperature sensing",
        "SpO2",
        "Altimeter (always on)",
        "Compass",
        "Accelerometer",
        "Gyroscope",
        "Ambient light sensor"
      ],
      image: "/src/assets/Watch/series9/Apple-Watch-Series-9.jpeg",
      description: "Series 9 improves display brightness, adds more storage (64 GB), maintains similar battery capacity, plus upgraded sensors – a good step up from Series 8."
    },
    {
      name: "Apple Watch Series 10",
      chip: "Apple S10 SiP",  // new chip per Apple support :contentReference[oaicite:9]{index=9}
      // RAM not explicitly confirmed yet in reliable sources (1 GB or more) — leave as unknown or estimate
      ram: "Unknown / Not officially disclosed",  
      storage: "64 GB",  // Apple support lists 64 GB :contentReference[oaicite:10]{index=10}
      display: {
        // Multiple size options
        size: "42 mm / 46 mm cases",
        resolution: "374 x 446 px (42 mm) OR 416 x 496 px (46 mm)",
        protection: "OLED, wide‑angle, brighter screen",  // approx from release info :contentReference[oaicite:11]{index=11}
        features: "Always‑on display, brighter wide‑angle OLED, larger display area vs previous, thinner design"  // from announcement articles :contentReference[oaicite:12]{index=12}
      },
      releaseYear: 2024,
      battery: "≈ 18‑hour typical use",  // Apple gives this baseline; exact mAh spec not clearly published in all sources :contentReference[oaicite:13]{index=13}
      sensors: [
        "ECG",
        "Heart Rate",
        "Electrical heart sensor",
        "Optical heart sensor (3rd generation)",
        "Temperature sensor",
        "Compass",
        "Always‑on altimeter",
        "High dynamic range gyroscope",
        "Ambient light sensor",
        "Depth gauge",
        "Water temperature sensor"
      ],
      image: "/src/assets/Watch/series10/Apple-Watch-Series-10.jpeg",
      description: "Series 10 features a bigger, brighter wide‑angle display, thinner and lighter body, new S10 chip, 64 GB storage, and more advanced sensors. Excellent choice for those wanting the latest smartwatch tech."
    },
    {
      name: "Apple Watch Series 8 (GPS + Cellular)",
      chip: "Apple S8",
      ram: "1 GB",
      storage: "32 GB",
      display: {
        size: "1.9‑inch Retina LTPO OLED",
        resolution: "484 x 396 pixels",
        protection: "Sapphire crystal glass",
        features: "Always‑on display, LTPO, 1000 nits peak brightness"
      },
      releaseYear: 2022,
      battery: "308 mAh",
      sensors: [
        "ECG",
        "Heart Rate",
        "Temp sensor (body)",
        "SpO2",
        "Altimeter",
        "Compass",
        "Gyroscope",
        "Accelerometer",
        "Ambient light sensor"
      ],
      image: "/src/assets/Watch/series8/Apple-Watch-Series-8-Alternative.jpeg",
      description: "Series 8 with GPS + Cellular connectivity, perfect for staying connected without your iPhone nearby. Same great features with added independence."
    },
    {
      name: "Apple Watch Series 9 (GPS + Cellular)",
      chip: "Apple S9",
      ram: "1 GB",
      storage: "64 GB",
      display: {
        size: "1.9‑inch Retina LTPO OLED",
        resolution: "484 x 396 pixels",
        protection: "Sapphire crystal glass",
        features: "Always‑on display, LTPO, ~2000 nits peak brightness"
      },
      releaseYear: 2023,
      battery: "308 mAh",
      sensors: [
        "ECG",
        "Heart Rate",
        "Body Temperature sensing",
        "SpO2",
        "Altimeter (always on)",
        "Compass",
        "Accelerometer",
        "Gyroscope",
        "Ambient light sensor"
      ],
      image: "/src/assets/Watch/series9/Apple-Watch-Series-9-Alternative.jpeg",
      description: "Series 9 with GPS + Cellular connectivity, featuring improved display brightness and enhanced sensors. Stay connected and track your health independently."
    },
    {
      name: "Apple Watch Series 10 (GPS + Cellular)",
      chip: "Apple S10 SiP",
      ram: "Unknown / Not officially disclosed",
      storage: "64 GB",
      display: {
        size: "42 mm / 46 mm cases",
        resolution: "374 x 446 px (42 mm) OR 416 x 496 px (46 mm)",
        protection: "OLED, wide‑angle, brighter screen",
        features: "Always‑on display, brighter wide‑angle OLED, larger display area vs previous, thinner design"
      },
      releaseYear: 2024,
      battery: "≈ 18‑hour typical use",
      sensors: [
        "ECG",
        "Heart Rate",
        "Electrical heart sensor",
        "Optical heart sensor (3rd generation)",
        "Temperature sensor",
        "Compass",
        "Always‑on altimeter",
        "High dynamic range gyroscope",
        "Ambient light sensor",
        "Depth gauge",
        "Water temperature sensor"
      ],
      image: "/src/assets/Watch/series10/Apple-Watch-Series-10-Alternative.jpeg",
      description: "Series 10 with GPS + Cellular connectivity, featuring the biggest display yet and most advanced sensors. Perfect for active users who need constant connectivity."
    },
    {
      name: "Apple Watch Series 10 (Larger Case)",
      chip: "Apple S10 SiP",
      ram: "Unknown / Not officially disclosed",
      storage: "64 GB",
      display: {
        size: "46 mm case",
        resolution: "416 x 496 px",
        protection: "OLED, wide‑angle, brighter screen",
        features: "Always‑on display, brighter wide‑angle OLED, largest display area, thinner design"
      },
      releaseYear: 2024,
      battery: "≈ 18‑hour typical use",
      sensors: [
        "ECG",
        "Heart Rate",
        "Electrical heart sensor",
        "Optical heart sensor (3rd generation)",
        "Temperature sensor",
        "Compass",
        "Always‑on altimeter",
        "High dynamic range gyroscope",
        "Ambient light sensor",
        "Depth gauge",
        "Water temperature sensor"
      ],
      image: "/src/assets/Watch/series10/Apple-Watch-Series-10-Third.jpeg",
      description: "Series 10 in the larger 46mm case size, offering the biggest display and best battery life. Ideal for users who prefer larger watches and extended usage."
    }
  ];

export default appleWatches;