export type GitHubStats = {
  username: string;
  publicRepos: number;
  privateRepos: number | null;
  totalStars: number;
  yearsOnGithub: number;
  profileUrl: string;
};

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    // With a token (read:user scope only, no repo access), GitHub's
    // authenticated /user endpoint adds total_private_repos — a count only,
    // never the private repos themselves.
    const token = process.env.GITHUB_TOKEN;
    const userRes = await fetch(
      token ? "https://api.github.com/user" : "https://api.github.com/users/mrsinani",
      {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        next: { revalidate: 3600 },
      }
    );
    if (!userRes.ok) return null;

    const userData = await userRes.json();
    const reposRes = await fetch(
      "https://api.github.com/users/mrsinani/repos?per_page=100",
      { next: { revalidate: 3600 } }
    );
    if (!reposRes.ok) return null;

    const reposData = await reposRes.json();
    const totalStars = reposData.reduce(
      (acc: number, repo: { stargazers_count: number }) =>
        acc + repo.stargazers_count,
      0
    );
    const createdAt = new Date(userData.created_at);
    const yearsOnGithub = Math.floor(
      (Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 365)
    );

    return {
      username: "mrsinani",
      publicRepos: userData.public_repos,
      privateRepos: token ? userData.total_private_repos ?? null : null,
      totalStars,
      yearsOnGithub,
      profileUrl: "https://github.com/mrsinani",
    };
  } catch {
    return null;
  }
}
