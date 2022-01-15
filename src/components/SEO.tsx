import { NextSeo } from 'next-seo'

export default function SEO({
  title = 'WeMeta, the first digitial land marketplace',
  description = "The world's first market for digital Land. Browse, buy, bid, and sell parcels on Decentraland, The Sandbox, Somnium Space, Cryptovoxels and more. Browse NFT communities or use our price prediction model to browse over 1,000 land parcels on sale now!",
}: {
  title?: string
  description?: string
}) {
  return <NextSeo title={title} description={description} />
}
