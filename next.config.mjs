/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["zmqbvihwbortohifcnqy.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zmqbvihwbortohifcnqy.supabase.co",
        port: "",
        pathname: "storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;
