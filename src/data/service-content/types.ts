export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServicePageContent = {
  intro: string;
  sections: ContentSection[];
  note?: string;
  billing?: string;
};

export const page = (
  intro: string,
  sections: ContentSection[],
  options: Pick<ServicePageContent, 'note' | 'billing'> = {}
): ServicePageContent => ({ intro, sections, ...options });
