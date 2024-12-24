// app/[page]/page.tsx
import * as notion from '../../lib/notion'
import  PageClient  from './pageClient'

// 服务器组件可以直接使用 async
export default async function MainPageServer({
  params
}: {
  params: { page: string }
}) {
  // 在服务器端获取数据
  const recordMap = await notion.getPage(params.page)

  return <PageClient recordMap={recordMap} />
}
