
pipeline {

    // Run the pipeline on any available Jenkins agent
    agent any

    // Define application variables
    environment {
        IMAGE_NAME = 'devops-app:2.0'
        CONTAINER_NAME = 'devops-container'
        HOST_PORT = '8081'
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

                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        // Stage 3: Test the HTML file
        stage('Test') {
            steps {
                echo 'Testing index.html...'

                bat '''
                    powershell -NoProfile -Command "
                    if (Select-String -Path index.html -Pattern '<h1>Hello World from Jenkins!</h1>') {
                        Write-Output 'HTML test passed'
                    }
                    else {
                        Write-Error 'HTML test failed'
                        exit 1
                    }"
                '''
            }
        }

        // Stage 4: Deploy application using Docker
        stage('Deploy') {
            steps {
                echo 'Deploying application...'

                // Remove previous container if it exists
                bat 'docker rm -f %CONTAINER_NAME% 2>NUL || exit /b 0'

                // Start a new container on port 8081
                bat 'docker run -d -p %HOST_PORT%:80 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }

        // Stage 5: Verify deployment
        stage('Verify Deployment') {
            steps {
                echo 'Checking deployed application...'

                // Display running containers
                bat 'docker ps'

                // Verify the deployed web application
                bat 'curl.exe -f http://localhost:%HOST_PORT%'
            }
        }
    }

    // Display the final pipeline result
    post {

        success {
            echo 'Application successfully deployed!'
            echo 'Open http://localhost:8081 to view the application.'
        }

        failure {
            echo 'Deployment failed. Check the Jenkins console output.'
        }
    }
}
