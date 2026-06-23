export type GitHubStats = {
  username: string;
  publicRepos: number;
  totalStars: number;
  yearsOnGithub: number;
  profileUrl: string;
};

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    const userRes = await fetch("https://api.github.com/users/mrsinani", {
      next: { revalidate: 3600 },
    });
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
      totalStars,
      yearsOnGithub,
      profileUrl: "https://github.com/mrsinani",
    };
  } catch {
    return null;
  }
}
