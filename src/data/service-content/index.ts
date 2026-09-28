import type { ServicePageContent } from './types';
import { aestheticContent } from './aesthetics';
import { dermatologyContent } from './dermatology';
import { allergologyContent } from './allergology';
import { phlebologyContent } from './phlebology';
import { proctologyContent } from './proctology';

export const serviceContent: Record<string, ServicePageContent> = {
  ...dermatologyContent,
  ...allergologyContent,
  ...phlebologyContent,
  ...proctologyContent,
  ...aestheticContent
};

export type { ServicePageContent, ContentSection } from './types';
