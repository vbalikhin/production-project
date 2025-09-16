import webpack from "webpack";
import {buildWebpackConfig} from "./config/buildConfig/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/buildConfig/types/config";
import path from "path";


export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development'
    const PORT = 3000

    const isDev = mode === 'development'

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config
}