<template>
  <div>
    <div class="header-top">
      <div class="title">诊断</div>
      <div>
        <a-button @click="goHome"> 首页 </a-button>
        <a-button @click="goStep2"> 上一页 </a-button>
        <a-button @click="goStep4"> 下一页 </a-button>
      </div>
    </div>
    <div class="content-wrap">
      <div class="left-wrap">
         <div class="popup pos1" @click="clickBtn(4)">
            <span><em></em></span>食管下段
         </div>
         <div class="popup pos2" @click="clickBtn(2)">
            <span><em></em></span>胃底
         </div>
           <div class="popup pos3" @click="clickBtn(1)">
            <span><em></em></span>胃角
         </div>
           <div class="popup pos4" @click="clickBtn(3)">
            <span><em></em></span>胃窦
         </div>
      </div>
      <div class="right-wrap">
        <p class="sel-txt">请点击选择图片</p>
        <div class="pic-wrap">
          <div
            class="pic-item"
            @click="selPic(item)"
            :class="{ active: item.id === activeIndex }"
            v-for="(item, index) in picArr"
            :key="index"
          >
            <div class="pic-img">
              <img :src="item.imgSrc" />
            </div>
            <div class="pic-name">{{ item.name }}</div>
          </div>
        </div>
        <div class="sel-wrap">
          <div class="sel-item">
            <div>疾病诊断：</div>
            <div>
              <a-select
                placeholder="请选择"
                style="width: 120px"
                @change="handleChange"
              >
                <a-select-option value="diagnosis1"> 胃溃疡 </a-select-option>
                <a-select-option value="diagnosis2"> 胃息肉 </a-select-option>
                <a-select-option value="diagnosis3">
                  萎缩性胃炎
                </a-select-option>
                <a-select-option value="diagnosis4">
                  反流性食管炎
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="sel-item">
            <div>可能具有的临床症状：</div>
            <div>
              <a-select
                placeholder="请选择"
                style="width: 220px"
                @change="handleChange1"
              >
                <a-select-option value="symptom1" title="餐后上腹痛，并发症为消化道出血">
                  餐后上腹痛，并发症为消化道出血
                </a-select-option>
                <a-select-option value="symptom2" title="内镜下表现为粘膜红白相间，以白为主，可透见粘膜下血管网，病理提示肠上皮化生，属于癌前病变">
                  内镜下表现为粘膜红白相间，以白为主，可透见粘膜下血管网，病理提示肠上皮化生，属于癌前病变
                </a-select-option>
                <a-select-option value="symptom3" title="内镜表现为食管粘膜条状糜烂及溃疡，临床表现为反酸烧心，常见并发症为出血，Barrett食管及癌变">
                  内镜表现为食管粘膜条状糜烂及溃疡，临床表现为反酸烧心，常见并发症为出血，Barrett食管及癌变
                </a-select-option>
                <a-select-option value="symptom4">
                  无明显及特异临床表现
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div class="sel-item">
            <div>位置定位：</div>
            <div>
              <a-select
                placeholder="请选择"
                style="width: 120px"
                @change="handleChange2"
              >
                <a-select-option value="position1"> 食管下段 </a-select-option>
                <a-select-option value="position2"> 胃窦 </a-select-option>
                <a-select-option value="position3"> 胃底 </a-select-option>
                <a-select-option value="position4"> 胃角 </a-select-option>
              </a-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import u32 from "@/assets/u32.jpeg";
import u33 from "@/assets/u33.jpg";
import u34 from "@/assets/u34.jpeg";
import u38 from "@/assets/u38.jpeg";

export default {
  name: "step3",
  data() {
    return {
      activeIndex: 0,
      selObj: {
        id: 0, //图几
        diagnosis: "", //疾病诊断
        symptom: "", //临床症状
        position: "", //位置定位
        programme: "", //治疗方案
        course: "", //治疗疗程
        reviewTime: "", //复查时间
      },
      picArr: [
        { name: "图1", imgSrc: u32, id: 1 },
        { name: "图2", imgSrc: u33, id: 2 },
        { name: "图3", imgSrc: u34, id: 3 },
        { name: "图4", imgSrc: u38, id: 4 },
      ],
    };
  },
  methods: {
    clickBtn(num){
      this.activeIndex=num
      this.selObj.id = num;
    },
    handleChange(val) {
      this.selObj.diagnosis = val;
    },
    handleChange1(val) {
      this.selObj.symptom = val;
    },
    handleChange2(val) {
      this.selObj.position = val;
    },
    selPic(item) {
      //代表图几
      this.selObj.id = item.id;
      console.log(this.selObj);
      this.activeIndex = item.id;
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    goStep2() {
      this.$router.push({ path: "/step2" });
    },
    goStep4() {
      if (this.activeIndex == 0) {
        this.$message.error("请选择图片！");
        return;
      }
      sessionStorage.setItem("result", JSON.stringify(this.selObj));
      this.$router.push({ path: "/step4" });
    },
  },
};
</script>

<style scoped>
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
.title {
  font-size: 24px;
}
.content-wrap {
  display: flex;
  margin-top: 50px;
  justify-content: center;
}
.d3-pic {
  width: 400px;
  height: 600px;
  background-color: bisque;
}
.right-wrap {
  width: 600px;
}
.sel-txt {
  font-size: 18px;
  text-align: center;
}
.pic-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 20px;
}
.pic-item {
  margin-bottom: 20px;
  padding: 5px;
  overflow: hidden;
}
.pic-img {
  width: 250px;
  height: 250px;
}
.pic-img img {
  width: 100%;
  height: 100%;
}
.pic-name {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
}
.active {
  border: 2px solid #009cff;
}
.sel-wrap {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 30px;
}
.left-wrap{
  width: 400px;
  height: 420px;
  background: url('https://raw.githubusercontent.com/woshixiaotuotuo/stomch/main/stomach.png');
  background-size: 100% 100%;
  position: relative;
}

.popup{

    width:100px;

    background:#fc0;

    padding:10px 20px;

    color:#333;

    border-radius:4px;

    cursor: pointer;

    border:1px solid #333;

}
.popup span{

    display:block;

    width:0;

    height:0;

    border-width:0 10px 10px;

    border-style:solid;

    border-color:transparent transparent #333;

    position:absolute;

    top:-10px;

    left:50%;/* 三角形居中显示 */

    margin-left:-10px;/* 三角形居中显示 */

}
.popup em{

    display:block;

    width:0;

    height:0;

    border-width:0 10px 10px;

    border-style:solid;

    border-color:transparent transparent #fc0;

    position:absolute;

    top:1px;

    left:-10px;

}
.pos1{
 position:absolute;
    top:110px;
    left:250px;
}
.pos2{
 position:absolute;
    top:94px;
    left:118px;
}
.pos3{
 position:absolute;
    top:280px;
    left:128px;
}
.pos4{
 position:absolute;
    top:330px;
    left:248px;
}
</style>
