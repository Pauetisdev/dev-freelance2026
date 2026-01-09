# Script para reescribir el historial de Git
cd "c:\Users\pauvi\OneDrive - Universitat de Vic\PERSONAL\adSense\freelance-spain-2026"

$env:FILTER_BRANCH_SQUELCH_WARNING = "1"

git filter-branch -f --commit-filter '
    if [ "$GIT_AUTHOR_EMAIL" = "noreply@lovable.dev" ] ||
       [ "$GIT_AUTHOR_EMAIL" = "159125892+gpt-engineer-app[bot]@users.noreply.github.com" ]; then
        GIT_AUTHOR_NAME="Pau Vilardell";
        GIT_AUTHOR_EMAIL="pauetisdev@gmail.com";
        GIT_COMMITTER_NAME="Pau Vilardell";
        GIT_COMMITTER_EMAIL="pauetisdev@gmail.com";
        git commit-tree "$@";
    else
        git commit-tree "$@";
    fi' HEAD
