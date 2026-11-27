import type { APIRoute } from 'astro';
import { site, coverage, valueAdd, process } from '../data/site';

export const GET: APIRoute = () => {
  const body = `# ${site.name}

> ${site.description}

## What We Cover
${coverage.items.map((i) => `- ${i.name}: ${i.detail}`).join('\n')}

## Why Clients Choose Coverpoint
${valueAdd.map((v) => `- ${v.title}: ${v.body}`).join('\n')}

## Process
${process.steps.map((s) => `${s.step}. ${s.title}: ${s.body}`).join('\n')}

## Contact
${site.email}
${site.url}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
