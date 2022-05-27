### deploy
```
docker build --platform amd64 --build-arg JAR_FILE=build/libs/\*.jar -t devjk/devlog .
docker run -e TLDJ_PASSWORD=${TLDJ_PASSWORD} -p 80:8080 devjk/devlog
docker save -o devlog.tar devjk/devlog



docker build --build-arg JAR_FILE=build/libs/\*.jar -t springio/gs-spring-boot-docker .

// 여기서 부터
scp -i ~/.ssh/clubtetrix.pem devlog.tar ubuntu@13.209.67.71
ssh -i clubtetrix.pem ubuntu@13.209.67.71

// image 삭제
sudo docker rmi -f $(sudo docker images -aq)
sudo docker load -i devlog.tar

sudo docker run --name devlog --rm -eTLDJ_PASSWORD=${TLDJ_PASSWORD} -p 8080:8080 devjk/devlog

```

