import { buildProfileJson } from "@/lib/site-data";
import { getGitHubStats } from "@/lib/github-stats";

export const dynamic = "force-dynamic";

export async function GET() {
  const githubStats = await getGitHubStats();

  return Response.json(buildProfileJson(githubStats), {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
