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
                bat "docker build -t dhachu123/library-monitoring-system:latest ."
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'dhachu123',
                    passwordVariable: 'dckr_pat_qh16w8uU0ntQFzTAgz8em-Qw7ac'
                )]) {
                    bat """
                    echo dckr_pat_qh16w8uU0ntQFzTAgz8em-Qw7ac | docker login -u dhachu123 --password-stdin
                    """
                }
            }
        }

        stage('Push Image') {
            steps {
                bat "docker push dhachu123/library-monitoring-system:latest"
            }
        }

        stage('Done') {
            steps {
                echo 'Build and Push Successful!'
            }
        }
    }
}