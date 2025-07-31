
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  {
    title: 'Why security matters?',
    description: 'Why your personal digital security and privacy needs to be taken seriously.',
    slug: 'importance-of-digital-security',
    markdown: '/articles/0_Why_It_Matters.md',
  },
  {
    title: 'Security List: Short Version',
    description: 'Main lists too long? Here\'s the TL;DR',
    slug: 'short-list',
    markdown: '/articles/2_TLDR_Short_List.md',
  },
  {
    title: 'Secure Messaging',
    description: 'Guide to secure messaging and communication.',
    slug: 'secure-messaging',
    markdown: '/articles/Secure-Messaging.md',
  },
];

export default articles;
