Docker is a containerization platform that packages an application and its dependencies into containers, enabling consistent execution across development, testing, and production environments.

CRDT stands for Conflict-free Replicated Data Type.

In simple terms, a CRDT is a data structure that allows multiple users to edit the same data simultaneously, and their changes can be merged automatically without creating conflicts, even when updates happen on different devices.

Yjs is a JavaScript library that keeps shared data synchronized between multiple users.

"Docker packages my application code, its dependencies, and the runtime environment into an image. I can run that image as a container, so my application behaves consistently across different environments."

What is Docker?
Docker is a platform that allows us to package applications and their dependencies into images and run them in isolated environments called containers.

Why do we need Docker?
Imagine your Node.js backend works on your laptop but fails on another developer's computer because of different Node.js versions or missing dependencies.
Docker helps reduce these environment-related problems by packaging the required runtime and dependencies consistently.

1. Docker Image
An image is a template containing the application code, dependencies, runtime, and required filesystem components.Example: my-backend:v1

2. Docker Container
A container is an isolated environment created from an image in which your application can run. Example: Running your backend from my-backend:v1 on port 3000.

3. Docker Hub
Docker Hub is an online registry where developers can download and publish container images.
Example: Downloading the official Node.js image using docker pull node.

4. Docker Engine
Docker Engine is the software that builds images and creates, runs, and manages containers. It includes the Docker daemon, which handles much of this work.

5. Docker vs. Virtual Machine
A virtual machine runs its own guest operating system and kernel. A typical Docker container shares the host kernel while isolating the application and its processes.
This generally makes containers lighter and faster to start than full virtual machines.


Dockerfile content
FROM node:20-alpine

COPY ./backend .

RUN npm install

CMD ["node", "server.js"]

then build the image by using command : docker build . -t (name of image)
for running: docker run -p 4000:3000 backend


ECR and ECS are two AWS services that work together to deploy Docker containers to the cloud.
- ECR = Elastic Container Registry → stores your Docker images.
- ECS = Elastic Container Service → runs and manages your Docker containers.
