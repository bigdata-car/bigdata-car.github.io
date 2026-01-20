---
sidebar_label: 팀 NAS 서버 만들기
---

# 팀 NAS 서버 만들기 (NextCloud)

## NextCloud란&#x20;

Nextcloud는 ownCloud 개발자중 하나인 Frank Karlitschek가 개발한 오픈소스 기반 클라우드 스토리지 소프트웨어입니다.

다른 클라우드 파일 서비스처럼 파일 저장 및 공유 서비스를 포함하여 문서 작업, 가상화, 클라우드, 컴퓨팅 기술 등 하나의 플랫폼에서 사용할 수 있고, MS 오피스, 구글 드라이브 등 추가 기능을 써드파티 앱을 통해 모듈식으로 구현할 수 있습니다.

<figure><img src="/img/manual/cloud/NAS/NAS_1.png" alt="" /><figcaption></figcaption></figure>

> 추가 정보 : [Nextcloud 란 무엇인가?](https://tech.gluesys.com/blog/2021/05/20/Nextcloud.html)
>
> 공식 홈페이지 : [https://nextcloud.com](https://nextcloud.com/)

## 설치 방법&#x20;

> 자동차 산업 클라우드 ubuntu 22.04\_agent02 이미지로 테스트 되었습니다.&#x20;

```sh
curl -fsSL get.docker.com -o get-docker.sh | sh ./get-docker.sh


apt install fontconfig -y 
fc-cache -fv

------ Shell scripts ------------------------------------------

root@nextcloud:~# mkdir ~/nextcloud
root@nextcloud:~# cd nextcloud
root@nextcloud:~# touch docker-compose.yaml

------ docker-compose.yaml ------------------------------

version: '3'

services:
  nextclouddb:
    image: mariadb
    container_name: nextcloud-db
    restart: unless-stopped
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    networks:
      - ncloud-net
    volumes:
      - ./db:/var/lib/mysql
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Seoul
      - MYSQL_RANDOM_ROOT_PASSWORD=true
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextclouduser
      - MYSQL_PASSWORD=nextcloudpw

  redis:
    image: redis
    container_name: redis
    networks:
      - ncloud-net

  nextcloud:
    image: nextcloud:latest
    container_name: nextcloud
    restart: unless-stopped
    ports:
      - 3000:80
    networks:
      - ncloud-net
    volumes:
      - ./web:/var/www/html
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Seoul
      - MYSQL_HOST=nextclouddb
      - MYSQL_PASSWORD=nextcloudpw
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextclouduser
      - REDIS_HOST=redis
    depends_on:
      - nextclouddb
      - redis

networks:
  ncloud-net:
    name: ncloud-net
    driver: bridge

volumes:
  nextclouddb:
  nextcloud:

------ Shell scripts ------------------------------------------

root@nextcloud:~# cd /root/nextcloud
root@nextcloud:~# docker compose up -d

------ Connection ------------------------------------------

http://<IP address>:3000
```



## 관리자 설정 하기&#x20;

<figure><img src="/img/manual/cloud/NAS/NAS_2.png" alt="" /><figcaption></figcaption></figure>

1. 최초 접속시 관리자 계정 생성 후 \[설치]를 진행 하여야 합니다.&#x20;
2. 설치 단계에서 추천 앱을 설치 하거나 \[건너뛰기]로 생략 할 수 있습니다.&#x20;
3. 설치 완료 후 우측 상단 프로필 아이콘(A)를 선택시 관리자 설정을 진행 할 수 있습니다.&#x20;

:::info
KADaP Cloud에서 제공 하는 이미지에서는 admin / kadap1234 로 사전 설정 되어 있습니다.&#x20;
:::
