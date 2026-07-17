pipeline {
    agent any
    
    stages {
        stage('Initialize') {
            steps {
                echo 'Successfully pulled Jenkinsfile from repository. Starting pipeline...'
            }
        }
        
        stage('Nodejs stage') {
            agent {
                docker { 
                    image 'node:20-alpine'
                }
            }
            stages{
                stage('Install Dependencies'){
                    steps {
                        dir('myapp') { sh 'npm install'}
                    }
                }
            
                stage('Run Tests') {
                    steps {
                        dir('myapp') {
                            sh 'npm test -- --watchAll=false'
                        }
                    }
                }
            }
            }
        
        stage('Build Docker Image') {
            steps {
                dir('api') {
                    sh 'docker build -t backend12 .'
                    sh 'docker image prune -f'
                }
                dir('myapp'){
                    sh 'docker build -t frontend8 .'
                    sh 'docker image prune -f'
                }
            }
        }
    }
}

