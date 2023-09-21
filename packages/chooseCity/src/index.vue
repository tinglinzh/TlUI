<template>
  <div class="result" @click="ChooseCity">
    <div>{{ result }}</div>
    <div class="icon">
      <ArrowDown :class="{ rotate: chooseCityValue }" />
    </div>
  </div>
  <div style="width: 100%" v-show="chooseCityValue">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="国内城市" name="first">
        <!-- 选择方式 -->
        <div class="choose_way">
          <div class="province">
            <div class="choose_province">按省份选择：</div>
            <tl-choose-area :areaChooseShow="false" />
          </div>
          <div class="search">
            <div class="search_text">直接搜索：</div>
            <div class="search_input">
              <el-select
                v-model="input"
                filterable
                placeholder="请输入城市中文或拼音"
                :filter-method="filterMethod"
                @change="changeInput"
                @focus="focusSelect"
              >
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.name"
                  :value="item.name"
                />
              </el-select>
            </div>
          </div>
        </div>
        <!-- 热门城市 -->
        <div class="hotCity">
          <span>热门城市：</span>
          <p v-for="(item, index) in hotCityList" :key="index">
            <strong class="hotCity_name" @click="clickCity(item)">{{
              item.name
            }}</strong>
          </p>
        </div>
        <!-- 按字母选择 -->
        <div class="by_letter">
          <span>按字母选择：</span>
          <p v-for="(item, index) in city" :key="index">
            <strong class="letter" @click="clickChat(item)">{{
              item.initial
            }}</strong>
          </p>
        </div>
        <ul>
          <li
            class="list"
            v-for="(item1, index1) in cityList"
            :key="index1"
            :id="item1.initial"
          >
            <div class="initial">
              {{ item1.initial }}
            </div>
            <div class="terms" :class="{ list_height: !item1.packup }">
              <div class="find_height">
                <span
                  v-for="city_item in item1.list"
                  :key="city_item.code"
                  @click="clickCity(city_item)"
                  >{{ city_item.name }}</span
                >
              </div>
            </div>
            <span class="more" @click="moreClick(item1)"
              >{{ item1.packup ? "更多" : "收起" }}
              <ArrowDown :class="{ rotate: !item1.packup }"
            /></span>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import city from "../lib/city.json";
export interface CityData {
  code: string;
  name: string;
  pinyin: string;
  label: string;
}
export interface CityItem {
  initial: string;
  packup?: boolean;
  list: CityData[];
}
export interface HotCity {
  name: string;
  pinyin: string;
}

// 分发事件
let emits = defineEmits(["change"]);
// 选择城市
let result = ref<string>("请选择");

const activeName = ref("first");
// 搜索框
let input = ref("");
// 搜索显示城市数据
let options = ref<CityData[]>([]);
// 城市选择栏状态
const chooseCityValue = ref<boolean>(false);

const ChooseCity = () => {
  chooseCityValue.value = !chooseCityValue.value;
};
// 热门城市
let hotCityList = ref<HotCity[]>([
  { name: "北京", pinyin: "beijing" },
  { name: "天津", pinyin: "tianjin" },
  { name: "广州", pinyin: "guangzhou" },
  { name: "上海", pinyin: "shanghai" },
  { name: "武汉", pinyin: "wuhan" },
  { name: "深圳", pinyin: "shenzhen" },
  { name: "南京", pinyin: "nanjing" },
  { name: "成都", pinyin: "chengdou" },
  { name: "重庆", pinyin: "chongqing" },
  { name: "长沙", pinyin: "changsha" },
  { name: "杭州", pinyin: "hangzhou" },
]);

let cityList = ref<CityItem[]>([]);
// 所有扁平化后的城市数据列表
let allCitys = ref<CityData[]>([]);

// 给每一项字母数据添加一个控制显示更多或收起的属性
cityList.value = city.map((item) => ({ ...item, packup: true }));
// 点击更多显示全部城市的方法
const moreClick = (item: CityItem) => {
  item.packup = !item.packup;
};

