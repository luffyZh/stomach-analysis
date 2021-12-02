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
      <a-divider />
      <div style="margin-top: 30px; font-size: 16px">{{ suggest }}</div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: "label",
    key: "label",
    width:100
  },
  {
    title: "疾病诊断",
    dataIndex: "diagnosis",
    key: "diagnosis",
    width:150,
  },
  {
    title: "位置定位",
    dataIndex: "position",
    width:110,
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
    width:100,
    dataIndex: "course",
  },
  {
    title: "复查时间",
    key: "reviewTime",
    dataIndex: "reviewTime",
    width:150
  },
];

export default {
  name: "step4",

  data() {
    return {
      data: [],
      columns,
      endDesc: "",
      suggest: "",
      scoreArr: [
        {
          id: 1, //图1
          diagnosis: { key: "diagnosis1", score: 20,desc: "胃溃疡" },
          position: { key: "position4", score: 16,desc: "胃角" },
          symptom: { key: "symptom1", score: 16,desc: "餐后上腹痛，并发症为消化道出血"},
          programme: { key: "programme1", score: 16,desc: "抑酸药+粘膜保护剂"},
          course: { key: "course1", score: 16,desc: "6-8周" },
          reviewTime: { key: "reviewTime1", score: 16,desc: "3个月复查胃镜"},
          desc: "胃溃疡：指发生于胃的局限缺损。原因可能是由于胃排空迟缓，胃窦潴留，释放促胃液素引起胃酸增加，形成溃疡。表现为中、上腹痛，无明确节律性与周期性。对抗酸药疗效差。基础酸不高或很低，癌变率为5%。 90%溃疡位于胃小弯侧。手术指征：①内科治疗3个月不愈合;②反复发作;③直径超过2cm的大溃疡;④未除外癌变;⑤并发梗阻、大出血、穿孔等。主张毕Ⅰ式胃大部分切除。疗效良好者在90%以上。",
        },
        {
          id: 2, //图2
          diagnosis: { key: "diagnosis2", score: 20,desc: "胃息肉" },
          position: { key: "position3", score: 16,desc: "胃底" },
          symptom: { key: "symptom4", score: 16,desc: "无明显及特异临床表现" },
          programme: { key: "programme2", score: 16,desc: "内镜下切除，切除后应用抑酸药及粘膜保护剂治疗" },
          course: { key: "course2", score: 16,desc: "2-4周" },
          reviewTime: { key: "reviewTime2", score: 16,desc: "半年复查胃镜" },
          desc: "胃息肉：突出于胃黏膜表面的良性增生组织团块。可以是肿瘤性、炎性和再生性或结构瘤性。①腺瘤性息肉，又称息肉性腺瘤或腺瘤，是上皮细胞的息肉状良性肿瘤;大片黏膜表面散布大量大小不等的息肉称为息肉病。腺瘤是一种癌前病变。②增生性腺瘤样息肉，占胃良性息肉的90%，多为单发，常见于萎缩性胃炎，其中90%患有胃酸缺乏。③炎性纤维样息肉，可能是一种局限形式的嗜酸性胃炎，单发或多发。胃息肉又可分为真性和假性两种，真性息肉即腺瘤;假性息肉即炎性息肉。真性息肉考虑其癌变，应手术治疗。",
        },
        {
          id: 3, //图3
          diagnosis: { key: "diagnosis3", score: 20,desc: "萎缩性胃炎" },
          position: { key: "position2", score: 16,desc: "胃窦" },
          symptom: { key: "symptom2", score: 16, desc: "内镜下表现为粘膜红白相间，以白为主，可透见粘膜下血管网，病理提示肠上皮化生，属于癌前病变"},
          programme: { key: "programme3", score: 16,desc: "注意易消化饮食，避免饮酒辛辣刺激及质硬食物，去除诱因（如根除HP治疗），给予保护粘膜对症治疗" },
          course: { key: "course3", score: 16,desc: "1-2个月" },
          reviewTime: { key: "reviewTime2", score: 16,desc: "半年复查胃镜"},
          desc: "萎缩性胃炎：本病以胃黏膜萎缩变薄,黏膜腺体减少或消失并伴有肠上皮化生,固有层内多量淋巴细胞、浆细胞浸润为特点。本型胃炎的病因较复杂,部分可能与吸烟、酗酒或用药不当有关;部分由非萎缩性胃炎迁延发展而来;还有部分属自身免疫病。患者可出现消化不良、食欲不佳、上腹部不适等症状。 根据发病是否与自身免疫有关以及是否伴有恶性贫血,将本型胃炎分为 A、B 两型 我国患者多属于 B 型。两型胃黏膜病变基本类似。肉眼观察（胃镜检查):胃黏膜由正常的橘红色变为灰色或灰绿色黏膜层变薄,皱襞变浅甚至消失,黏膜下血管清晰可见,偶有出血及糜烂。",
        },
        {
          id: 4, //图4
          diagnosis: { key: "diagnosis4", score: 20,desc: "反流性食管炎" },
          position: { key: "position1", score: 16,desc: "食管下段" },
          symptom: { key: "symptom3", score: 16,desc: "内镜表现为食管粘膜条状糜烂及溃疡，临床表现为反酸烧心，常见并发症为出血，Barrett食管及癌变" },
          programme: { key: "programme4", score: 16,desc: "注意饮食及体位避免反流诱因"},
          course: { key: "course4", score: 16,desc: "8-12周" },
          reviewTime: { key: "reviewTime1", score: 16,desc: "3个月复查胃镜"},
          desc: "反流性食管炎：反流性食管炎属于胃食管反流性疾病,是由于胃液反流至食管,引起食管下部黏膜慢性炎性改变。临床以胃灼热、胃内容物反流为突出症状,亦可出现疼痛、吞咽困难、呕血和黑便。有时临床症状的严重程度与食管炎的组织学改变程度并不一致。",
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
    this.suggest = obj.desc;
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

    //正确答案
     let correctDesc = {
      key: "2",
      label: "正确答案",
      position:obj.position.desc,
      diagnosis:obj.diagnosis.desc,
      symptom:obj.symptom.desc,
      programme:obj.programme.desc,
      course:obj.course.desc,
      reviewTime:obj.reviewTime.desc,
    };
    this.data.push(correctDesc);

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
