'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowUpRight,
  Clock3,
  ExternalLink,
  FolderGit2,
  GitCommitHorizontal,
  GitFork,
  Github,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import {
  GITHUB_USERNAME,
  getGitHubActivityData,
  type GitHubCommit,
  type GitHubProfile,
  type GitHubRepository,
} from '@/app/lib/github';

type GitHubActivityState = {
  profile: GitHubProfile | null;
  repositories: GitHubRepository[];
  recentCommits: GitHubCommit[];
  username: string;
};

const sectionCopy = {
  eyebrow: 'Live GitHub Presence',
  title: 'GitHub Activity',
  description:
    'A real-time snapshot of my open-source footprint, recent engineering activity, and the repositories I am actively shipping.',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function formatCount(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: value > 999 ? 'compact' : 'standard',
    maximumFractionDigits: 1,
  }).format(value);
}

function formatRelativeDate(value: string) {
  const date = new Date(value);
  const now = new Date();
  const diffInHours = Math.max(1, Math.round((now.getTime() - date.getTime()) / 36e5));

  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.round(diffInHours / 24);

  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function formatFullDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

const cardBaseClass =
  'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.18)] transition-all duration-500';

const skeletonItems = Array.from({ length: 3 }, (_, index) => index);
const commitSkeletonItems = Array.from({ length: 5 }, (_, index) => index);
const repoSkeletonItems = Array.from({ length: 6 }, (_, index) => index);

const StatPill = memo(function StatPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
        <Icon className="h-4 w-4 text-cyan-300" />
        <span>{label}</span>
      </div>
      <p className="text-xl font-semibold text-white">{value}</p>
    </div>
  );
});

const SectionHeader = memo(function SectionHeader() {
  return (
    <motion.div variants={itemVariants} className="mx-auto mb-14 max-w-3xl text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
        <Sparkles className="h-3.5 w-3.5" />
        {sectionCopy.eyebrow}
      </div>
      <h2 className="mb-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
        {sectionCopy.title}
      </h2>
      <p className="text-base leading-8 text-white/65 md:text-lg">{sectionCopy.description}</p>
    </motion.div>
  );
});

