pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    environment {
        IMAGE_NAME = "library-monitoring-system"
        IMAGE_TAG = "latest"
    }

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
                bat "docker build -t ${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_USERNAME',
                    passwordVariable: 'DOCKER_PASSWORD'
                )]) {
                    bat """
                    echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                    """
                }
            }
        }

        stage('Push Image') {
            steps {
                bat "docker push ${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        stage('Done') {
            steps {
                echo 'Build and Push Successful!'
            }
        }
    }
}