module.exports = {
  ci: {
    preset: 'lighthouse:recommended',
    collect: {
      numberOfRuns: 2,
      startServerCommand:
        'yarn workspace @apartmentsnapshot/snapshot-ui serve:web',
      url: ['http://localhost:5000'],
      settings: {
        throttling: {
          cpuSlowdownMultiplier: 6,
        },
      },
    },
    upload: {
      target: 'temporary-public-storage', //'filesystem',
      //outputDir: '../reports/lighthouse',
    },
    assert: {
      budgetsFile: '../budgets/lighthouse.json',
    },
  },
}
