pipeline {
    agent any
    
    stages {
        stage('Initialize') {
            steps {
                echo 'Successfully pulled Jenkinsfile from repository. Starting pipeline...'
            }
        }
        
        stage('Install Dependencies') {
            // Move agent definition here, at the stage level
            agent {
                docker { 
                    image 'node:20-alpine'
                }
            }
            steps {
                dir('myapp') {
                    // Note: npm is usually in the PATH of the node image, 
                    // so /usr/bin/npm is likely unnecessary.
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            // Note: If you want to use the same container for tests, 
            // you must define the agent here too, or wrap stages in a single agent.
            agent {
                docker { 
                    image 'node:20-alpine'
                }
            }
            steps {
                dir('myapp') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                dir('api') {
                    sh 'docker build -t jenkins-backend .'
                    sh 'docker image prune -f'
                }
            }
        }
    }
}