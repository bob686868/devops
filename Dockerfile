FROM jenkins/jenkins:lts
USER root
# Install Docker client
RUN apt-get update && apt-get install -y docker.io
# Give Jenkins user permission to use the Docker socket
RUN usermod -aG docker jenkins
USER jenkins








