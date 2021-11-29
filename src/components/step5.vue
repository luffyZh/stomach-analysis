<template>
  <div>
    <div class="header-top">
      <div class="title">得分:{{ this.allScore }}分</div>
      <div>
        <a-button @click="goHome"> 首页 </a-button>
      </div>
    </div>

    <div class="content-wrap">
      <a-table :pagination="false" :columns="columns" :data-source="data">
      </a-table>
      <div style="margin-top: 30px; font-size: 16px">总结：{{ endDesc }}</div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "label",
    key: "label",
  },
  {
    title: "疾病诊断",
    dataIndex: "diagnosis",
    key: "diagnosis",
  },
  {
    title: "位置定位",
    dataIndex: "position",
    key: "position",
  },

  {
    title: "临床症状",
    key: "symptom",
    dataIndex: "symptom",
  },
  {
    title: "治疗方案",
    key: "programme",
    dataIndex: "programme",
  },
  {
    title: "疗程",
    key: "course",
    dataIndex: "course",
  },
  {
    title: "复查时间",
    key: "reviewTime",
    dataIndex: "reviewTime",
  },
];

export default {
  name: "step4",

  data() {
    return {
      data: [],
      columns,
      endDesc: "",
      scoreArr: [
        {
          id: 1, //图1
          diagnosis: { key: "diagnosis1", score: 20 },
          position: { key: "position4", score: 16 },
          symptom: { key: "symptom1", score: 16 },
          programme: { key: "programme1", score: 16 },
          course: { key: "course1", score: 16 },
          reviewTime: { key: "reviewTime1", score: 16 },
        },
        {
          id: 2, //图2
          diagnosis: { key: "diagnosis2", score: 20 },
          position: { key: "position3", score: 16 },
          symptom: { key: "symptom4", score: 16 },
          programme: { key: "programme2", score: 16 },
          course: { key: "course2", score: 16 },
          reviewTime: { key: "reviewTime2", score: 16 },
        },
        {
          id: 3, //图3
          diagnosis: { key: "diagnosis3", score: 20 },
          position: { key: "position2", score: 16 },
          symptom: { key: "symptom2", score: 16 },
          programme: { key: "programme3", score: 16 },
          course: { key: "course3", score: 16 },
          reviewTime: { key: "reviewTime2", score: 16 },
        },
        {
          id: 4, //图4
          diagnosis: { key: "diagnosis4", score: 20 },
          position: { key: "position1", score: 16 },
          symptom: { key: "symptom3", score: 16 },
          programme: { key: "programme4", score: 16 },
          course: { key: "course4", score: 16 },
          reviewTime: { key: "reviewTime1", score: 16 },
        },
      ],
      allScore: 0,
      positionArr: [
        //位置定位
        { key: "position1", desc: "食管下段" },
        { key: "position2", desc: "胃窦" },
        { key: "position3", desc: "胃底" },
        { key: "position4", desc: "胃角" },
      ],
      diagnosisArr: [
        //疾病诊断
        { key: "diagnosis1", desc: "胃溃疡" },
        { key: "diagnosis2", desc: "胃息肉" },
        { key: "diagnosis3", desc: "萎缩性胃炎" },
        { key: "diagnosis4", desc: "反流性食管炎" },
      ],
      symptomArr: [
        //临床症状
        { key: "symptom1", desc: "餐后上腹痛，并发症为消化道出血" },
        {
          key: "symptom2",
          desc: "内镜下表现为粘膜红白相间，以白为主，可透见粘膜下血管网，病理提示肠上皮化生，属于癌前病变",
        },
        {
          key: "symptom3",
          desc: "内镜表现为食管粘膜条状糜烂及溃疡，临床表现为反酸烧心，常见并发症为出血，Barrett食管及癌变",
        },
        { key: "symptom4", desc: "无明显及特异临床表现" },
      ],
      programmeArr: [
        //治疗方案
        { key: "programme1", desc: "抑酸药+粘膜保护剂" },
        {
          key: "programme2",
          desc: "内镜下切除，切除后应用抑酸药及粘膜保护剂治疗",
        },
        {
          key: "programme3",
          desc: "注意易消化饮食，避免饮酒辛辣刺激及质硬食物，去除诱因（如根除HP治疗），给予保护粘膜对症治疗",
        },
        { key: "programme4", desc: "注意饮食及体位避免反流诱因" },
      ],
      courseArr: [
        //治疗疗程
        { key: "course1", desc: "6-8周" },
        { key: "course2", desc: "2-4周" },
        { key: "course3", desc: "1-2个月" },
        { key: "course4", desc: "8-12周" },
      ],
      reviewTimeArr: [
        //复查时间
        { key: "reviewTime1", desc: "3个月复查胃镜" },
        { key: "reviewTime2", desc: "半年复查胃镜" },
      ],
    };
  },
  methods: {
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    let resultObj = JSON.parse(sessionStorage.getItem("result"));
    //算分
    let selobj = this.scoreArr.filter((item) => {
      return item.id === resultObj.id;
    });
    let obj = selobj[0];
    console.log(obj);
    //诊断得分
    if (obj.diagnosis.key === resultObj.diagnosis) {
      this.allScore += obj.diagnosis.score;
    }
    //位置得分
    if (obj.position.key === resultObj.position) {
      this.allScore += obj.position.score;
    }
    //临床症状得分
    if (obj.symptom.key === resultObj.symptom) {
      this.allScore += obj.symptom.score;
    }
    //治疗方案得分
    if (obj.programme.key === resultObj.programme) {
      this.allScore += obj.programme.score;
    }
    //治疗疗程得分
    if (obj.course.key === resultObj.course) {
      this.allScore += obj.course.score;
    }
    //复查时间得分
    if (obj.reviewTime.key === resultObj.reviewTime) {
      this.allScore += obj.reviewTime.score;
    }

    //最后的描述语言
    if (this.allScore === 100) {
      this.endDesc = "恭喜你，这个知识点已经掌握了，记得时时复习、勤加巩固哦。";
    } else if (this.allScore < 100 && this.allScore >= 80) {
      this.endDesc = "优秀，再注意一点小细节就更完美啦。";
    } else if (this.allScore < 80 && this.allScore >= 64) {
      this.endDesc =
        "万丈高楼平地起,一砖一瓦皆根基。虽然已经及格，但还需要继续努力弥补漏洞哦。";
    } else if (this.allScore < 64) {
      this.endDesc =
        "认真做好每一件事情，写每一个字，看每一本书，做每一道题，静下心来耐心做事的你，一定会比现在更好，加油!";
    }
    //表格描述
    //位置定位
    let position = this.positionArr.filter((item) => {
      return item.key == resultObj.position;
    });
    //疾病诊断
    let diagnosis = this.diagnosisArr.filter((item) => {
      return item.key == resultObj.diagnosis;
    });
    let symptom = this.symptomArr.filter((item) => {
      return item.key == resultObj.symptom;
    });
    let programme = this.programmeArr.filter((item) => {
      return item.key == resultObj.programme;
    });
    let course = this.courseArr.filter((item) => {
      return item.key == resultObj.course;
    });
    let reviewTime = this.reviewTimeArr.filter((item) => {
      console.log(item.key);
      return item.key == resultObj.reviewTime;
    });
    let objDesc = {
      key: "1",
      label: "我的答案",
      position: position[0].desc,
      diagnosis: diagnosis[0].desc,
      symptom: symptom[0].desc,
      programme: programme[0].desc,
      course: course[0].desc,
      reviewTime: reviewTime[0].desc,
    };
    this.data.push(objDesc);

    console.log(this.data);
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
  margin: 50px auto 0;
  width: 1200px;
}
.d3-pic {
  width: 400px;
  height: 600px;
  background-color: bisque;
}

.sel-txt {
  font-size: 18px;
  text-align: center;
}

.sel-item {
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}

.big-pic {
  width: 500px;
  height: 100%;
}
</style>
