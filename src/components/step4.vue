<template>
  <div>
    <div class="header-top">
      <div class="title">治疗</div>
      <div>
        <a-button  @click="goHome">
          首页
        </a-button>
          <a-button  @click="goStep3">
          上一页
        </a-button>
        <a-button @click="goStep5">
          下一页
        </a-button>
      </div>
    </div>
    <div style="text-align:center">
      <img class="big-pic" src="./../assets/u58.png">
    </div>
    <div class="content-wrap">
        <div class="sel-item">
              <span class="label-name">治疗方案：</span>
               <a-select style="width: 320px" @change="handleChange1">
                  <a-select-option value="programme1">
                    抑酸药+粘膜保护剂
                  </a-select-option>
                  <a-select-option value="programme2">
                    内镜下切除，切除后应用抑酸药及粘膜保护剂治疗
                  </a-select-option>
                  <a-select-option value="programme3">
                    注意易消化饮食，避免饮酒辛辣刺激及质硬食物，去除诱因（如根除HP治疗），给予保护粘膜对症治疗
                  </a-select-option>
                  <a-select-option value="programme4">
                    注意饮食及体位避免反流诱因
                  </a-select-option>
            </a-select>
          </div>

         <div class="sel-item">
              <span class="label-name">治疗疗程：</span>
               <a-select style="width: 320px" @change="handleChange2">
                  <a-select-option value="course1">
                    6-8周
                  </a-select-option>
                  <a-select-option value="course2">
                    2-4周
                  </a-select-option>
                  <a-select-option value="course3">
                    1-2个月
                  </a-select-option>
                  <a-select-option value="course4">
                    8-12周
                  </a-select-option>
            </a-select>
          </div>
      <div class="sel-item">
              <span class="label-name">复查时间：</span>
               <a-select  style="width: 320px" @change="handleChange3">
                  <a-select-option value="reviewTime1">
                    3个月复查胃镜
                  </a-select-option>
                  <a-select-option value="reviewTime2">
                    半年复查胃镜
                  </a-select-option>


            </a-select>
          </div>
    </div>
  </div>
</template>

<script>
import u32 from '@/assets/u32.png'



export default {
  name:'step4',

  data(){
    return{
      selObj:JSON.parse(sessionStorage.getItem("result"))
    }
  },
  methods:{
    handleChange1(val){
      console.log(val)
      this.selObj.programme=val
    },
      handleChange2(val){
      this.selObj.course=val
    },
      handleChange3(val){
      this.selObj.reviewTime=val
    },
    goHome(){
      this.$router.push({path:'/'})
    },
    goStep3(){
      this.$router.push({path:'/step3'})
    },
     goStep5(){
       sessionStorage.setItem("result",JSON.stringify(this.selObj))
      this.$router.push({path:'/step5'})
    }
  }
}
</script>

<style scoped>
.header-top{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
.title{
  font-size:24px;

}
.content-wrap{
  margin-top: 50px;
}
.d3-pic{
  width:400px;
  height: 600px;
  background-color: bisque;
}

.sel-txt{
  font-size: 18px;
  text-align: center;
}




.sel-item{
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}


.big-pic{
  width: 500px;
  height: 100%;
}
</style>
