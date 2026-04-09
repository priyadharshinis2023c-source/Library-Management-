pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t dhachu123/library-monitoring-system:latest .'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'dhachu123',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat """
                    docker login -u  -p %DOCKER_PASS%
                    """
                }
            }
        }

        stage('Push Image') {
            steps {
                bat 'docker push dhachu123/library-monitoring-system:latest'
            }
        }

        stage('Done') {
            steps {
                echo 'SUCCESS 🎉'
            }
        }
    }
}