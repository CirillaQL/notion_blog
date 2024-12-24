'use client'
import { type ExtendedRecordMap } from 'notion-types'
import { NotionPage } from "../../components/NotionPage";
import Navbar from '@/components/Navbar';
import { rootNotionPageId, rootDomain } from '@/lib/config';


export default function PageClient({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return (
        <>
          <Navbar recordMap={recordMap} />
          <div className="flex min-h-screen">
            <div className="p-8 pb-20 sm:p-20">
                <NotionPage
                recordMap={recordMap}
                rootDomain={rootDomain}
                rootPageId={rootNotionPageId}
                />
            </div>
          </div>
        </>
    )
}