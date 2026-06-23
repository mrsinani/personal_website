import { buildLlmsFullTxt } from "@/lib/site-data";
import { getGitHubStats } from "@/lib/github-stats";

export const dynamic = "force-dynamic";

export async function GET() {
  const githubStats = await getGitHubStats();

  return new Response(buildLlmsFullTxt(githubStats), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
