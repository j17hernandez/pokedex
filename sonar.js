const scanner = require('sonarqube-scanner')

scanner(
    {
        serverUrl: 'http://localhost:9000/',
        token: '17cc7a133645d4c1c28b2f502a8d0c2d9c827516',
        options: {
            'sonar.projectName': 'pokemon-api',
            'sonar.projectKey': 'pokemon-api',
            'sonar.projectDescription': 'front of pokemon api',
            'sonar.javascript.coveragePlugin': 'lcov',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.sources': '.',
            'sonar.coverage.exclusions': 'test/**,src/plugins/**,src/mixins/**,**/*.js,layouts/**',
            'sonar.cpd.exclusions': 'test/**,src/plugins/**,src/mixins/**,**/*.js,layouts/**',
            'sonar.cs.exclusions': 'test/**,src/plugins/**,src/mixins/**,**/*.js,layouts/**',
        }
    },
    () => process.exit()
)
