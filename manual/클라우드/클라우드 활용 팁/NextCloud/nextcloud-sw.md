---
sidebar_label: 파일 공유하기 (NextCloud)
---

# NextCloud 데스크탑 SW 사용하여 파일 공유하기

NextCloud에서는 데스크탑용 SW를 제공하고 있습니다. 설치 가능한 운영체제는 다음과 같습니다.&#x20;

* 윈동우 10/11 (64bit)
* macOS 12+ (64bit)
* macOS 10.10+
* Linux AppImage

모바일 OS용 프로그램도 제공 하고 있습니다.&#x20;

* 구글 안드로이드&#x20;
* Apple IOS&#x20;

:::info
다운로드 링크 : [https://nextcloud.com/install/#install-clients](https://nextcloud.com/install/#install-clients)
:::

## 1. 설치 하기&#x20;

> 윈도우 11 사용자를 기준으로 작성 되었습니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_1.png" alt="" /><figcaption></figcaption></figure>

1. 프로그램 실행 후 \[로그인] 을 선택 합니다.&#x20;
2. 서버 주소는 프로젝트 관리자에게 전달 받은 주소를 입력 합니다.&#x20;
   * 주소 형태는 `https://user.bigdata-car.kr:xxxx` 입니다.&#x20;
   * xxx 에 해당하는 포트 번호는 필수적으로 입력 하여야 합니다.&#x20;

:::info
일부 기업보안 프로그램(eg. Waterwall)에서는  설치가 차단 될  수 있습니다.&#x20;
:::



<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_2.png" alt="" /><figcaption></figcaption></figure>

3. 서버 주소 입력 후 로그인 절차는 웹 브라우져에서 이루어 지게 됩니다.&#x20;
4. \[로그인]을 선택 합니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_3.png" alt="" /><figcaption></figcaption></figure>

5. 프로젝트 관리자에게 전달 받은 ID와 비밀번호를 입력 합니다.&#x20;
6. 계정이 정상적이면 권한 요청단계로 넘어 갑니다.  [\[관리자 계정으로 사용자 추가 하기\]](adduser.md)
7. 연결이 되면 Account Connected 메시지와 함께 연결이 됩니다.&#x20;

## 2. 공유 폴더 설정 하기&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_4.png" alt="" /><figcaption></figcaption></figure>

1. 서버의 파일이 저장될 자신PC 위치를 지정 할 수 있습니다.&#x20;
2. 서버의 파일을 모두 다운로드 받아 동기화 할 수 있습니다.&#x20;
3. 서버의 파일 중 동기화 할 대상을 선택 할 수 있습니다.&#x20;
4. (추천) 서버의 파일리스트를 동기화 하고, 필요시 다운로드 하여 사용 할 수 있습니다. (MS 원드라이브방식)
5. \[연결]을 선택 하면 동기화가 시작 됩니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_5.png" alt="" /><figcaption></figcaption></figure>

6. 윈도우 우측 하단에서 아이콘 선택시 동기화 상태를 확인 할 수 있습니다.&#x20;

## 3. 내 폴더 및 파일 다른 사용자에게 공유하기

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_6.png" alt="" /><figcaption></figcaption></figure>

1. 내컴퓨터(win+E) 실행 후 \[Nextcloud]가 생성된것을 볼 수 있습니다.&#x20;
2. \[Nextcloud]폴더 선택시 클라우드 상에 있는 파일의 목록이 보여 집니다. \
   . 상태 아이콘이 \[속이 빈 구름] 모양 일경우, 목록만 가져 온것이고 파일은 클라우드 상에 있습니다. \
   . 상태 아이콘이 \[원형 v]모양 일 경우, 클라우드에서 원본 파일을 다운로드한 상태 입니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_7.png" alt="" /><figcaption></figcaption></figure>

3. 공유 하고자 하는 폴더 또는 파일 마우스 오른클릭 후&#x20;
4. 확장 메뉴에서 \[Nextcloud]를 선택 합니다.&#x20;
5. \[공유 옵션]을 선택 하면 공유대상자 및 공유 방법을 선택 할 수 있습니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_8.png" alt="" /><figcaption></figcaption></figure>

6. 공유 할 사용자 ID를 입력시 등록된 사용자일 경우 하단에 명단이 보입니다. [\[관리자 계정으로 사용자 추가 하기\]](adduser.md)
7. 공유 대상자가 등록되면 확인 할 수 있습니다.&#x20;
8. (옵션) 공유 방법 설정이 필요시 \[...]를 선택 합니다.&#x20;
9. (옵션션) 삭제 및 업로드 없이 다운로드 권한만 주려면 \[보기 전용]을 선택 합니다.&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_9.png" alt="" /><figcaption></figcaption></figure>

10. 공유 완료시 상태 열에 공유 아이콘이 표시 됩니다.&#x20;

## 4. 공유 받은 폴더 확인 하기&#x20;

<figure><img src="/img/manual/cloud/nextcloud-sw/nextcloud-sw_10.png" alt="" /><figcaption></figcaption></figure>

1. 공유 받은 사용자는 상태열에 공유 아이콘이 표시된 폴더(Shared)가 생긴것을 확인 할   수 있습니다.&#x20;
