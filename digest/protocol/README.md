# Protocol Development Review

This section turns Nano node repository activity into a readable monthly
assessment. It should start with GitHub metadata and remain traceable to the
original pull request or release.

## Collection

Collect, for the issue month:

- Open PRs from the Nano node repository
- PRs merged during the month
- Releases and version notes
- Linked design or roadmap discussions when they explain future work

Capture the PR number, title, author, labels, state, created/updated/merged
dates, body, changed-file summary, review state, and source URL. Do not infer
shipping from a merge alone.

## AI Assessment

Ask the model to produce structured candidates in three editorial groups:

- **Features in progress:** open, substantive implementation work with enough
  evidence to describe the feature.
- **Future features:** proposals, designs, or roadmap items that are not yet
  merged; explicitly mark them as proposed, planned, or speculative.
- **Versions:** released versions and notable merged changes, keeping the
  release version and release URL attached.

The model should summarize what changed, why it matters, current status,
uncertainty, and evidence. It must not invent timelines, claim a PR is planned
for a release, or treat a discussion comment as a committed roadmap item.

## Editorial Review

Before publication, compare every AI candidate with the live PR or release,
read enough of the diff and discussion to validate the summary, and downgrade
or remove anything that cannot be verified. Preserve both the source URL and
the AI/editorial note in the issue record.
