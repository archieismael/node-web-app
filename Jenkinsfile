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
                docker build -t archieismael/node-web-app:001 .
                """
            }
        }
    }
}
