export type BuildMod = 'development' | 'production'

export interface BuildEnv {
    mode: BuildMod;
    port: number;
}

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildOptions {
    mode: BuildMod;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}