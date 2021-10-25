module.exports = {
  ci: {
    preset: 'lighthouse:recommended',
    collect: {
      numberOfRuns: 2,
      startServerCommand:
        'yarn workspace @apartmentsnapshot/snapshot-ui serve:web',
      url: ['http://localhost:5000'],
      settings: {
        //throttlingMethod: 'devtools',
        throttling: {
          cpuSlowdownMultiplier: 9,
        },
      },
    },
    upload: {
      /*
       * Only use 'temporary-public-storage' for troubleshooting on CircleCI
       * You can't see the results within CircleCI.
       * So this gives you a temporary url.
       * Otherwise we should always use 'filesystem' to store results
       */
      target: 'temporary-public-storage',
      outputDir: '../reports/lighthouse',
    },
    assert: {
      budgetsFile: '../budgets/lighthouse.json',
    },
  },
}
