node {

    // checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-pwd') {

        def customImage = docker.build("archieismael/node-web-app:001")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
