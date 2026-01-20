---
sidebar_label: 데이터 검색 결과 살펴보기
---

# 데이터 검색 결과 살펴보기

<figure><img src="/img/manual/data-portal/portal2/portal2_1.png" alt="" /><figcaption></figcaption></figure>

1. 검색 키워드(예:정비)로 검색된 전체 데이터 수를 \[데이터 수집 방식 분류]에 따라 나타냅니다. \
   . 보유 데이터는 1건, 연동 데이터는 0건, 외부 데이터는 250건, 해외 데이터는 139건 총 391건 검색
2. 검색된 데이터셋(예:차량 정비 이미지 데이터)의 분류 및 제공기관 정보를 나타냅니다. \
   . 데이터 수집 방식 표현 (예:보유데이터) \
   . 데이터 카테고리 표현 (예:자동차 정비)\
   . 제공기관 명 표현&#x20;
3. 제공 형태와 데이터셋 정보를 나타냅니다. \
   . 제공형태 표현 (예: DATA)\
   . 데이터셋 이름 표현&#x20;
4. 해당 데이터셋을 등록시 기입한 태그(tag) 정보를 나타냅니다.&#x20;
5. 해당 데이터셋을 등록시 기입한 정보들을 타나냅니다. \
   . 데이터 본문 정보 : 데이터 설명, 수집 방법 등을 표현 합니다.\
   . 파일 정보 : 샘플 및 원본 데이터 등록시 표현 됩니다. \
   . 품질관리리포트 : 원본 데이터 등록시 표현 됩니다. \
   . 라벨 데이터 : 라벨 데이터 등록시 이미지와 함께 표현 됩니다.&#x20;

:::info
각 탭은 입력시에만 활성화 되어 보이게 됩니다. 정보가 없으면 \[기본], \[데이터본문정보] 탭만 보입니다.
:::

### 기본 탭&#x20;

<figure><img src="/img/manual/data-portal/portal2/portal2_2.png" alt="" /><figcaption></figcaption></figure>

1. 분류, 정보, 수정일, 등록일 정보를 나타냅니다.&#x20;
2. 제공기관, 조회수, 다운로드수, 관심데이터 등록 수, 공유 수를 나타냅니다.&#x20;
3. 기본 정보를 나타냅니다. \
   . 제공기관 : 기관명, 관리부서명, 담당자명, 연락처\
   . 상세 정보 : 데이터셋의 메타 정보를 타나냅니다. \
   . 데이터 상세 : 정형/비정형/메타데이터(라벨벨)에 대한 정보를 나타냅니다.&#x20;

<figure><img src="/img/manual/data-portal/portal2/portal2_3.png" alt="" /><figcaption></figcaption></figure>

### 데이터 본문 정보 탭

<figure><img src="/img/manual/data-portal/portal2/portal2_4.png" alt="" /><figcaption></figcaption></figure>

데이터에 대한 이해를 위해 수집 환경, 필드 설명 정보가 표현 됩니다.&#x20;



### 파일 정보 탭

<figure><img src="/img/manual/data-portal/portal2/portal2_5.png" alt="" /><figcaption></figcaption></figure>

1. 샘플파일 등록시 필드별 정보와 다운로드가 가능합니다.
2. 원본파일 등록시 파일정보(=탐색기)를 통해 폴더 구조 및 등록 파일 확인이 가능합니다.&#x20;
3. 원본파일 등록시 파일정보(=탐색기)에서 선택한 파일은 미리 보기가 가능합니다. (csv, jpg, xls)
4. \[마이디스크]로 복사 하여 포털 및 마켓에서 제공하는 분석SW에서 바로 활용  할 수 있습니다. [\[참고\]](/manual/데이터포털/ide-colab.md)
5. 자신의 PC로 다운로드 하여 활용 할 수 있습니다.&#x20;

:::info
\[마이디스크 저장]과 \[다운로드]는 등록시 '데이터 보안'을 비활성화 하여야 가능합니다.&#x20;

![](</img/manual/data-portal/portal2/portal2_8.png>)
:::

### 품질 관리 탭

<figure><img src="/img/manual/data-portal/portal2/portal2_6.png" alt="" /><figcaption></figcaption></figure>

데이터 품질 분석이 가능한 충분한 양의 원본파일(정형데이터)이 등록되었을 경우 표현 됩니다.&#x20;

### 라벨 데이터 탭

<figure><img src="/img/manual/data-portal/portal2/portal2_7.png" alt="" /><figcaption></figcaption></figure>

학습데이터가 라벨 데이터가 지정된 포맷으로 등록되었을  경우 표현 됩니다.&#x20;

