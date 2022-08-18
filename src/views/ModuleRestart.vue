<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col sm="12" class="mt-2">
        <b-form-group id="fieldset-1" label="BROKER" label-for="broker">
          <b-form-select
            id="broker"
            class="form-control"
            v-model="selectedBroker"
            :options="optionsBroker"
            size="lg"
            value-field="item"
            text-field="name"
            @change="onChangeBroker"
          />
        </b-form-group>
      </b-col>
      <b-col sm="12" class="mt-2">
        <b-form-group id="fieldset-2" label="MODULE" label-for="module">
          <b-form-select
            id="module"
            class="form-control"
            v-model="selectedModule"
            :options="this.optionsModule"
            size="lg"
          />
        </b-form-group>
      </b-col>
      <b-col sm="12" class="mt-2">
        <b-form-checkbox-group
          v-model="choice"
          :options="includes"
          value-field="value"
          text-field="label"
          class="mb-3"
          size="lg"
          @change="onChangeInclude"
        />
      </b-col>
      <b-col sm="12">
        <b-input-group class="mt-3">
          <b-form-input v-model="text" />
          <b-input-group-append>
            <b-button squared variant="primary">
              <b-icon icon="back" /> Copy</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import broker from "@/json/broker.json";
import moduleBroker from "@/json/module.json";

export default {
  data() {
    return {
      selected: null,
      optionsBroker: broker,
      moduleBroker: moduleBroker,
      optionsModule: [],
      selectedBroker: "",
      selectedModule: "",
      channel: "",
      includes: [
        {
          label: "Include Stop Broker",
          value: "stop",
        },
        {
          label: "Include Start Broker",
          value: "start",
        },
        {
          label: "Include Tail Broker",
          value: "tail",
        },
      ],
      choice: [],
      text: "",
    };
  },
  methods: {
    onChangeBroker() {
      this.optionsModule = this.moduleBroker.find(
        (x) => x.name === this.selectedBroker
      ).item;
    },
    onChangeInclude() {
      var temp = "";
      if (this.choice.includes("start")) {
        temp =
          temp +
          "msqistart " +
          this.selectedBroker +
          " -e " +
          this.selectedModule +
          " -w 120";
      }
      if (this.choice.includes("stop")) {
        if (this.choice.includes("start")) {
            temp = temp + ' && '
        }
        temp =
          temp +
          "msqistop " +
          this.selectedBroker +
          " -e " +
          this.selectedModule +
          " -w 120";
      }
      if (this.choice.includes("tail")) {
        if (this.choice.includes("stop") || this.choice.includes("start")) {
            temp = temp + ' && '
        }
        // tail -f -n 1000 /var/mdw/wmb-SMSBROKER-SMS.log
        temp =
          temp +
          "tail -f -n 1000 /var/mdw/wmb-" +
          this.selectedBroker +
          "-" +
          this.selectedModule +
          ".log";
      }
      this.text = temp
      console.log(this.text)
    },
  },
};
</script>

<style>
</style>