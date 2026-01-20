---
sidebar_label: FTP로 NextCloud에 업로드 하기
---

# FTP로 NextCloud에 업로드 하기

:::info
추천 하지 않음&#x20;
:::

넥스트클라우드는 추가(업로드) 및 삭제된 파일을 자체 DB에 저장 하고 있습니다.&#x20;

Web 으로 파일을 업로드 하거나, Web에서 삭제시에는 자동으로 DB에 저장 되지만 외부 툴(eg. FTP)를 통해서 업로드한 파일은 넥트스클라우드에서 인식 할 수 없어 보이지 않습니다.&#x20;

이 경우 다음 명령어를 통해 DB에 수동 입력 할 수 있습니다.&#x20;

```
sudo docker exec -ti --user www-data nextcloud /var/www/html/occ files:scan --all
```

