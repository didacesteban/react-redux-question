pipeline {
    agent { docker { image 'node:5.6' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
