---
sidebar_position: 1
---

# 1. Write and Magic

- Write arguments to the app
- Multiple arguments를 지원하기 때문에 다양한 표현 가능

## 1.1 write(string)

```python
import streamlit as st

st.write("Hello. *World!* : sunglasses:')
```
![image](https://github.com/bigdata-car/kadap-lecture/assets/105857557/aefc4194-2169-42f3-b510-b74c56e5f57b)

## 1.2 write_stream(string)

```python
import streamlit as st

string = "KADaP Cloud는 자동차 데이터 분석과 기술 개발에 필요한 IT 인프라를 가상화 기술을 활용하여 대여해 주는 서비스입니다. 사용자는 원하는 사양의 서버를 직접 생성하거나 제공되는 시뮬레이션, 분석, 개발 환경에 접속하여 바로 사용할 수 있습니다."

def stream_data():
    for word in string.split(" "):
        yield word + " "
        time.sleep(0.1)

st.write_stream(stream_data)
```
![ezgif com-crop](https://github.com/bigdata-car/kadap-lecture/assets/153149491/c2e4d9f1-cb89-438e-8661-7678b4aebed2)


# 2. Text elements

## 2.1 Markdown
```python
import streamlit as st

st.markdown("*Streamlit* is **really** ***cool***.")
st.markdown('''
    :red[Streamlit] :orange[can] :green[write] :blue[text] :violet[in]
    :gray[pretty] :rainbow[colors] and :blue-background[highlight] text.''')
st.markdown("Here's a bouquet &mdash;\
            :tulip::cherry_blossom::rose::hibiscus::sunflower::blossom:")

multi = '''If you end a line with two spaces,
a soft return is used for the next line.

Two (or more) newline characters in a row will result in a hard return.
'''
st.markdown(multi)
```
https://doc-markdown.streamlit.app/?utm_medium=oembed&

## 2.2 Title
```python
import streamlit as st

st.title('This is a title')
st.title('_Streamlit_ is :blue[cool] :sunglasses:')
```
## 2.3 Header
```python
import streamlit as st

st.header('This is a header with a divider', divider='rainbow')
st.header('_Streamlit_ is :blue[cool] :sunglasses:')
```
## 2.4 Caption
```python
import streamlit as st

st.caption('This is a string that explains something above.')
st.caption('A caption with _italics_ :blue[colors] and emojis :sunglasses:')
```
## 2.5 Code block
```python
import streamlit as st

code = '''def hello():
    print("Hello, Streamlit!")'''
st.code(code, language='python')
```
# 3. Data elements
## 3.1 Dataframes
```python
import streamlit as st
import pandas as pd
import numpy as np

df = pd.DataFrame(np.random.randn(50, 20), columns=("col %d" % i for i in range(20)))

st.dataframe(df)  # Same as st.write(df)
```
## 3.2 Metrics
```python
import streamlit as st

col1, col2, col3 = st.columns(3)
col1.metric("Temperature", "70 °F", "1.2 °F")
col2.metric("Wind", "9 mph", "-8%")
col3.metric("Humidity", "86%", "4%")
```
# 4. Chart elements
## 4.1 Simple area charts
```python
import streamlit as st
import pandas as pd
import numpy as np

chart_data = pd.DataFrame(np.random.randn(20, 3), columns=["a", "b", "c"])

st.area_chart(chart_data)
```
## 4.2 Simple line charts
```python
import streamlit as st
import pandas as pd
import numpy as np

chart_data = pd.DataFrame(np.random.randn(20, 3), columns=["a", "b", "c"])

st.line_chart(chart_data)
```
## 4.3 Matplotlib
```python
import streamlit as st
import matplotlib.pyplot as plt
import numpy as np

arr = np.random.normal(1, 1, size=100)
fig, ax = plt.subplots()
ax.hist(arr, bins=20)

st.pyplot(fig)
```
# 5. Input widgets

## 5.1 Button
```python
import streamlit as st

st.button("Reset", type="primary")
if st.button("Say hello"):
    st.write("Why hello there")
else:
    st.write("Goodbye")
```
## 5.2 Download button
```python
import streamlit as st

with open("flower.png", "rb") as file:
    btn = st.download_button(
            label="Download image",
            data=file,
            file_name="flower.png",
            mime="image/png"
          )
```
## 5.4 Slider
```python
import streamlit as st

age = st.slider("How old are you?", 0, 130, 25)
st.write("I'm ", age, "years old")
```
## 5.5 File uploader
```python
import streamlit as st

uploaded_files = st.file_uploader("Choose a CSV file", accept_multiple_files=True)
for uploaded_file in uploaded_files:
    bytes_data = uploaded_file.read()
    st.write("filename:", uploaded_file.name)
    st.write(bytes_data)
```