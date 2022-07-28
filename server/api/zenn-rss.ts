import { XMLParser } from 'fast-xml-parser'

export default async (req, res) => {
  const url = 'https://zenn.dev/warspitenavy/feed'

  // rss feed
  const result = await $fetch(url, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })

  const parser = new XMLParser({
    isArray: (name, jpath) => jpath === 'rss.channel.item'
  })
  const text = `${result}`
  const xml = await parser.parse(text)
  const itemArray = xml.rss.channel.item.slice(0, 5) as any[]
  const items = itemArray.map((item) => {
    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description
    }
  })
  return items
}
