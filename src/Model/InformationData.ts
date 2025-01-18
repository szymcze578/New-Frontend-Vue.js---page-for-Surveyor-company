export interface InformationData {
  title: string
  description: string
  link: string
}

export function mapInformationData(data: any[]): InformationData[] {
  return data.map((item) => ({
    title: item.title,
    description: item.description,
    link: item.link,
  }));
}
