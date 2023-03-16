/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
    distDir: "build",
    compiler: {
        styledComponents: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/],
            },

            use: ["@svgr/webpack"],
        });

        return config;
    },

    // to just include mp4 video files
    // {
    // 	test: /\.(mp4)$/i,
    // 	use: [
    // 		{
    // 			loader: "file-loader",
    // 			options: {
    // 				publicPath: `/_next/static/videos/`,
    // 				outputPath: `${isServer ? "../" : ""}static/videos/`,
    // 				name: "[name].[hash].[ext]",
};

module.exports = nextConfig;
