import core, { SitemapConfig } from './core'
export const siteMapper = async (config: SitemapConfig) => {
  if (!config) {
    throw new Error('Config is mandatory')
  }
  const coreMapper = new core(config)
  coreMapper.preLaunch()
  await coreMapper.sitemapMapper(config.pagesDirectory || '')
  coreMapper.finish()
}
