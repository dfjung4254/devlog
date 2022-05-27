## deploy apps

### Flow
1. Git push [main]
 - .github/workflow/deploy-main.yml

2. build front in github deploy server
 - 
 - yarn build

3. build api server in github deploy server
 - ./gradlew bootJar

4. docker build image and push in github deploy server
 - docker build

5. ssh server to deploy

6. docker pull image and run
