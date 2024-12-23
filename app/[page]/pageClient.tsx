'use client'
import { type ExtendedRecordMap } from 'notion-types'
import { NotionPage } from "../../components/NotionPage";
import Navbar from '@/components/Navbar';

interface PageClientProps {
    recordMap: ExtendedRecordMap
}

export default function PageClient({recordMap}: PageClientProps) {
    return (
        <>
          <Navbar recordMap={recordMap} />
          <div className="flex min-h-screen">
            <div className="p-8 pb-20 sm:p-20">
                <NotionPage
                recordMap={recordMap}
                rootDomain="localhost:3000"
                rootPageId="15ff911a4343809c9c82f0223e202809"
                />
            </div>
          </div>
        </>
    )
}