import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Grid, { data } from '../../components/Grid'
import Modal from '../../components/Modal'
import SEO from '../../components/SEO'

export default function BrowsePage({ world }) {
  const { prefetch } = useRouter()

  useEffect(() => {
    prefetch('/')
  }, [])

  return (
    <>
      <SEO title={world} />
      <Grid />
      <Modal world={world} />
    </>
  )
}

export function getStaticProps({ params: { world } }) {
  return { props: { world: world } }
}

//has to be used with getStaticProps... cannot be used with getServerSideProps
export function getStaticPaths() {
  return {
    paths: data.map((world) => ({
      params: { world: world.toString() },
    })),
    fallback: false,
  }
}
