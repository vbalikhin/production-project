export type BuildMod = 'development' | 'production'

export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: BuildMod;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}