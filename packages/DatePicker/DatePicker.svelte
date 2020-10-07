<script>
  import { onMount } from "svelte";
  import {
    startOfMonth,
    endOfMonth,
    getDate,
    getMonth,
    getYear,
    addMonths,
    subMonths,
    format,
  } from "date-fns";
  import { MDCMenu } from "@material/menu";
  import { Textfield } from "../Textfield";
  import { IconButton } from "../IconButton";
  import Icon from "../Common/Icon.svelte";
  import ripple from "../Common/Ripple.js";
  import { Body1, Body2, Caption } from "../Typography";

  let textFieldHeight = null;
  let menu;
  let instance;

  let daysArr = [];
  let navDate = new Date();
  const weekdayMap = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  export let date = new Date();

  onMount(() => {
    if (!!menu) {
      instance = new MDCMenu(menu);
      instance.setFixedPostion = true;
    }
  });

  function selectDate(dayOfMonth) {
    let month = getMonth(navDate);
    let year = getYear(navDate);
    date = new Date(year, month, dayOfMonth);
  }

  function addMonth() {
    navDate = addMonths(navDate, 1);
  }

  function subtractMonth() {
    navDate = subMonths(navDate, 1);
  }

  function openCalendar() {
    instance.open = true;
  }

  $: dateMonthEnds = endOfMonth(navDate).getDate();
  $: dateMonthBegins = startOfMonth(navDate).getDay();
  $: dayStart = dateMonthBegins + 1; //1 = sunday
  $: monthAndYear = format(navDate, "MMMM y");
  $: selectedDate = format(date, "dd/MM/yyyy");
  $: dayOfSelectedDate = getDate(date);
  $: for (let d = 1; d <= dateMonthEnds; d++) {
    if (d === 1) {
      daysArr = [d];
    } else {
      daysArr = [...daysArr, d];
    }
  }
  $: rowRepeater =
    dateMonthBegins > 5 && daysArr[daysArr.length - 1] > 30 ? 6 : 5;
  $: sameMonthAndYear =
    getMonth(date) === getMonth(navDate) && getYear(date) === getYear(navDate);
</script>

<style>
  .bbmd-menu {
    width: 320px;
    height: auto;
    padding: 5px;
  }

  .month-picker {
    display: grid;
    grid-template-columns: 48px 1fr 48px;
    justify-content: center;
    align-items: center;
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

  .week-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .day-picker {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .centreText {
    text-align: center;
  }

  span {
    margin: auto;
  }
</style>

<!-- 
  TODO: Add transition effects to toggling of calendar
  TODO: Bug - August 2020 has too many rows. find out why
  TODO: Bug - make out transition of date bg colour instantaneous
 -->
<div class="mdc-menu-surface--anchor">
  <Textfield
    bind:tfHeight={textFieldHeight}
    value={selectedDate}
    trailingIcon={true}
    useIconButton
    icon="calendar_today"
    on:click={openCalendar}
    label="Select Date" />

  <div
    bind:this={menu}
    class="mdc-menu mdc-menu-surface bbmd-menu"
    style={`margin-top: ${textFieldHeight + 15}px`}>
    <div class="calendar-container">
      <div class="month-picker">
        <span>
          <IconButton on:click={subtractMonth}>
            <Icon>chevron_left</Icon> 
          </IconButton>
        </span>
        <div class="centreText">
          <Body1>{monthAndYear}</Body1>
        </div>
        <span>
          <IconButton on:click={addMonth}>          
            <Icon>chevron_right</Icon>
          </IconButton>
        </span>
      </div>
      <div class="week-days">
        {#each weekdayMap as day, i}
          <div class="centreText">
            <Caption>{day}</Caption>
          </div>
        {/each}
      </div>
      <div
        class="day-picker"
        style={`grid-template-rows: repeat(${rowRepeater}, 40px)`}>
        {#each daysArr as day, i}
          <div
            use:ripple
            style={i === 0 ? `grid-column-start: ${dayStart}` : ``}
            on:click={() => selectDate(day)}
            class={`bbmd-day ${dayOfSelectedDate === day && sameMonthAndYear ? 'selected' : ''}`}>
            {#if i === 0}
              <div style={`grid-column-start: ${dateMonthBegins}`}>
                <Body2>{day}</Body2>
              </div>
            {:else}
              <Body2>{day}</Body2>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <ul class="mdc-list" role="menu" />
  </div>
</div>
