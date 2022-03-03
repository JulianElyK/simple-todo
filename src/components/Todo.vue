<template>
  <div class="my-1 flex flex-row justify-between">
    <div
      class="flex flex-col justify-center"
      :class="{
        'text-red-600 font-black': new Date() > new Date(datetime) && !done,
        'line-through text-green-600': done,
      }"
    >
      <p class="font-bold text-xl">{{ title }}</p>
      <p class="font-thin text-sm opacity-75">{{ desc }}</p>
      <span class="italic">{{ splitDateTime(datetime) }}</span>
    </div>
    <div class="flex flex-col justify-center">
      <button class="hover:bg-blue-600 bg-sky-200 w-6 h-6 m-1 rounded-md">
        X
      </button>
      <button
        class="hover:bg-blue-600 bg-sky-200 w-6 h-6 m-1 rounded-md"
        @click="$emit('markDone')"
      >
        v/
      </button>
    </div>
  </div>
</template>

<script>
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default {
  props: ["id", "title", "desc", "datetime", "done"],
  methods: {
    splitDateTime(datetime) {
      let [date, time] = datetime.split("T");
      date = new Date(date);
      date =
        "" +
        date.getDate() +
        " " +
        MONTHS[date.getMonth()] +
        " " +
        date.getFullYear();
      return "" + date + " " + time;
    },
  },
};
</script>

<style></style>
