---
sidebar_laber: SSH 접속방법
---

# 생성된 가상머신에 SSH 접속하기

> 서버 접속을 위해서는 VPN에 접속되어 있어야 합니다. VPN없이 접속하는 방법은[ \[포트포워딩\]](/manual/클라우드/VM.md)을 설정 하며 됩니다.&#x20;

## 0.  사전정보&#x20;

생성된 가상머신에 접속 할  수 있는 방법은 3가지가 있습니다.&#x20;

1. 웹기반 SSH 클라이언트를 사용하여 접속하기 : VPN 접속 불필요, 설치툴 불필요,  로그인 작업 불필요, 간단한 작업용\
   :warning: 웹기반 서비스의 특성상 접속 안전성이 낮음&#x20;
2. 설치형 SSH 클라이언트를 사용하여 키파일로 접속하기 :  VPN접속 필요, 설치툴 필요, 로그인작업(키파일 다운로드) 필요
3. 설치형 SSH 클라이언트를 하용하여 비밀번호로 접속하기 : VPN접속 필요, 설치툴 필요&#x20;

<table><thead><tr><th width="211"></th><th>VPN접속여부</th><th>설치 작업</th><th>로그인 사전 준비 필요</th></tr></thead><tbody><tr><td>웹기반SSH(웹터미널)</td><td>X</td><td>X</td><td>X</td></tr><tr><td>설치형SSH + 키파일</td><td>O</td><td>O</td><td>O</td></tr><tr><td>설치형SSH+비밀번호</td><td>O</td><td>O</td><td>X</td></tr></tbody></table>

## 1. 웹기반 SSH 클라이언트를 사용하여 접속하기

<figure><img src="/img/manual/cloud/ssh/ssh_1.png" alt="" /><figcaption></figcaption></figure>

1\. 가상머신의 \[웹 터미널]을 선택시 웹기반 SSH 클라이언트(웹터미널)이 실행 됩니다.&#x20;

<figure><img src="/img/manual/cloud/ssh/ssh_2.png" alt="" /><figcaption></figcaption></figure>

1. 서버 상태 정보를 알려 줍니다. \
   . 연결 시도 중 :  가상서버의 SSH서버 실행 대기중을 의미합니다.  (서버 생성후 1\~2분 소요)\
   . 연결 중 : 연결 성공을 의미 합니다.&#x20;
2. 접속 서버의 정보를 나타냅니다. : 가상서버(인스턴스)이름, OS(이미지)이름, 가상서버 IP
3. 접속된 가상 서버 SSH 화면을 나타냅니다.&#x20;
4. 동일 서버에 새로운 접속을 생성 합니다.&#x20;

:::info
관리자 지정한 사전 정의된 계정(eg. root, ubuntu)으로만 자동 로그인이 됩니다.&#x20;
:::

## 2. 설치형 SSH 클라이언트를 사용하여 키파일로 접속하기

### 2.1 키파일 다운로드 하기&#x20;

<figure><img src="/img/manual/cloud/ssh/ssh_3.png" alt="" /><figcaption></figcaption></figure>

1. 가상머신의 \[접속정보]를 선택시 접속 정보가 표시 됩니다. \
   . 접
2. 가상머신 \[접속정보] 선택후 접속 인증 키]를 선택시 키파일(\*.pem)파일이 사용자 PC로 다운로드 됩니다.&#x20;

:::info
접속 IP주소(10.10.17.3)과 접속 계정(ubuntu)  정보는이후 사용하므로 적어 놓는것이 좋습니다.&#x20;
:::

### 2.2 SSH 클라이언트 설치 하기&#x20;

#### A. 사용자가 선호하는 SSH 클라이언트 설치 하기&#x20;

