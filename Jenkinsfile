pipeline {
    agent any
    tools { nodejs 'Node-20' } // Ensure this matches the name in Global Tool Configuration
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