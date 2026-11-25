// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages project site: https://<USER>.github.io/aiup-book-nook-tutorial/
// When you add a custom domain: set `site` to it and DELETE `base`.
const GITHUB_USER = 'YOUR-GITHUB-USERNAME';
const REPO = 'aiup-book-nook-tutorial';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO}`,
  integrations: [
    starlight({
      title: 'Building Real Software with AI',
      description:
        'A hands-on tutorial for learning the AI Unified Process (AIUP) by building Book Nook from an empty folder.',
      social: [
        { icon: 'github', label: 'GitHub', href: `https://github.com/${GITHUB_USER}/${REPO}` },
      ],
      editLink: {
        baseUrl: `https://github.com/${GITHUB_USER}/${REPO}/edit/main/`,
      },
      lastUpdated: true,
      sidebar: [
        { label: 'Start here', autogenerate: { directory: 'start-here' } },
        { label: 'Lessons', autogenerate: { directory: 'lessons' } },
        { label: 'Reference', autogenerate: { directory: 'reference' } },
      ],
    }),
  ],
});
