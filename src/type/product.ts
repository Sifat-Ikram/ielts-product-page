

export interface Medium {
  id: number
  url: string
  type: string
}

export interface Checklist {
  id: number
  title: string
  is_checked: boolean
}

export interface Seo {
  title: string
  description: string
  image_url: string
}

export interface CtaText {
  text: string
  button_text: string
  link: string
}

export interface Section {
  id: number
  type: 'instructor' | 'features' | 'pointers' | 'about'
  title: string
  description: string
  items: {
    id: number
    title?: string
    image?: string
    designation?: string
    description?: string
  }[]
}

export interface Product {
  slug: string
  id: number
  title: string
  description: string // HTML
  media: Medium[]
  checklist: Checklist[]
  seo: Seo
  cta_text: CtaText
  sections: Section[]
}
