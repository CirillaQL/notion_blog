import {
  type ExtendedRecordMap
} from 'notion-types'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId)

  return recordMap
}