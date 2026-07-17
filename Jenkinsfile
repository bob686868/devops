pipeline {
    agent any
    
    stages {
        stage('Initialize') {
            steps {
                echo 'Successfully pulled Jenkinsfile. Starting pipeline...'
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
        
        stage('Build Docker Images') {
            steps {
                // Building from root, matching your file structure
                sh 'docker build -t backend12 ./api'
                sh 'docker build -t frontend8 ./myapp'
                sh 'docker image prune -f'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Deploying to Minikube...'
                // Using the specific files located in the root
                sh 'kubectl apply -f backend.yaml'
                sh 'kubectl apply -f db.yaml'
                sh 'kubectl apply -f frontend.yaml'
            }
        }
    }
}