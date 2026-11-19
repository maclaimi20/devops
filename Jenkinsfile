
pipeline {

    // Run the pipeline on any available Jenkins agent
    agent any

    // Define application variables
    environment {
        IMAGE_NAME = 'devops-app:1.0'
        CONTAINER_NAME = 'devops-container'
        HOST_PORT = '8080'
    }

    stages {

        // Stage 1: Download source code from GitHub
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'

                checkout scm
            }
        }

        // Stage 2: Build the Docker image
        stage('Build') {
            steps {
                echo 'Building Docker image...'

                bat 'docker build -t devops-app:1.0 .'
            }
        }

        // Stage 3: Test the HTML file
        stage('Test') {
            steps {
                echo 'Testing index.html...'

                bat 'powershell -NoProfile -Command "if (Select-String -Path index.html -Pattern ''<h1>Hello World from Jenkins!</h1>'') { Write-Output ''HTML test passed'' } else { Write-Error ''HTML test failed''; exit 1 }"'
            }
        }

        // Stage 4: Deploy application using Docker
        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                // Remove previous container if it exists
                bat 'docker rm -f devops-container 2>$null; if ($LASTEXITCODE -ne 0) { exit 0 }'

                // Start a new container
                bat 'docker run -d -p 8080:80 --name devops-container devops-app:1.0'
            }
        }

        // Stage 5: Verify deployment
        stage('Verify Deployment') {
            steps {
                echo 'Checking deployed application...'

                bat 'docker ps'
                bat 'curl.exe -f http://localhost:8080'
            }
        }
    }

    // Display the final pipeline result
    post {
        success {
            echo 'Application successfully deployed!'
        }

        failure {
            echo 'Deployment failed. Check the Jenkins console output.'
        }
    }
}
