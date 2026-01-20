---
sidebar_label: 가상머신 백업하기
---

# 가상머신 백업하기 (스냅샷 기능)

## 1. 백업 이미지 생성하기&#x20;

<figure><img src="/img/manual/cloud/VM-backup/backup_1.png" alt="" /><figcaption></figcaption></figure>

1. 가상서버의 \[백업 이미지 생성]을 선택 합니다.&#x20;

:::info
가상서버가 종료 시에만 해당 기능이 활성화 됩니다.&#x20;
:::

<figure><img src="/img/manual/cloud/VM-backup/backup_2.png" alt="" /><figcaption></figcaption></figure>

1. 백업 이미지 이름 : 이미지 이름을 지정 합니다. \
   . 예 : 서버이름\_백업 날짜 (EV-Performance-20240818)
2. 백어 이미지 설명 : 추가 설명을 기입 합니다. \
   . 예 : 기본 패키지 설치 (python3, pip, docker)

## 2. 백업 이미지 확인 하기&#x20;

<figure><img src="/img/manual/cloud/VM-backup/backup_3.png" alt="" /><figcaption></figcaption></figure>

1. 서버 가상화 - 백업 이미지 관리에서 확인 할 수 있습니다.&#x20;
2. 서버 백업 이미지&#x20;
3. 백업한 이미지의 이름, 일시, 원본 서버, OS를 확인 할 수 있습니다.&#x20;
4. 백업 이미지를 수행 할 수 있는 기능을 보여 줍니다. \
   . 서버 생성 : 해당 백업 이미지를 이용하여 서버를 생성 합니다. \
   . 이미지 삭제 : 해당 백업 이미지를 삭제 합니다. <br />

## 3. 백업 이미지 활용하여 서버 생성 하기&#x20;

