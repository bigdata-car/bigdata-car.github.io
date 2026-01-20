---
sidebar_label: VPN 사용방법
---

# 사용신청 및 보안망 접속방법

자동차 산업클라우드는 고성능 서버들의 집합으로 이루어져 있습니다. 악의적 사용을 막기 위하여 사전 허가된 기관(자동차 산업 관련 기업 및 대학 연구소)만 접속이 가능합니다.&#x20;

:::info
기관 또는 팀별 한번만 신청 하면 됩니다. 신청자는 **프로젝트 책임** 권한을 가지게 됩니다.&#x20;
:::

## 1. 사용신청 방법&#x20;

* 신청 대상 : 자동차 분야를 연구하는 기업, 기관, 대학원
* 신청 서류 : [\[다운로드\]](https://katech2021.sharepoint.com/:t:/s/DataEngineering_Team/EVgdqdQ6oyhKsTuAuoQbpGYBDRQHu4QipgBY62Bcuf-E-g?e=GDYINY)
* 제출 주소 : admin@bigdata-car.kr \
  (신청  후 5일 안에 검토 후 VPN 계정을 전송 드립니다)

보안망(VPN) 접속없이 https://cloud.bigdata-car.kr에 접속 하게 되면 다음 두 화면 중  사용자 환경에 따라 하나의 화면이 표시 되며 접속이 되지 않습니다.&#x20;

<figure><img src="/img/manual/cloud/VPN/VPN_1.png" alt="" /><figcaption></figcaption></figure>

## 2. 보안망 접속 방법

접속 방법은 크게 2가지 방법이 있습니다.&#x20;

1. VPN을 이용한 접속 : KADaP에서 제공되는 VPN툴을 설치 하여 접속 후 사용 가능합니다. <mark>(추천)</mark>
2. 기관 IP 주소 등록  : 해당기관 및 사용자의P주소를 등록하여 접속 가능합니다.&#x20;

:::info
기관내 접속 예상자 수가  **30명 미만**일 경우 **VPN접속**으로 진행 되며, **30명 이상**일경우 기관 IP 주소 등록 방법으로 진행 됩니다.&#x20;
:::

## 1. VPN을 이용하여 접속 하는 방법&#x20;

1. 신청서([링크](https://katech2021.sharepoint.com/:t:/s/DataEngineering_Team/EVgdqdQ6oyhKsTuAuoQbpGYBDRQHu4QipgBY62Bcuf-E-g?e=GDYINY))를 작성 후 KADaP 관리자(admin@bigdata-car.kr)로 전달 주세요.&#x20;
2. 심사 후 접속 ID와 임시 비밀번호가 보내주신 이멜일로 전송 됩니다.&#x20;
3. VPN 프로그램 다운로드 : https://bigdata-car.kr:2443
4. VPN 프로그램 실행 후 접속할 서버 설정(최초 1회)&#x20;
   1. VPN 서버 이름 : KADaP Cloud
   2. VPN 서버 IP : bigdata-car.kr
   3. 포트 : 3443
5. 접속 실행 : \[2]번 단계에서 받은 ID와 비빌번호를 입력하여 VPN접속 진행&#x20;
6. 접속 완료 메시지 확인 후 다음 두개 주소 중 하나로 접속 진행&#x20;
   1. CMP-UI(일반 사용자용) : https://cloud.bigdata-car.kr
   2. Horizon-UI(고급 사용자용) : 2024.12월 오픈

<figure><img src="/img/manual/cloud/VPN/VPN_2.png" alt="" /><figcaption></figcaption></figure>

<figure><img src="/img/manual/cloud/VPN/VPN_3.png" alt="" /><figcaption></figcaption></figure>

최초 로그인시 임시 비밀번호를 사용자 비밀번호로 변경 하여야 합니다.&#x20;

:::info
자동차데이터포털에 가입시 사용한 비밀번호를 입력하면 이후 접속시 혼란을 줄일수 있습니다.&#x20;
:::

## 2. 기관 IP 주소 등록 신청 방법&#x20;

1. 신청서(링크)를 작성 후 KADaP 관리자(admin@bigdata-car.kr)로 전달 주세요.&#x20;
2. 심사  후IP 등록 완료 이메일 수신  후 다음 두 개 주소 중 하나로 접속 진행&#x20;
   1. CMP-UI(일반 사용자용) : https://cloud.bigdata-car.kr
   2. Horizon-UI(고급 사용자용) : 2024.12월 오픈

## \[참고] CMP-UI : 일반 사용자용

Horizon UI의 많은 기능들로 인하여 접근성이 어려운 단점 보완하여 일반사용자들이 사용하는 기능을 중심으로 쉽게 사용할수 있도록 자체 개발한 사용자 웹 인터페이스 입니다.

Openstack의 API를 기반으로 개발되어 있어 추가 설정이 필요한 부분은 오픈스택 CLI나Horizon UI로 접속하여 설정을 유지 할  수 있습니다.&#x20;

Horizon UI에서는 제공하지 않지만, KADaP에 필요한 추가 기능을 발굴 하여 개발 적용할 예정입니다. (eg. 컨테이너 관리 및 운영 환경)&#x20;

<figure><img src="/img/manual/cloud/VPN/VPN_4.png" alt="" /><figcaption></figcaption></figure>

## \[참고] Horizon-UI  : 고급 사용자용&#x20;

KADaP 클라우드는 [OpenStack](https://www.openstack.org/) 이라는 오픈소스 클라우드 컴퓨팅 플랫폼을 기반으로 구축되어 있습니다. Horizion은 Openstack에서 기본 제공하는 사용자 웹 인터페이스 입니다.&#x20;

Openstack을 세밀하게 조정하여 목적에 맞는 시스템을 구성 할 수 있는 장점이 있지만, 많은 기능들과 용어로 인하여 익숙해 지는데 시간이 소요 됩니다.&#x20;

웹 인터페이스  역시 기능 제공에 초점을 두고 있어 사용자 친밀도는 약합니다.&#x20;

<figure><img src="/img/manual/cloud/VPN/VPN_5.png" alt="" /><figcaption></figcaption></figure>





