node {

    // checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'archieismael-dockerhub') {

        def customImage = docker.build("archieismael/node-web-app:001")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
