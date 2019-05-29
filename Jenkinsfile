pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'git pull remotes/origin/master remotes/origin/testing-ci-branch'
                sh 'git pull remotes/origin/origin remotes/origin/master'
            }
        }
    }
}
