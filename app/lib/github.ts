const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim() || 'abdulazizpermana';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const DEFAULT_HEADERS: HeadersInit = {
  Accept: 'application/vnd.github+json',
};

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
};

export type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

export type GitHubCommit = {
  id: string;
  message: string;
  repositoryName: string;
  repositoryUrl: string;
  commitDate: string;
  commitUrl: string;
};

type GitHubPushEvent = {
  type: 'PushEvent';
  repo: {
    name: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
      url: string;
    }>;
  };
  created_at: string;
};

type GitHubEvent = GitHubPushEvent | { type: string };

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_BASE_URL}${endpoint}`, {
    headers: DEFAULT_HEADERS,
    next: { revalidate: 1800 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `GitHub API request failed (${response.status}): ${errorText || response.statusText}`
    );
  }

  return response.json() as Promise<T>;
}

export async function getGitHubProfile(username: string = GITHUB_USERNAME) {
  return fetchGitHub<GitHubProfile>(`/users/${username}`);
}

export async function getGitHubRepositories(
  username: string = GITHUB_USERNAME,
  limit = 6
) {
  const repositories = await fetchGitHub<GitHubRepository[]>(
    `/users/${username}/repos?sort=updated&per_page=100`
  );

  return repositories
    .filter((repository) => !repository.fork && !repository.archived)
    .sort(
      (repositoryA, repositoryB) =>
        new Date(repositoryB.updated_at).getTime() -
        new Date(repositoryA.updated_at).getTime()
    )
    .slice(0, limit);
}

export async function getGitHubRecentCommits(
  username: string = GITHUB_USERNAME,
  limit = 10
) {
  const events = await fetchGitHub<GitHubEvent[]>(
    `/users/${username}/events/public?per_page=100`
  );

  const commits = events
    .filter((event): event is GitHubPushEvent => event.type === 'PushEvent')
    .flatMap((event) =>
      (event.payload.commits || []).map((commit) => ({
        id: `${event.repo.name}-${commit.sha}`,
        message: commit.message,
        repositoryName: event.repo.name.replace(`${username}/`, ''),
        repositoryUrl: `https://github.com/${event.repo.name}`,
        commitDate: event.created_at,
        commitUrl: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
      }))
    )
    .slice(0, limit);

  return commits as GitHubCommit[];
}

export async function getGitHubActivityData(username: string = GITHUB_USERNAME) {
  const [profile, repositories, recentCommits] = await Promise.all([
    getGitHubProfile(username),
    getGitHubRepositories(username),
    getGitHubRecentCommits(username),
  ]);

  return {
    profile,
    repositories,
    recentCommits,
    username,
  };
}

export { GITHUB_USERNAME };