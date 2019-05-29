pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'git status'
                sh 'git add .'
                sh 'git commit -m "jenkins test"'
                sh 'git push origin master'
            }
        }
    }
}