// 选择城市
const clickCity = (item: CityData | HotCity) => {
  result.value = item.name;
  //   关闭选择城市
  chooseCityValue.value = false;
  console.log(item);

  emits("change", item);
};

// 点击字母跳转到对应字母区域
const clickChat = (item: CityItem) => {
  let el = document.getElementById(item.initial);
  if (el) el.scrollIntoView();
};

// 选择城市框获得焦点时
const focusSelect = () => {
  input.value = "";
};
// 自定义搜索过滤方法
const filterMethod = (val: string) => {
  if (val === "") {
    options.value = allCitys.value;
  } else {
    // 中文拼音一起过滤
    options.value = allCitys.value.filter((item) => {
      let textA = val.charAt(0).toUpperCase() + val.slice(1);
      return item.name.includes(val) || item.pinyin.includes(textA);
    });
  }
};

onMounted(() => {
  //   获取搜索需要用到的所有城市数据;
  // 先通过map遍历拿到每一项字母下的列表，再通过flat扁平化列表，得到包含所有城市的数组
  let cityValues = city.map((item) => item.list).flat(2);
  options.value = cityValues;
  allCitys.value = cityValues;
});

// 搜索框选中值
const changeInput = (val: string) => {
  // 通过find方法将选中的这一项找到
  let changeCity = allCitys.value.find((item) => item.name === val);
  //   修改选中的城市
  result.value = val;
  //   关闭选择栏
  chooseCityValue.value = false;
  //   将选中数据通知给父组件
  emits("change", changeCity);
};
</script>
<style scoped lang="scss">
.result {
  display: flex;
  align-items: center;
  justify-self: center;
  cursor: pointer;
  margin-bottom: 20px;
  .icon {
    display: flex;
    align-items: center;
  }
}
svg {
  width: 1em;
  height: 1em;
  transition: all 0.3s linear;
}
.rotate {
  transform: rotate(180deg);
}
:deep(.el-tabs__item) {
  font-size: 18px;
  font-weight: 600;
}
.list_height {
  height: auto !important;
}
.choose_way {
  display: flex;
  padding: 20px 0 30px;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}
.province {
  display: flex;
  align-items: center;
  margin-right: 100px;
  .choose_province {
    margin-right: 10px;
  }
}
.search {
  display: flex;
  align-items: center;
  .search_text {
    margin-right: 10px;
  }
  :deep(.el-input__wrapper) {
    border-radius: 0;
  }
}
.hotCity {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  line-height: 30px;
  p {
    margin-left: 10px;
    display: inline-block;
    font-size: 14px;
    .hotCity_name {
      margin: 0 15px;
      cursor: pointer;
    }
  }
}
.by_letter {
  display: flex;
  padding: 20px 0;
  line-height: 30px;
  p {
    margin-left: 10px;
    display: inline-block;
    font-size: 14px;
    .letter {
      margin: 0 8px;
      cursor: pointer;
    }
  }
}
.list {
  position: relative;
  margin-bottom: 15px;
  .initial {
    width: 5%;
    display: inline-block;
    position: absolute;
    line-height: 48px;
    text-align: center;
    left: 0px;
    font-size: 24px;
    color: #666;
  }
  .terms {
    display: inline-block;
    overflow: hidden;
    height: 48px;
    max-width: 900px;
    margin-left: 50px;
    border-left: 8px solid #f8f8f8;
    overflow: hidden;
    span {
      font-size: 14px;
      display: inline-block;
      padding: 17px 0;
      line-height: 14px;
      margin: 0 15px;
      color: #909399;
      cursor: pointer;
    }
  }
  .more {
    width: 5%;
    position: absolute;
    right: 10px;
    font-size: 14px;
    line-height: 48px;
    color: #7083d7;
    cursor: pointer;
  }
}
// 鼠标经过
.list:hover {
  .initial {
    color: #efeb7b;
  }
  .terms {
    border-left: 8px solid #efeb7b;
  }
}
</style>
