'use client'
import * as notion from '../lib/notion'
import Link from 'next/link'
import { type ExtendedRecordMap } from 'notion-types'
import { NotionPage } from "./NotionPage";
import { rootDomain } from "@/lib/config";


interface MainPageProps {
  recordMap: ExtendedRecordMap
}

export default function MainPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div>
     <NotionPage
        recordMap={recordMap}
        rootDomain="localhost:3000"
        rootPageId="15ff911a4343809c9c82f0223e202809"
      />
    </div>
  );
}
