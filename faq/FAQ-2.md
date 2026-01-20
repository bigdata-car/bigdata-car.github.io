# MIG 기반 병렬 GPU 사용하기

- (기존) 한 프로세스가 cuda:LOCAL_RANK(0, 1, 2, ...) 같은 로컬 GPU 인텍스 직접 사용
- (MIG 기반) 각 프로세스가 자기 MIG 1개만 보도록 만든 뒤, 프로세스 내부에서는 항상 cuda:0 만 사용 <br/>
(CUDA_VISIBLE_DEVICES=해당 MIG UUID)


### **1. CUDA_VISIBLE_DEVICES 설정**
- 기존 DDP (물리 GPU)
    - 스크립트 밖 (shell) 에서 설정 또는 미설정 (자동 할당)
    - 코드 내에서 LOCAL_RANK 로 디바이스 지정

- MIG 기반
    - `import torch` 전 강제 매핑
        1. LOCAL_RANK 읽기
        2. CUDA_VISIBLE_DEVICES 를 해당 프로세스의 MIG UUID 1개로 설정
        3. NCCL 관련 env 설정

```python
import os

# nvidia-smi -L 명령어로 확인한 MIG UUID
MIG_IDS = [
    "MIG-XXXXXX...",
    "MIG-VVVVVV..."
]

# 1. LOCAL_RANK 읽기
local_rank = int(os.environment.get("LOCAL_RANK", "0"))
# 2. CUDA_VISIBLE_DEVICES 를 해당 프로세스의 MIG UUID 1개로 설정
os.environment["CUDA_VISIBLE_DEVICES"] = MIG_IDS[local_rank]
# 3. NCCL 관련 env 설정
os.environment.setdefault("NCCL_P2P_DISABLE", "1")
os.environment.setdefault("NCCL_IB_DISABLE", "1")
```

### **2. set_device/device 지정**
- 기존 DDP
```python
local_rank = int(os.environ["LOCAL_RANK"])
torch.cuda.set_device(local_rank)
device = torch.device(f"cuda:{local_rank}")
ddp_model = DDP(model, device_ids=[local_rank])
```
<br/>

- MIG 기반
```python
# 프로세스 당 MIG 1개씩 사용하도록 강제 매핑
torch.cuda.set_device(0)
device = torch.device("cuda:0")
ddp_model = DDP(model, device_ids=[0])
```

### **3. 실행**
- 기존 DDP
```bash
torchrun --standalone --nproc_per_node=${num_devices} xxxx.py
```
<br/>

- MIG 기반
    - 실행 전 CUDA_VISIBLE_DEVICES 세팅 해제 (하나의 프로세스가 하나의 GPU 사용하도록 강제)
```bash
unset CUDA_VISIBLE_DEVICES

torchrun --standalone --nproc_per_node=${num_devices} xxxx.py
```