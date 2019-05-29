pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'git pull master testing-ci-branch'
                sh 'git pull origin master'
            }
        }
    }
}
