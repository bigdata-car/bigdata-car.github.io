---
sidebar_label: CKAN기반 데이터 포털 구축하기
---

## 설치 방법&#x20;

```bash
$ sudo apt install docker.io docker-compose -y 
$ su - 
$ cd ~
$ git clone https://github.com/ckan/ckan-docker.git
$ cd ckan-docker 
$ cp .env.example .env
$ vi .env
    """
    CKAN_SITE_URL=https://localhost:8443 -> VM일경우 IP입력 (https://10.10.19.xxx:8443/)
    CKAN_SYSADMIN_NAME=ckan_admin
    CKAN_SYSADMIN_PASSWORD=test1234
    """
$ docker-compose build
$ docker-compose up -d
```



## 접속하기&#x20;

CKAN\_SITE\_URL에 입력한 주소 웹프라우져에 입력&#x20;

관리자 ID : ckan\_admin

관리자 비밀번호 : test1234



## 데이터 등록 하기

_작성 중_



## TIPs

로고 이미지 바꾸기&#x20;

```bash
// ckan 컨테이너 내에서 
$ cd srv/app/src/ckan/ckan/public/base/images
$ cp /root/kitech_logo.png placeholder-420x220.png
```



> 원문 : [https://github.com/ckan/ckan-docker](https://github.com/ckan/ckan-docker)

