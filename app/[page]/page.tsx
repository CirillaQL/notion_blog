'use client'
import { type ExtendedRecordMap } from 'notion-types'
import { NotionPage } from "../../components/NotionPage";
import * as notion from '../../lib/notion';
import { usePathname } from 'next/navigation';
import  Navbar  from "@/components/Navbar";


async function getData() {
  const pathname = usePathname()
  
  const pageId = pathname?.slice(1)
  const recordMap = await notion.getPage(pageId)
  return recordMap
}

interface PageProps {
  recordMap: ExtendedRecordMap
}

export default async function MainPage() {
  const recordMap = await getData()

  return (
    <>
      <Navbar recordMap={recordMap}/>
      <div className="flex min-h-screen">
        <NotionPage
          recordMap={recordMap}
          rootDomain="localhost:3000"
          rootPageId="15ff911a4343809c9c82f0223e202809"
        />
      </div>
    </>
  );
}
