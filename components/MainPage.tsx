'use client'
import { type ExtendedRecordMap } from 'notion-types'
import { NotionPage } from "./NotionPage";
import { rootNotionPageId, rootDomain } from '@/lib/config';


export default function MainPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div>
     <NotionPage
        recordMap={recordMap}
        rootDomain={rootDomain}
        rootPageId={rootNotionPageId}
      />
    </div>
  );
}
