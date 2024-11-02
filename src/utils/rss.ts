export type contentItem = {
  title: string;
  link?: string;
  url: string;
  published: Date;
  updated?: string;
  summary?: string;
  content?: string;
  description?: string;
}
export type contentData = {
  title: string;
  subtitle?: string;
  updated?: string;
  items: contentItem[];
}

export function parseRuanyifengXML(xmlStr: string): contentData {
  const xmlDom = new DOMParser().parseFromString(xmlStr, 'text/xml');

  const title = xmlDom.getElementsByTagName('title')[0].textContent;
  const updated = xmlDom.getElementsByTagName('updated')[0].textContent;
  const subtitle = xmlDom.getElementsByTagName('subtitle')[0].textContent;
  const entrys = xmlDom.getElementsByTagName('entry');
  const items: contentItem[] = [];

  for (let i = 0; i < entrys.length; i++) {
    const entry = entrys[i];
    const name = entry.getElementsByTagName('title')[0].textContent;
    const published = entry.getElementsByTagName('published')[0].textContent;
    const item_updated = entry.getElementsByTagName('updated')[0].textContent;
    const summary = entry.getElementsByTagName('summary')[0].textContent;
    const content = entry.getElementsByTagName('content')[0].textContent;
    const url = entry.getElementsByTagName('link')[0].getAttribute('href');
    const links = content.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)(\.webp)/g);

    items.push({
      title: name,
      link: links[0],
      url,
      published: new Date(published),
      updated: item_updated,
      summary,
      content,
    })
  }

  items.sort((a, b) => b.published.getTime() - a.published.getTime());

  return {
    title,
    updated,
    subtitle,
    items
  }
}

export function parseJWCXML(xmlStr: string): contentData {
  const xmlDom = new DOMParser().parseFromString(xmlStr, 'text/xml');

  const title = xmlDom.getElementsByTagName('title')[0].textContent;

  const subtitle = xmlDom.getElementsByTagName('description')[0].textContent;
  const entrys = xmlDom.getElementsByTagName('item');
  const items: contentItem[] = [];

  for (let i = 0; i < entrys.length; i++) {
    const entry = entrys[i];
    const name = entry.getElementsByTagName('title')[0].textContent;
    const published = entry.getElementsByTagName('pubDate')[0].textContent;

    const content = entry.getElementsByTagName('content:encoded')[0].textContent;
    const summary = entry.getElementsByTagName('description')[0].textContent;

    const url = entry.getElementsByTagName('link')[0].textContent;
    // const links = content.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)(\.webp)/g);

    items.push({
      title: name,
      url,
      published: new Date(published),
      summary,
    })
  }

  items.sort((a, b) => b.published.getTime() - a.published.getTime());

  return {
    title,
    subtitle,
    items
  }
}

