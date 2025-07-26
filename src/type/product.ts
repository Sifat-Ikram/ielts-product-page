export interface Medium {
  id: number;
  url: string;
  type: string;
}

export interface Checklist {
  id: number;
  title: string;
  is_checked: boolean;
}

export interface Seo {
  title: string;
  description: string;
  image_url: string;
}

export interface CtaText {
  text: string;
  button_text: string;
  link: string;
}

export type SectionValue = {
  id?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  icon?: string;
  image?: string;
  description?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  has_instructor_page?: boolean;
  end_at?: string;
};

export type Section = {
  type: string;
  name: string;
  description: string;
  bg_color?: string;
  order_idx: number;
  values?: SectionValue[];
};

export interface Product {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}
