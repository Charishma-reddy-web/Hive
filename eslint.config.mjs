import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: ["web/**", "cms/**", "src/**", ".next/**", "node_modules/**"]
  },
  ...nextVitals
];

export default config;