const ProfileCardSkeleton = memo(function ProfileCardSkeleton() {
  return (
    <div className={`${cardBaseClass} p-8`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10" />
      <div className="relative animate-pulse">
        <div className="mb-6 h-24 w-24 rounded-3xl bg-white/10" />
        <div className="mb-3 h-8 w-48 rounded-full bg-white/10" />
        <div className="mb-2 h-4 w-full max-w-xl rounded-full bg-white/10" />
        <div className="mb-8 h-4 w-3/4 rounded-full bg-white/10" />
        <div className="grid gap-3 sm:grid-cols-3">
          {skeletonItems.map((item) => (
            <div key={item} className="h-24 rounded-2xl bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
});

const ActivityTimelineSkeleton = memo(function ActivityTimelineSkeleton() {
  return (
    <div className={`${cardBaseClass} p-8`}>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="mb-3 h-6 w-48 rounded-full bg-white/10" />
          <div className="h-4 w-64 rounded-full bg-white/10" />
        </div>
        <div className="h-10 w-10 rounded-2xl bg-white/10" />
      </div>
      <div className="space-y-4 animate-pulse">
        {commitSkeletonItems.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-3 h-4 w-28 rounded-full bg-white/10" />
            <div className="mb-3 h-5 w-full max-w-xl rounded-full bg-white/10" />
            <div className="h-4 w-40 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
});

const RepositoryGridSkeleton = memo(function RepositoryGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {repoSkeletonItems.map((item) => (
        <div key={item} className={`${cardBaseClass} animate-pulse p-6`}>
          <div className="mb-5 flex items-center justify-between">
            <div className="h-5 w-32 rounded-full bg-white/10" />
            <div className="h-10 w-10 rounded-2xl bg-white/10" />
          </div>
          <div className="mb-4 h-4 w-full rounded-full bg-white/10" />
          <div className="mb-6 h-4 w-3/4 rounded-full bg-white/10" />
          <div className="mb-6 flex gap-3">
            <div className="h-8 w-16 rounded-full bg-white/10" />
            <div className="h-8 w-16 rounded-full bg-white/10" />
          </div>
          <div className="h-4 w-28 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  );
});

const ProfileCard = memo(function ProfileCard({
  profile,
  username,
}: {
  profile: GitHubProfile;
  username: string;
}) {
  const stats = useMemo(
    () => [
      {
        label: 'Followers',
        value: formatCount(profile.followers),
        icon: Users,
      },
      {
        label: 'Following',
        value: formatCount(profile.following),
        icon: Github,
      },
      {
        label: 'Repositories',
        value: formatCount(profile.public_repos),
        icon: FolderGit2,
      },
    ],
    [profile.followers, profile.following, profile.public_repos]
  );

  return (
    <motion.article
      variants={itemVariants}
      className={`${cardBaseClass} group p-8 md:p-10`}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_30%)] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <motion.img
              src={profile.avatar_url}
              alt={profile.name || profile.login}
              className="h-24 w-24 rounded-3xl border border-white/10 object-cover shadow-2xl"
              whileHover={{ scale: 1.04, rotate: -2 }}
              transition={{ duration: 0.25 }}
            />
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-cyan-200/80">
                @{username}
              </p>
              <h3 className="text-3xl font-semibold text-white">{profile.name || profile.login}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                {profile.bio || 'Building useful products, shipping reliable software, and exploring modern web experiences.'}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatPill
                key={stat.label}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        </div>

        <motion.a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-2xl border border-white/10 bg-white/8 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View Profile
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  );
});

const ActivityTimeline = memo(function ActivityTimeline({
  commits,
}: {
  commits: GitHubCommit[];
}) {
  if (!commits.length) {
    return (
      <motion.article variants={itemVariants} className={`${cardBaseClass} p-8`}>
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <GitCommitHorizontal className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Recent Contribution Activity</h3>
            <p className="mt-2 text-sm text-white/60">
              Latest public push events from GitHub.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-10 text-center">
          <p className="text-base font-medium text-white">No recent public commit activity found.</p>
          <p className="mt-2 text-sm text-white/55">
            New commits will automatically appear here once public activity is available.
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article variants={itemVariants} className={`${cardBaseClass} p-8`}>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">Recent Contribution Activity</h3>
          <p className="mt-2 text-sm text-white/60">
            The latest 10 public commits pulled live from the GitHub REST API.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
          <GitCommitHorizontal className="h-5 w-5 text-cyan-200" />
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="absolute bottom-4 left-[1.1rem] top-4 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/15 to-transparent sm:block" />
        {commits.map((commit, index) => (
          <motion.a
            key={commit.id}
            href={commit.commitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_12px_50px_rgba(34,211,238,0.08)] sm:pl-14"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute left-4 top-5 hidden h-5 w-5 rounded-full border border-cyan-300/40 bg-slate-950 shadow-[0_0_0_6px_rgba(15,23,42,0.7)] sm:block">
              <div className="absolute inset-[4px] rounded-full bg-cyan-300" />
            </div>

            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/45">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                #{String(index + 1).padStart(2, '0')}
              </span>
              <span className="inline-flex items-center gap-2">
                <FolderGit2 className="h-3.5 w-3.5 text-cyan-300" />
                {commit.repositoryName}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-base font-medium leading-7 text-white transition-colors duration-300 group-hover:text-cyan-100 md:text-lg">
                  {commit.message}
                </h4>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/55">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-cyan-300" />
                    {formatRelativeDate(commit.commitDate)}
                  </span>
                  <span title={formatFullDate(commit.commitDate)}>{formatFullDate(commit.commitDate)}</span>
                </div>
              </div>

              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200" />
            </div>
          </motion.a>
        ))}
      </div>
    </motion.article>
  );
});

const RepositoryCard = memo(function RepositoryCard({
  repository,
}: {
  repository: GitHubRepository;
}) {
  return (
    <motion.a
      href={repository.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardBaseClass} group block p-6`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-cyan-400/[0.05] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/45">
              <FolderGit2 className="h-3.5 w-3.5 text-cyan-300" />
              Repository
            </div>
            <h4 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">
              {repository.name}
            </h4>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-white/50 transition-colors duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-200">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="min-h-[72px] text-sm leading-7 text-white/60">
          {repository.description || 'No repository description has been added yet.'}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1.5">
            <Star className="h-4 w-4 text-amber-300" />
            {formatCount(repository.stargazers_count)}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-sky-400/10 px-3 py-1.5">
            <GitFork className="h-4 w-4 text-sky-300" />
            {formatCount(repository.forks_count)}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            {repository.language || 'Mixed'}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-white/45">
          <span>Updated {formatRelativeDate(repository.updated_at)}</span>
          <span title={formatFullDate(repository.updated_at)}>{formatFullDate(repository.updated_at)}</span>
        </div>
      </div>
    </motion.a>
  );
});

const RepositoryGrid = memo(function RepositoryGrid({
  repositories,
}: {
  repositories: GitHubRepository[];
}) {
  if (!repositories.length) {
    return (
      <motion.article variants={itemVariants} className={`${cardBaseClass} p-8`}>
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-6 py-10 text-center">
          <p className="text-base font-medium text-white">No repositories available to feature.</p>
          <p className="mt-2 text-sm text-white/55">
            Public repositories will show up here automatically after they become available.
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div variants={itemVariants}>
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Featured Repositories</h3>
          <p className="mt-2 text-sm text-white/60">
            Latest active repositories ranked by recent updates and filtered for quality.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200">
          <Github className="h-3.5 w-3.5" />
          Live repository data
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </motion.div>
  );
});

const ErrorState = memo(function ErrorState({
  message,
  username,
  onRetry,
}: {
  message: string;
  username: string;
  onRetry: () => void;
}) {
  return (
    <motion.article
      variants={itemVariants}
      className={`${cardBaseClass} mx-auto max-w-3xl p-8 text-center md:p-10`}
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-rose-400/20 bg-rose-400/10">
        <AlertCircle className="h-8 w-8 text-rose-300" />
      </div>
      <h3 className="text-2xl font-semibold text-white">Unable to load GitHub activity</h3>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
        {message}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <motion.button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/8 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Retry request
        </motion.button>
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Open GitHub Profile
          <ExternalLink className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  );
});

export default function GitHubActivity() {
  const [data, setData] = useState<GitHubActivityState>({
    profile: null,
    repositories: [],
    recentCommits: [],
    username: GITHUB_USERNAME,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadGitHubActivity = async () => {
    try {
      setIsLoading(true);
      setError('');

      const activityData = await getGitHubActivityData(GITHUB_USERNAME);

      setData(activityData);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'An unexpected error occurred while loading GitHub activity.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadGitHubActivity();
  }, []);

  return (
    <section
      id="github-activity"
      className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-20 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container-max relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionHeader />

          {error ? (
            <ErrorState message={error} username={data.username} onRetry={loadGitHubActivity} />
          ) : isLoading ? (
            <div className="space-y-6">
              <ProfileCardSkeleton />
              <ActivityTimelineSkeleton />
              <RepositoryGridSkeleton />
            </div>
          ) : data.profile ? (
            <div className="space-y-6">
              <ProfileCard profile={data.profile} username={data.username} />
              <ActivityTimeline commits={data.recentCommits} />
              <RepositoryGrid repositories={data.repositories} />
            </div>
          ) : (
            <motion.article variants={itemVariants} className={`${cardBaseClass} p-8 text-center`}>
              <p className="text-lg font-medium text-white">GitHub profile data is not available.</p>
              <p className="mt-2 text-sm text-white/55">
                Please verify the configured username and public profile visibility.
              </p>
            </motion.article>
          )}
        </motion.div>
      </div>
    </section>
  );
}