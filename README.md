![Last Commit](https://img.shields.io/github/last-commit/valentk777/ChainOfMicroservices.svg)

# ChainOfMicroservices
Multiple microservices implemented with different programming languages joined to a single REST call chain.

## Idea 
The initial idea is to create as many REST API microservices with a different programming language or framework. The goal is to create a service that contains one endpoint to get data. After this, the service becomes responsible for calling another endpoint once. We apply the same rules for each microservices. By doing that, we will create a chain of microservices.

## Value
The value of creating it is to try simple (but not too simple) functionality with as many programming languages or frameworks as possible. If the language supports the requred functionality (C#, Java, Python, JS) we have to follow best practices and clean code practices. On the other hand, some languages not suitable for this task, such as CSS, HTML, or SQL, and achieving it (in some hacky ways) will be treated as bad practice. That's okay in this case :D 

## Infrastructure
- each service will contain a separate folder for implementation
- each service will be packed as a docker image
- the chain will start using the docker-compose
- each service contains one post endpoint
- each service will contain a health endpoint
- when service-A makes a call to service-B, service-B will set a local variable (bool) indicating that this service is responsible for making another call to pre-defined service-C.
- each service will contain tests to test functionality for a single service

## Development
In order to run all chain of services, you can use `docker-compose`. In main root dir run command: 
```
docker-compose up
```
In addition, under documentation folder I added Postman collection to test each service manually and to post initial message call for a service chain.

## List of implemented languages

| Language   | Port   | Implementation |
| ---------- |:------:| --------------:|
| Python     | `5551` | *Completed*    |
| Javascript | `5552` | *Completed*    |
| C#         | `5553` | *Completed*    |
| Java       | `5554` | *InProgress*   |
| Scala      | `5555` | *NotStarted*   |
