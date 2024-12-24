
import MainPage from "@/components/MainPage";
import { rootNotionPageId } from '../lib/config'
import * as notion from '../lib/notion'
import Navbar from "@/components/Navbar";

async function getData() {
  const pageId = rootNotionPageId
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

export default async function Home() {
  const recordMap = await getData()

  console.log(recordMap)

  return (
    <>
      <Navbar recordMap={recordMap}/>
      <div className="flex min-h-screen">
        {/* 左侧部分 - 4/5 宽度 */}
        <div className="w-4/5 p-8 pb-20 sm:p-20">
          <MainPage recordMap={recordMap}/>
        </div>

        {/* 右侧部分 - 1/5 宽度 */}
        <div className="w-1/5 p-8 pb-20 sm:p-20 border-l">
          {/* 在这里添加右侧内容 */}
          <div className="h-full">
            {/* 右侧内容放这里 */}
          </div>
        </div>
      </div>
    </>
  );
}
