type GitHubRepo = {
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;
};

export type RepoStats = {
  stars: number;
  forks: number;
  updatedAt: string;
  language: string | null;
};

export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as GitHubRepo;
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      updatedAt: data.updated_at,
      language: data.language,
    };
  } catch {
    return null;
  }
}

export async function getManyRepoStats(repos: string[]): Promise<Record<string, RepoStats | null>> {
  const results = await Promise.all(repos.map((r) => getRepoStats(r).then((s) => [r, s] as const)));
  return Object.fromEntries(results);
}
