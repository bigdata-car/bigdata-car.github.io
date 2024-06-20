---
sidebar_position: 1
---

# API의 개념 및 FastAPI 사용법
## API의 필요성
### 기존 알고리즘 실행 및 서비스 방법
<br/>

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/40d075e9-8c83-4ef2-882f-f505dc5df41c)

1. 사용자가 알고리즘을 **직접 개발**하여 사용한다.
    * 사용자가 알고리즘에 대한 이해가 필요하다.
    * 알고리즘을 코드로 구현할 수 있어야 한다.
<br/>

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/52402588-43e2-40fc-b6e5-385f76b65754)

2. 개발자가 **서버에 업로드**한 알고리즘을 사용자가 **다운로드** 받아 필요에 따라 수정 및 보완하여 사용한다. <br/>(코드 형태의 깃허브, 패키지 형태의 Pypi, 컨테이너 형태의 도커 허브 등을 통해 서비스)
    * 사용자는 코드와 알고리즘에 대한 이해가 필요하다.
    * 개발 환경과 실행 환경의 차이에 따라 문제가 발생한다. <br/> (의존성 문제, OS에 따른 문제 등)
    * 컨테이너 형태로 알고리즘을 다운로드 받을 경우, 사용자는 컨테이너 실행 환경 구축이 필요하다.
<br/>

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/c6cc0623-0f66-4793-bb35-7c9f3f610306)

---

### API를 활용한 알고리즘 이용 방법

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/788a1865-61b3-4dc8-8409-d1f5ffa2aa5e)

1. 사용자가 알고리즘 사용을 위한 설치, 설정, 운영 방법 등 익힐 필요가 없다.
2. 웹 서비스 접속하듯이 필요한 **URL 주소 호출**만으로 서비스를 이용할 수 있다.
<br/>

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/e98154a3-5340-4190-8012-0dfdc4d5dd87)

---

## REST API란?
### REST? API?

* REST는 REpresentational State Transfer의 약자이며, **인터넷에서 컴퓨터 시스템 간의 상호 운용성을 제공하는 방법**으로 정의한다.
* **자원을 이름으로 구분하여 자원의 상태를 주고 받는 것**이라고 이해할 수 있다.
* API는 Application Programming Interface의 약자이며, **애플리케이션 간 소통하고 상호작용하기 위해 정의된 인터페이스**로 정의한다.
<br/>

![image](https://github.com/Jongkeun21/kadap-lecture/assets/49437473/49d04dc0-b1e8-4666-9dfc-a020d87d2e85)

#### 정보요청
* **C**reate: 서버에 정보를 올리기 위한 요청. **POST**방식 사용
* **R**ead: 서버에 정보를 불러오기 위한 요청. **GET**방식 사용
* **U**pdate: 서버 정보를 바꾸기 위한 요청. **PUT**방식 사용
* **D**elete: 서버 정보를 지우기 위한 요청. **DELETE**방식 사용

#### 데이터 전달
* JSON, XML, HTML 등의 형태로 요청한 정보의 데이터 전달

```http
HTTP/1.1 200 OK
Content-Type: application/vnd.api+json
Link: <https://example.org/docs/todos>; rel="profile"

{
   "data": [{
      "type": "todo",
      "id": "1",
      "attributes": { "title": "집에 가기" },
      "links": { "self": "http://example.com/todos/1" }
   }]
}
```

---

## API 프레임워크 종류
<br/>

![image](https://github.com/bigdata-car/kadap-lecture/assets/105857557/a1b66104-c4f1-40a9-9cf4-40c0d03724d0)

---

## FastAPI 기초
### FastAPI
* FastAPI는 API를 만들기 위한 **파이썬 기반 웹 프레임워크**이다.
* **비동기 웹 서버**인 uvicorn을 사용하여 API를 만들기 위한 파이썬 프레임워크 중 속도가 가장 빠르다.
* Swagger, ReDoc과 같은 API 문서 자동화 기능을 지원한다.

### FastAPI의 CRUD(Create, Read, Update, Delete)
1. Create(POST 방식)

```python
class Item(BaseModel) :
   user: str
   msg: str

@app.post('/api/v1/tutorial/post')
async def mypost(item: Item) :
   return JSONResponse({
      'success': 'True',
      'data': {
         'user': item.user,
         'msg': item.msg
      }
   })
```
<br/>

2. Read(GET 방식)

```python
@app.get('/api/v1/tutorial/get')
async def myget(user: str, msg: str) :
   return JSONResponse({
      'success': 'True',
      'data': {
         'user': user,
         'msg': msg
      }
   })
```
<br/>

3. Update(PUT, PATCH 방식)

```python
class Item(BaseModel) :
   user: str
   msg: str

@app.put('/api/v1/tutorial/put')
async def myput(item: Item) :
   return JSONResponse({
      'success': 'True',
      'data': {
         'user': item.user,
         'msg': item.msg
      }
   })
```
<br/>

4. Delete(DELETE 방식)

```python
@app.delete('/api/v1/tutorial/delete')
async def mydelete() :
   return Response(status_code=204)
```
<br/>

---