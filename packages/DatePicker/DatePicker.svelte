<script>
  import { onMount } from "svelte";
  import {
    startOfMonth,
    endOfMonth,
    getDate,
    addMonths,
    subMonths,
    format
  } from "date-fns";
  import { MDCMenu } from "@material/menu";
  import { Textfield } from "../Textfield";
  import Icon from "../Common/Icon.svelte";

  let textFieldHeight = null;
  let menu;
  let instance;

  let daysArr = [];
  export let date = new Date();

  onMount(() => {
    if (!!menu) {
      instance = new MDCMenu(menu);
      instance.open = true;
      instance.setFixedPostion = true;
    }
  });

  function addMonth() {
    //add a month to date
    date = addMonths(date, 1);
  }

  function subtractMonth() {
    //subtract month from date
    date = subMonths(date, 1);
  }

  function onMenuToggle() {
    instance.open = true;
  }

  $: monthEnd = endOfMonth(date).getDate();
  $: monthBegin = startOfMonth(date).getDay();
  $: dayStart = monthBegin + 1; //1 = sunday
  $: monthAndYear = format(date, "MMMM y");
  $: selectedDate = format(date, "dd/MM/yyyy");
  $: for (let d = 1; d <= monthEnd; d++) {
    if (d === 1) {
      daysArr = [d];
    } else {
      daysArr = [...daysArr, d];
    }
  }
  $: rowRepeater = monthBegin > 5 && daysArr[daysArr.length - 1] > 30 ? 6 : 5;
</script>

<style>
  .bbmd-menu {
    width: 310px;
    height: auto;
    padding: 5px;
  }

  .month-picker {
    display: grid;
    grid-template-columns: 20px 1fr 20px;
  }

  .month-picker > span {
    text-align: center;
  }

  .calendar-container {
    display: grid;
    height: 100%;
    grid-template-rows: repeat(3, auto);
    grid-gap: 5px;
  }

  .calendar-container > div {
    border: 1px solid red;
  }

  .week-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-picker {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  span {
    justify-self: center;
    align-self: center;
  }
</style>

<!-- 

  TODO: Add hover and ripple effect to icon chevrons
  TODO: Add hover, ripple and active effect to days
  TODO: Add MD typography classes to all text
  TODO: Add transition effects to toggling of calendar
  TODO: Add trailing icon on textfield that is clickable

 -->
<div class="mdc-menu-surface--anchor">
  <Textfield
    bind:tfHeight={textFieldHeight}
    value={selectedDate}
    trailingIcon={true}
    icon="calendar_today"
    label="Select Date" />

  <div
    bind:this={menu}
    class="mdc-menu mdc-menu-surface bbmd-menu"
    style={`margin-top: ${textFieldHeight + 15}px`}>
    <div class="calendar-container">
      <div class="month-picker">
        <span>
          <Icon icon="chevron_left" onClick={subtractMonth} />
        </span>
        <span>{monthAndYear}</span>
        <span>
          <Icon icon="chevron_right" onClick={addMonth} />
        </span>
      </div>
      <div class="week-days">
        <span>Su</span>
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
      </div>
      <div
        class="day-picker"
        style={`grid-template-rows: repeat(${rowRepeater}, 40px)`}>
        {#each daysArr as day, i}
          {#if i === 0}
            <span style={`grid-column-start: ${monthBegin}`}>{day}</span>
          {:else}
            <span>{day}</span>
          {/if}
        {/each}
      </div>
    </div>

    <ul class="mdc-list" role="menu" />
  </div>
</div>
