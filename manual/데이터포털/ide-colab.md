---
sidebar_label: Web IDE 활용
---

# 제공 서비스(IDE)를 활용하여 구글 Colab처럼 개발하기

## 서비스(IDE) 소개&#x20;

자동차 데이터 포털에서는 데이터를 바로 분석 할 수 있는 통합 개발 환경(Integrated Development Environment, IDE)을 Web 기반으로 제공합니다.&#x20;

Web IDE에서는 코드 작성, 컴파일, 실행이 가능합니다. 해외 대표적인 서비스로는 구글의 Colab(좌)이 있으며, Colab에 활용하는 Jupyter Notebook를 동일하게  제공합니다.

<figure><img src="/img/manual/ide-colab/ide-colab_1.png" alt="" /><figcaption></figcaption></figure>

Web IDE는 GPU 기반으로 무료로 제공 됩니다. 현재 제공 및 준비 중인 GPU 사양은 다음과 같습니다.&#x20;

* Nvidia V100 28개 &#x20;
* Nvidia A40 6개&#x20;
* Nvidia A100(MIG) 28개&#x20;
* Nvidia H100(MIG) 35개&#x20;

## Web IDE 접속 하기&#x20;

<figure><img src="/img/manual/ide-colab/ide-colab_2.png" alt="" /><figcaption></figcaption></figure>

1. 상단메뉴 > 서비스 > Web IDE 툴 선택
2. 이용하기 선택&#x20;

:::info
https://ide.bigdata-car.kr 로 접속 할 수 있습니다.
:::

## Web IDE 실행 하기&#x20;

### 1. 프로젝트 생성 하기&#x20;

<figure><img src="/img/manual/ide-colab/ide-colab_3.png" alt="" /><figcaption></figcaption></figure>

1. 활용 가능한 GPU 수량을 확인 합니다.&#x20;
2. \[새 프로젝트]를 선택 합니다.&#x20;

### 2. 프로젝트 설정 하기&#x20;

<figure><img src="/img/manual/data-portal/ide-colab/ide-colab_4.png" alt="" /><figcaption></figcaption></figure>

1. 프로젝트 이름을 입력 합니다.&#x20;
2. 사용 시간을 입력 합니다. \
   . GPU 사용 독점을 막기 위하여 8시간 이후에는 종료 됩니다. \
   . 종료 되더라도  \[마이디스크]에 저장된 데이터는 유지 됩니다. \
   . 새로운 프로젝트 생성 후 \[마이디스크]에 보관된 파일을 활용 하여 계속 유지 할 수 있습니다.&#x20;
3. 사용한 IDE툴을 선택 합니다.&#x20;
4. 프로젝트 생성하기를 선택 합니다.&#x20;

### 3. Web IDE 사용하기&#x20;

<figure><img src="/img/manual/data-portal/ide-colab/ide-colab_5.png" alt="" /><figcaption></figcaption></figure>

1. 접속하고자 하는 프로젝트 명을 선택 합니다.&#x20;

<figure><img src="/img/manual/data-portal/ide-colab/ide-colab_6.png" alt="" /><figcaption></figcaption></figure>

1. 사용하고자 하는 Web IDE의 패키지 명을 선택 하면 실행 됩니다.&#x20;
2. (선택) 비밀번호가 설정 되어 있는지 확인 합니다.&#x20;
3. (선택) Host Port 번호를 확인하면 직접 접속이 가능합니다. (무작위로 할당 됨)

:::info
직접접속 URL : `https://ide-user.bigdata-car.kr:{Host Port 번호}`
:::

## Web IDE에서 \[마이디스크] 연동 확인 하기&#x20;

<figure><img src="/img/manual/data-portal/ide-colab/ide-colab_7.png" alt="" /><figcaption></figcaption></figure>

1. \[마이디스크]의 tools/ide 에 파일을 업로드 할 경우&#x20;
2. Web IDE의 \[MyDisk]에서 확인 할 수 있습니다.&#x20;
