import { defineConfig } from 'astro/config';

// On GitHub Actions, derive the Pages URL from the repo so the site works at
// https://<owner>.github.io/<repo>/ (or at the root for <owner>.github.io repos).
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}/` : '/',
});
