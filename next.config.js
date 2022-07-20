/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "",
        domains: [
            "ipfs.io",
            "ipfs.fleek.co",
            "res.cloudinary.com",
            "ipfs.fleek.io",
            "cloudflare-ipfs.com",
            "arweave.net",
            "ipfs.infura.io",
        ],
    },
}

module.exports = nextConfig
