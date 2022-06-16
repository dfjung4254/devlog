
### Test Server : 13.209.67.71:8080

### deploy
```
docker build --platform amd64 --build-arg JAR_FILE=build/libs/\*.jar -t devjk/devlog .
docker run -e TLDJ_PASSWORD=${TLDJ_PASSWORD} -p 80:8080 devjk/devlog
docker save -o devlog.tar devjk/devlog



docker build --build-arg JAR_FILE=build/libs/\*.jar -t springio/gs-spring-boot-docker .

// deploy-main.yml 에서 scp 전송과 ssh 접속을 구현해야 한다.
// 그런 다음 github-action -> deploy-server 에서 docker image script 를 실행.



// 여기서 부터
scp -i ~/.ssh/clubtetrix.pem devlog.tar ubuntu@13.209.67.71
ssh -i clubtetrix.pem ubuntu@13.209.67.71 // 아래의 명령어를 실행하는 script를 만들어서 실행


// todo : image 삭제 -> script 로 만들 것.
sudo docker rmi -f $(sudo docker images -aq)
sudo docker load -i devlog.tar

sudo docker run --name devlog --rm -eTLDJ_PASSWORD=${TLDJ_PASSWORD} -p 8080:8080 devjk/devlog

```

