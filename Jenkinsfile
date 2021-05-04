pipeline{
        agent {
            label 'master'
        }
        tools {
            maven 'maven_home'
            jdk 'java_home'
        }
    
    stages{
        stage ('Build Docker Image') {
            steps {
                sh """
                docker build -t archieismael/node-web-app:002 .
                """
            }
        }
        stage ('Push Docker Image') {
            steps {
                    withCredentials([string(credentialsId: 'docker-hub-pass', variable: 'dockerHubPwd')]) {
                       sh """
                       docker login -u archieismael -p ${dockerHubPwd}
                       """
                    }
                sh """
                    docker push archieismael/node-web-app:002
                """
            }
        }
        stage ('Run Docker Container') {
            steps {
                sh """
                docker run -p 50010:8080 -d archieismael/node-web-app:002
                """
            }
        }
        stage ('Test Run Application from Docker Container') {
            steps {
                sh """
                curl -i http://10.0.0.50:50010
                """
            }
        }

    }   
}
