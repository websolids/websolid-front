"use client";

import type { DateValue } from "@internationalized/date";

import {
  Calendar,
  DateField,
  DatePicker,
  Label,
  TimeField,
  TimeValue,
} from "@heroui/react";
import { getLocalTimeZone, parseZonedDateTime } from "@internationalized/date";
import { useMemo } from "react";

export const DateTimePicker = () => {
  const defaultValue = useMemo<DateValue>(() => {
    const localTimeZone = getLocalTimeZone();

    return parseZonedDateTime(`2026-02-03T08:45:00[${localTimeZone}]`);
  }, []);

  return (
    <DatePicker
      className="w-full min-w-64"
      defaultValue={defaultValue}
      granularity="minute"
      hideTimeZone
      hourCycle={24}
      name="date"
    >
      {({ state }) => (
        <>
          <Label className="text-lg font-bold text-black">
            Когда вам удобно будет связаться?
          </Label>
          <DateField.Group fullWidth>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateField.Suffix>
              <DatePicker.Trigger>
                <DatePicker.TriggerIndicator />
              </DatePicker.Trigger>
            </DateField.Suffix>
          </DateField.Group>
          <DatePicker.Popover className="flex flex-col gap-3">
            <Calendar aria-label="Event date">
              <Calendar.Header>
                <Calendar.YearPickerTrigger>
                  <Calendar.YearPickerTriggerHeading />
                  <Calendar.YearPickerTriggerIndicator />
                </Calendar.YearPickerTrigger>
                <Calendar.NavButton slot="previous" />
                <Calendar.NavButton slot="next" />
              </Calendar.Header>
              <Calendar.Grid>
                <Calendar.GridHeader>
                  {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                </Calendar.GridHeader>
                <Calendar.GridBody>
                  {(date) => <Calendar.Cell date={date} />}
                </Calendar.GridBody>
              </Calendar.Grid>
              <Calendar.YearPickerGrid>
                <Calendar.YearPickerGridBody>
                  {({ year }) => <Calendar.YearPickerCell year={year} />}
                </Calendar.YearPickerGridBody>
              </Calendar.YearPickerGrid>
            </Calendar>
            <div className="flex items-center justify-between">
              <Label>Время</Label>
              <TimeField
                aria-label="Time"
                granularity="minute"
                hideTimeZone
                hourCycle={24}
                name="time"
                // shouldForceLeadingZeros={shouldForceLeadingZeros}
                value={state.timeValue}
                onChange={(v) => state.setTimeValue(v as TimeValue)}
              >
                <TimeField.Group variant="secondary">
                  <TimeField.Input>
                    {(segment) => <TimeField.Segment segment={segment} />}
                  </TimeField.Input>
                </TimeField.Group>
              </TimeField>
            </div>
          </DatePicker.Popover>
        </>
      )}
    </DatePicker>
  );
};
