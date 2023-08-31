---
icon: pen-to-square
date: 2022-01-11
category:
  - 水果
  - 草莓
tag:
  - 红
  - 小
---

# 草莓

## 标题 2

```javascript
<script setup>
import {showModal} from "@/composables/utils.js";
import {store} from "@/store/index.js";

const handleLogout = () => {
  showModal('是否退出登录','warning').then(
      ()=> {
          // 派发退出登录
        store.dispatch('logoutActions')

      }).catch(() => false)
}
</script>
```

### 标题 3

这里是内容。
