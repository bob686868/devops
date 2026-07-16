pipeline {
    agent any
    stages {
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