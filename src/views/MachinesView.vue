<template>
  <div class="container text-center py-5">
    <h4 class="main-theme-color">online laundry</h4>
    <h1 class="mb-5">ซักผ้าออนไลน์</h1>
  </div>
  <div class="container text-center py-5">
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row">
          <div v-for="(machine, index) in machines" :key="index" class="col-6 col-md-4">
            <img :src="wash_machine" class="w-100" alt="" />
            <div class="card mt-3">
              <h3 class="my-3">{{ machine.name }}</h3>
              <div
                class="machine-status"
                :class="{ available: machine.available, 'bg-danger': !machine.available }"
              >
                {{ machine.available ? "Available" : "In Use" }}
              </div>
              <div class="machine-timer">Total coin: {{ machine.insertedCoin }}</div>
              <div class="machine-timer" v-if="!machine.available">
                Time remaining: {{ secondsToTime(machine.time) }}
              </div>
              <div class="row">
                <div class="col-6">
                  <button class="btn" @click="insertCoin(index)" :disabled="!machine.available">
                    Insert Coin
                  </button>
                </div>
                <div class="col-6">
                  <button class="btn" @click="startMachine(index)" :disabled="!machine.available || machine.insertedCoin == 0">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <div class="card">
          <div class="card-header  card-pri color-success" style="background-color: #4CC764;color: #ffffff;">LINE</div>
          <div class="card-body">
            <div class="notifications">
              <div v-for="(notification, index) in notify" :key="index" class="notification">
                <p>{{ notification.context }}</p>
                <small>{{ notification.time.toLocaleString() }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wash_machine from "@/assets/image/machine.png";
export default {
  setup() {
    return {
      wash_machine
    };
  },
  data() {
    return {
      timePerCoin: 60, // seconds
      machines: [
        {
          name: "WashMachine 1",
          insertedCoin: 0,
          available: true,
          time: 0,
          price: 0,
          timer: null,
          timeInterval: 1000
        },
        {
          name: "WashMachine 2",
          insertedCoin: 0,
          available: true,
          time: 0,
          price: 0,
          timer: null,
          timeInterval: 1000
        },
        {
          name: "WashMachine 3",
          insertedCoin: 0,
          available: true,
          time: 0,
          price: 0,
          timer: null,
          timeInterval: 1000
        }
      ],
      notify: []
    };
  },
  methods: {
    insertCoin(index) {
      this.machines[index].insertedCoin += 1;
      this.machines[index].time = this.machines[index].insertedCoin * this.timePerCoin;
    },
    sendLineMessage(message) {
      this.notify.push({
        context: message,
        time: new Date()
      });
    },
    startMachine(index) {
      this.machines[index].available = false;
      this.machines[index].timer = setInterval(() => {
        this.machines[index].time -= 1;
        if (this.machines[index].time + 1 === 60) {
          this.sendLineMessage(
            `เครื่องซักผ้า ${this.machines[index].name} จะหยุดในอีก ${this.secondsToTime(
              this.timePerCoin
            )} นาที `
          );
        }
        if (this.machines[index].time === 0) {
          this.machines[index].available = true;
          this.machines[index].insertedCoin = 0;
          clearInterval(this.machines[index].timer);
        }
      }, this.machines[index].timeInterval);
    },
    secondsToTime(second) {
      const h = Math.floor(second / 3600)
          .toString()
          .padStart(2, "0"),
        m = Math.floor((second % 3600) / 60)
          .toString()
          .padStart(2, "0"),
        s = Math.floor(second % 60)
          .toString()
          .padStart(2, "0");

      return h + ":" + m + ":" + s;
      //return `${h}:${m}:${s}`;
    }
  }
};
</script>
<style scoped>
.washing-machines {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.washing-machine {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  width: 200px;
}

.machine-status {
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  color: #fff;
}

.available {
  background-color: green;
}

.machine-timer {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.notifications {
  margin-top: 20px;
}

.notification {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
