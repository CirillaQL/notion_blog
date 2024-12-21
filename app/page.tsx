
import MainPage from "@/components/MainPage";

import * as notion from '../lib/notion'
import Navbar from "@/components/Navbar";

async function getData() {
  const pageId = '15ff911a4343809c9c82f0223e202809'
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

export default async function Home() {
  const recordMap = await getData()

  return (
    <>
      <Navbar recordMap={recordMap}/>
      <div className="flex min-h-screen">
        {/* 左侧部分 - 3/4 宽度 */}
        <div className="w-4/5 p-8 pb-20 sm:p-20">
          <MainPage recordMap={recordMap}/>
        </div>

        {/* 右侧部分 - 1/4 宽度 */}
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
