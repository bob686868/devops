pipeline {
    agent any
    stages {
        stage('Initialize') {
            steps {
                echo 'Successfully pulled Jenkinsfile from repository. Starting pipeline...'
            }
        }
        stage('Install Dependencies') {
            steps {
                dir('myapp') {
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                dir('myapp') {
                    // This runs all tests inside the 'src' folder automatically
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
    }
}