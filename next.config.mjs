/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn2.steamgriddb.com', 'themoviedb.org'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.apk$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/apk/',
                    publicPath: '/_next/static/apk/',
                },
            },
        });
        return config;
    }
}

export default nextConfig;

