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
                    // --watchAll=false is required for non-interactive CI environments
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                dir('api') {
                    // Builds the image tagged as 'my-react-app'
                    sh 'docker build -t jenkins-backend .'
                    
                    // Automatically removes old, untagged image layers to save disk space
                    sh 'docker image prune -f'
                }
            }
        }
    }
}