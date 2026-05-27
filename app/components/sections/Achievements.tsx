export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-gradient-to-b from-background to-background/95 px-6 py-24 dark:from-black dark:to-black/95"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            Milestones
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground dark:text-white">
            Achievements
          </h2>

          <p className="mx-auto max-w-2xl text-base text-foreground/60 dark:text-white/60">
            Recognition and accomplishments that reflect impact, consistency, and
            commitment to delivering meaningful results.
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-white/70 p-8 shadow-lg shadow-accent/5 backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                Competition Award
              </span>
              <h3 className="text-2xl font-semibold text-foreground dark:text-white">
                2nd Place – Best Project iTalase
              </h3>
              <p className="text-foreground/60 dark:text-white/60">
                Academic project competition achievement for delivering an
                impactful and well-executed solution.
              </p>
            </div>

            <div className="flex items-center justify-start md:justify-end">
              <div className="rounded-2xl border border-accent/20 bg-accent/5 px-5 py-4 text-left md:text-center">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 dark:text-white/50">
                  Year
                </p>
                <p className="mt-1 text-2xl font-bold text-accent">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
