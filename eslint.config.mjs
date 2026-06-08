import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: ["web/**", "cms/**", ".next/**", "node_modules/**"]
  },
  ...nextVitals
];

export default config;
