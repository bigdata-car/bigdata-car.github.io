---
sidebar_position: 3
---

# 연비예측모델
## 연비예측모델 API로 만들기

* Day01-Class01에서 진행한 **[머신러닝을 이용한 선형회귀 모델 구현 실습](https://github.com/bigdata-car/kadap-lecture/tree/main/20240522-katech-python-with-kadap-cloud/Day01-Class01)** 코드를 이용하여 API를 만든다.
* 알고리즘의 입력과 출력이 무엇인지 파악하고, 각각을 API의 request와 response로 구현한다.
<br/>

## 연비예측모델 분석 : API를 GET 방식으로 구현 및 호출해보기

![image](https://github.com/bigdata-car/kadap-lecture/assets/105857557/dd233db8-6fce-443d-9157-221a87998189)

1. 모델 입력/출력 데이터
  * 입력 : 차량 가속도(Vehicle acceleration), 차량 현재속도(Vehicle speed), 엔진 RPM(Engine RPM)
  * 출력 : 리터당 예상 이동 가능 거리(KmPL)

2. (서버) API 구현 - GET 방식
```python
app = FastAPI()

@app.get('/api/v1/automotive_regression')
async def GET(acceleration, velocity, rpm) :
  # model: 연비예측모델
  result = model(acceleration, velocity, rpm)
  return JSONResponse({
    'result': result
  })
```

3. (클라이언트) API 호출 - GET 방식
```python
import requests
import json

url = "www.example.com/api/v1/automotive_regression"
params = {
  "acceleration": 0.082192,
  "velocity": 45,
  "rpm": 2111
}

res = requests.get(url=url, params=params)
```
<br/>

## 연비예측모델 분석 : API를 POST 방식으로 구현 및 호출해보기

1. 모델 입력/출력 데이터 : GET 방식과 동일
2. (서버) API 구현 - POST 방식
```python
app = FastAPI()

class Body(BaseModel) :
  acceleration: float
  velocity: float
  rpm: float

@app.post('/api/v1/automotive_regression')
async def POST(body: Body) :
  # model: 연비예측모델
  result = model(body.acceleration, body.velocity, body.rpm)
  return JSONResponse({
    'result': result
  })
```

3. (클라이언트) API 호출 - POST 방식
```python
import requests
import json

url = "www.example.com/api/v1/automotive_regression"
headers = { "Content-Type": "application/json" }
payload = json.dumps({
  "acceleration": 0.082192,
  "velocity": 45,
  "rpm": 2111
})

res = requests.post(url=url, headers=headers, data=payload)
```
<br/>

---

## GET 방식과 POST 방식 차이점
> GET 방식
```python
app = FastAPI()

@app.get('/api/v1/automotive_regression')
async def GET(acceleration, velocity, rpm) :
  # model: 연비예측모델
  result = model(acceleration, velocity, rpm)
  return JSONResponse({
    'result': result
  })
```
> * 클라이언트에서 **서버의 정보를 요청**하기 위해 사용한다. (게시판의 게시물 조회, 사용자 정보 조회)
> * GET 메소드를 통한 요청은 **URL 끝에 파라미터 포함**하여 전송한다. (www.example.com/api/v1?param1=value1&param2=value2)
> * GET 요청은 URL 끝에 파라미터를 포함하기 때문에 **정보의 노출 위험성 높다.** (브라우저에 기록된다)
> * GET 방식은 불필요한 요청을 제한하기 위해 **캐시될 수 있다.**
> * GET 요청은 브라우저마다의 **길이 제한이 존재한다.**

<br/>

> POST 방식
```python
app = FastAPI()

class Body(BaseModel) :
  acceleration: float
  velocity: float
  rpm: float

@app.post('/api/v1/automotive_regression')
async def POST(body: Body) :
  # model: 연비예측모델
  result = model(body.acceleration, body.velocity, body.rpm)
  return JSONResponse({
    'result': result
  })
```
> * 클라이언트에서 **서버의 정보를 생성, 업데이트**하기 위해 사용한다.
> * GET 메소드와 달리 **데이터를 body에 담아 전송**한다. (Body 타입은 요청 세더의 Content-Type에 따라 결정)
> * HTTP 메시지 body는 **길이의 제한이 없다.** --> POST 방식은 **길이의 제한 없이 데이터 전송 가능**
> * POST 방식은 데이터가 URL에 표시되지 않기 때문에 GET 방식보다 **비교적 안전하다.** (민감한 데이터의 경우 어떤 방식이라도 암호화 필수)
> * POST 요청은 **캐시되지 않는다.**
---

# 예제코드
Visual studio code

1. [GET, POST 방식을 사용한 연비예측모델 API](https://github.com/bigdata-car/kadap-lecture/blob/main/20240522-katech-python-with-kadap-cloud/Day02-Class01/automotive_regression/automotive_regression.py)

---
