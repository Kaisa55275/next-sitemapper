declare type PathMap = Record<string, Record<string, string>>;
export declare type SitemapConfig = Partial<Omit<SiteMapper, 'sitemapTag' | 'sitemapUrlSet'>>;
declare class SiteMapper {
    alternatesUrls: Record<string, string>;
    baseUrl: string;
    extraPaths: string[];
    ignoreIndexFiles: string[] | boolean;
    ignoredPaths: (string | RegExp)[];
    pagesDirectory: string;
    targetDirectory: string;
    sitemapFilename: string;
    nextConfigPath: string;
    ignoredExtensions: string[];
    pagesConfig: Record<string, {
        priority: string;
        changefreq: string;
    }>;
    sitemapStylesheet: {
        type: string;
        styleFile: string;
    }[];
    sitemapTag: string;
    sitemapUrlSet: string;
    nextConfig?: {
        exportTrailingSlash: () => any;
        exportPathMap: (pathMap: PathMap, arg: any) => Promise<PathMap>;
    } | Function;
    constructor({ alternatesUrls, baseUrl, extraPaths, ignoreIndexFiles, ignoredPaths, pagesDirectory, targetDirectory, sitemapFilename, nextConfigPath, ignoredExtensions, pagesConfig, sitemapStylesheet }: SitemapConfig);
    preLaunch(): void;
    finish(): void;
    isReservedPage(site: string): boolean;
    isIgnoredPath(site: string): boolean;
    isIgnoredExtension(fileExtension?: string): boolean;
    mergePath(basePath: string, currentPage: string): string;
    buildPathMap(dir: string): Record<string, Record<string, string>>;
    getSitemapURLs(dir: string): Promise<{
        pagePath: string;
        outputPath: string;
        priority: string;
        changefreq: string;
    }[]>;
    sitemapMapper(dir: string): Promise<void>;
}
export default SiteMapper;
