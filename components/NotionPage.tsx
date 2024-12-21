import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import { getPageTitle } from 'notion-utils'
import { type ExtendedRecordMap } from 'notion-types'
import Link from 'next/link'

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)

export function NotionPage({
  recordMap,
  rootPageId,
  rootDomain
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
  rootDomain?: string
}) {

  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)

  // useful for debugging from the dev console
  if (typeof window !== 'undefined') {
    const keys = Object.keys(recordMap?.block || {})
    const block = recordMap?.block?.[keys[0]]?.value
    const g = window as any
    g.recordMap = recordMap
    g.block = block
  }


  console.log(recordMap)
  console.log(title)

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        showCollectionViewDropdown={false}
        disableHeader={true}
        components={{
          // NOTE (transitive-bullshit 3/12/2023): I'm disabling next/image for this repo for now because the amount of traffic started costing me hundreds of dollars a month in Vercel image optimization costs. I'll probably re-enable it in the future if I can find a better solution.
          // nextLegacyImage: Image,
          nextLink: Link,
          Collection,
          Equation,
          Pdf,
          Modal
        }}

        // NOTE: custom images will only take effect if previewImages is true and
        // if the image has a valid preview image defined in recordMap.preview_images[src]
      />
    </>
  )
}
