/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'react-reconciler'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
    ],
  },
  webpack: (config, { isServer }) => {
    // three/examples/jsm/tsl/* imports bare "three" but needs symbols (e.g.
    // PostProcessingUtils) that only exist in the WebGPU build. The "$" makes
    // this an exact-match alias so "three/tsl", "three/examples/..." etc. are
    // left untouched and still resolve to their real subpath exports.
    config.resolve.alias = {
      ...config.resolve.alias,
      three$: 'three/webgpu',
    };

    return config;
  },
};

export default nextConfig;
