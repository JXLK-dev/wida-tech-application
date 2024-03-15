/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    MYSQL_HOST: "sql6.freemysqlhosting.net",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "sql6690801",
    MYSQL_USER: "sql6690801",
    MYSQL_PASSWORD: "BqAzB61Sz3",
  },
};

export default nextConfig;