* Bitvise SSH Client(v8.19) [\[다운로드\]](https://cloud.bigdata-car.kr/download/Bitvise_SSH_Client.zip)
* putty[ \[홈페이지\]](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

#### B. 윈도우에 기본 설치된 클라이언트 사용하기&#x20;

1. Windows Key +  R \
   ![](</img/manual/cloud/ssh/ssh_4.png>)
2. cmd 또는 powershell 입력 \
   ![](</img/manual/cloud/ssh/ssh_5.png>)

### 2.3 키파일 이용하여 로그인 하기&#x20;

#### A. 사용자가 선호하는 SSH 클라이언트 사용하기 (Bitvise SSH Client)

<figure><img src="/img/manual/cloud/ssh/ssh_6.png" alt="" /><figcaption></figcaption></figure>

1. Server \
   . Host : 앞에서 언급된 IP 주소를 입력 합니다. (예 : 10.10.17.3)\
   . Port : 포트 번호를 입력 합니다. ssh는 기본 22번 포트를 사용합니다.&#x20;
2. Authentication\
   . Username : 앞에서 언급된 계정을 입력 합니다. (예: ubuntu)\
   . Initial method : publickey를 선택합니다. (키파일 이용 방식 일때만)
3. Client Key Manager를 선택 하여 사용한 키 파일을 관리 합니다.
4. Import 를 선택하여 사용할 키 파일을 선택 합니다.&#x20;

#### B. 윈도우에 기본 설치된 클라이언트 사용하기&#x20;

* 키파일이 저장된 경로로 이동 합니다. \
  ![](</img/manual/cloud/ssh/ssh_7.png>)
* 접속 명령어를 입력 합니다. \
  . 명령어 : ssh ID@IP주소  -i 키파일\
  . 명령어예: c:>ssh ubuntu@10.10.17.3 -i 2-27\_default.pem                      \
  ![](</img/manual/cloud/ssh/ssh_8.png>)

```bash
# 에러: 권한 오류 
WARNING: UNPROTECTED PRIVATE KEY FILE!
Permissions for 'test.pem' are too open. It is required that your private key
files are NOT accessible by others. This private key will be ignored.
Load key "test.pem" : bad permissions ubuntu@ubuntu Permission denied (publickey).

# 해결방법
## 리눅스 
chmod 400 키파일.pem

## 윈도우 CLI방식
icacls.exe 키파일.pem /reset
icacls.exe 키파일.pem /grant:r %username%:(R)
icacls.exe 키파일.pem /inheritance:r

## 윈도우 GUI방식 : https://antennagom.com/14107
```

## 3. 설치형 SSH 클라이언트를 이용하여 비밀번호로 접속하기

#### A. 사용자가 선호하는 SSH 클라이언트 사용하기 (Bitvise SSH Client)

<figure><img src="/img/manual/cloud/ssh/ssh_9.png" alt="" /><figcaption></figcaption></figure>

1. Server \
   . Host : 앞에서 언급된 IP 주소를 입력 합니다. (예 : 10.10.17.3)\
   . Port : 포트 번호를 입력 합니다. ssh는 기본 22번 포트를 사용합니다.&#x20;
2. Authentication\
   . Username : 사용자 또는 관리자가 지정한 계정을 입력합니다. (예: root)\
   . Initial method : password를 선택합니다. (비밀번호로 접속 할때만)\
   . Store encrypted password in profile : 체크 \
   . Password : 사용자 또는 관리자가 지정한 비밀번호를 입력 합니다. (예 : kadap1234)

:::info
자동차 산업 클라우드에서는 사용자 편의를 위해 root/kadap1234를 기본 계정으로 제공합니다.(접속  후 비밀번호 변경 강제)
:::

<figure><img src="/img/manual/cloud/ssh/ssh_10.png" alt="" /><figcaption></figcaption></figure>

최초 로그인시 보안상 기본 비밀번호를 변경 하여야 합니다. (최초 1회)

1. 기본 계정 및 비밀번호 알림 창&#x20;
2. 기본 비밀번호 재 입력&#x20;
3. 변경할 비밀번호 입력&#x20;

#### B. 윈도우에 기본 설치된 클라이언트 사용하기&#x20;

<figure><img src="/img/manual/cloud/ssh/ssh_11.png" alt="" /><figcaption></figcaption></figure>

1. 접속 명령어를 입력 합니다.  : 명령어 : ssh ID@IP주소 (예: c:>ssh root@10.10.17.3)
2. 기본 계정 및 비밀번호 알림 창 (최초 접속 시만)
3. 기본비밀 번호 입력 : kadap1234  (최초 접속 시만)
4. Current password : 현재(기본)비밀번호 입력 kadap1234  (최초 접속 시만)
5. New password / Retype : 새로 사용할 비밀번호 입력&#x20;
