<template>
  <div ref='mainin' class="mc_date">
    <div class="mc_date_input">
      <div
        @click="changeMonth(-1)"
        class="mc_date_input_button mc_date_input_left"
      >
        ←
      </div>
      <div  @click="showList()" class="mc_date_input_main">
        {{ chosen.year + "年" + (chosen.month + 1) + "月" + chosen.day + "日" }}
      </div>
      <div
        @click="changeMonth(1)"
        class="mc_date_input_button mc_date_input_right"
      >
        →
      </div>
    </div>

    <div v-if="ifShow" class="mc_date_menu">
      <div class="date_row" v-for="(row, index1) in table" :key="index1">
        <div class="date_column" v-for="(column, index2) in row" :key="index2">
          <div @click="chose(column)" class="date_item">
            {{ column ? column.date : null }}
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
function parseDate(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
}
import setting from "../js/setting";
export default {
  name: "mc-date",
  props: ["value", "date"],

  mixins: [setting],
  data: function () {
    return {
      ifShow: false,
      chosen: "2020-01-01",
      mouse_click: {},
      table: [],
      isInput:false
    };
  },
  mounted: function () {
    this.dateChange(this.date);
    this.chosen = parseDate(new Date(this.date));

    this.$refs.mainin.addEventListener(
        "click",()=>{
            this.isInput=true;
        } );

    document.body.addEventListener("click", even);
    var $this = this;
    function even() {
      for (let key in $this.mouse_click) {
        $this.mouse_click[key]();
      }
    }
  },
  emits: {
    ["update:value"]: () => {
      return true;
    },
  },
  methods: {
    dateChange: function (date) {
      var day = new Date(date);

      var nowMonth = day.getMonth(); //当前月
      var nowYear = day.getFullYear(); //当前年
      //本月的开始时间
      var monthStartDate = new Date(nowYear, nowMonth, 1);

      var first = monthStartDate.getDay();
      var mon = monthStartDate.getMonth();
      this.table = [];
      this.table[0] = [];
      if (first == 0) {
        first = 7;
      }
      for (let i = 0; i < first - 1; i++) {
        this.table[0][i] = null;
      }
      var j = 0;

      for (let i = first - 1; monthStartDate.getMonth() == mon; i++) {
        if (monthStartDate.getDay() == 1) {
          j += 1;
          i = 0;
          this.table[j] = [];
        }
        this.table[j][i] = {
          date: monthStartDate.getDate(),
          euql: monthStartDate,
        };

        monthStartDate = new Date(monthStartDate);
        monthStartDate = monthStartDate.setDate(monthStartDate.getDate() + 1);
        monthStartDate = new Date(monthStartDate);
      }
    },
    $mc_mouse_on: function (name, event) {
      this.mouse_click[name] = event;
    },
    showList: function () {
      this.ifShow = true;

      this.$mc_mouse_on("date", () => {
          if(this.isInput){
              //
          }else{
              this.ifShow = false;
          }
          this.isInput=false;
      });
    },
    changeMonth: function (num) {
      var monthStartDate = new Date(this.chosen.year, this.chosen.month, 1);
      monthStartDate = monthStartDate.setMonth(monthStartDate.getMonth() + num);
      this.chosen = parseDate(new Date(monthStartDate));
      this.$emit("update:value", this.chosen);
      this.dateChange(monthStartDate);
    },
    chose: function (item) {
      if (item) {
        this.chosen = parseDate(new Date(item.euql));
        this.$emit("update:value", this.chosen);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import  '../../../scssvar.scss';
.mc_date {
  position: relative;
  width: fit-content;
  height: 100%;
  white-space: nowrap;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
  cursor: pointer;
}
.mc_date_input {
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  border: $borderstyle;

  outline: none;
  transition: all 0.2s;
}

.mc_date_input:focus {
  border: $borderstyle;
}
.mc_date_input:hover {
  border: $borderstyle;
}

.date_row {
  display: flex;
  flex-direction: row;
}
.date_column {
  display: flex;
  flex-direction: row;
}
.date_item {
  width: 28px;
  height: 28px;
  text-align: center;
  line-height: 20px;
  border: $borderstyle;
  transition: all 0.2s;
}
.date_item:hover{
    background-color: $hoverblackcolor;
    color: aliceblue;
}
.mc_date_menu {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  background-color: $whitecolor;
  animation: mc_date_menu_cenan 0.2s;
  user-select: none;
}

.mc_date_input_main {
  width: 130px;
  text-align: center;
}
.mc_date_input_button {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: $white;
  font-weight: 600;
  background-color: $black;
  cursor: pointer;
}
.mc_date_input_button:hover {
  background-color: $hoverblackcolor;
}
.mc_date_input_button::selection {
  background: none;
}
</style>
<style>
@keyframes mc_date_menu_cenan {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>