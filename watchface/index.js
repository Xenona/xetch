﻿var SCREEN_W = 192;
var SCREEN_H = 490;
var TIME_DIG_W = 52;
var TIME_DIG_H = 77;
var TIME_X_L = 43;
var TIME_GAP_X = 10;
var TIME_GAP_Y = 27;
var TIME_X_R = TIME_X_L + TIME_DIG_W + TIME_GAP_X;
var TIME_Y = 44;


try {
  (() => {
    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;

    ("use strict");

    const timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
    const batterySensor = hmSensor.createSensor(hmSensor.id.BATTERY);

    const bigDigitsFont = [
      "images/time0.png",
      "images/time1.png",
      "images/time2.png",
      "images/time3.png",
      "images/time4.png",
      "images/time5.png",
      "images/time6.png",
      "images/time7.png",
      "images/time8.png",
      "images/time9.png",
    ];
    const monthsFont = [
      "images/jan.png",
      "images/feb.png",
      "images/mar.png",
      "images/apr.png",
      "images/may.png",
      "images/jun.png",
      "images/jul.png",
      "images/aug.png",
      "images/sep.png",
      "images/oct.png",
      "images/nov.png",
      "images/dec.png",
    ];
    const smallDigitsFont = [
      "images/date0.png",
      "images/date1.png",
      "images/date2.png",
      "images/date3.png",
      "images/date4.png",
      "images/date5.png",
      "images/date6.png",
      "images/date7.png",
      "images/date8.png",
      "images/date9.png",
    ];
    const weekDaysFont = [
      "images/mon.png",
      "images/tue.png",
      "images/wed.png",
      "images/thu.png",
      "images/fri.png",
      "images/sat.png",
      "images/sun.png",
    ];
    const statusDot = "images/dot.png";
    let widgetGallery = [];
    let currW = 0;

    __$$module$$__.module = DeviceRuntimeCore.Page({
      init_view() {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: -1,
          src: "images/bg.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        });


        const timeDigits = [];
        let y = TIME_Y;
        for (let i = 0; i < 3; i++) {
          timeDigits.push(
            hmUI.createWidget(hmUI.widget.IMG, {
              x: TIME_X_L,
              y,
              src: bigDigitsFont[0],
              show_level: hmUI.show_level.ONLY_NORMAL,
            }),
          );
          timeDigits.push(
            hmUI.createWidget(hmUI.widget.IMG, {
              x: TIME_X_R,
              y,
              src: bigDigitsFont[0],
              show_level: hmUI.show_level.ONLY_NORMAL,
            }),
          );
          y += TIME_DIG_H + TIME_GAP_Y;
        }

        function updateTime() {
          timeDigits[0].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.format_hour / 10)],
          );
          timeDigits[1].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.format_hour % 10)],
          );
          timeDigits[2].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.minute / 10)],
          );
          timeDigits[3].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.minute % 10)],
          );
          timeDigits[4].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.second / 10)],
          );
          timeDigits[5].setProperty(
            hmUI.prop.SRC,
            bigDigitsFont[parseInt(timeSensor.second % 10)],
          );
        }

        hmUI.createWidget(hmUI.widget.IMG_TIME, {
          hour_zero: 1,
          hour_startX: 25,
          hour_startY: 135,
          hour_array: bigDigitsFont,
          hour_space: 0,
          hour_align: hmUI.align.RIGHT,

          minute_zero: 1,
          minute_startX: 25,
          minute_startY: 245,
          minute_array: bigDigitsFont,
          minute_space: 0,
          minute_align: hmUI.align.RIGHT,

          second_zero: 1,
          second_startX: 25,
          second_startY: 355,
          second_array: bigDigitsFont,
          second_space: 0,
          second_align: hmUI.align.RIGHT,

          show_level: hmUI.show_level.ONLY_AOD,
        });

        hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 93,
          y: 465,
          src: statusDot,
          type: hmUI.system_status.DISCONNECT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        const dateGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 43,
          y: 380,
          w: 110,
          h: 76,
        })

        dateGroup.createWidget(hmUI.widget.IMG_DATE, {
          month_startX: 0,
          month_startY: 0,
          month_en_array: monthsFont,
          month_is_character: true,

          day_startX: 71,
          day_startY: 0,
          day_align: hmUI.align.CENTER_H,
          day_space: 0,
          day_zero: false,
          day_en_array: smallDigitsFont,

          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        dateGroup.createWidget(hmUI.widget.IMG_WEEK, {
          x: 23,
          y: 40,
          week_en: weekDaysFont,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        widgetGallery.push(dateGroup);



        const batteryGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 43,
          y: 380,
          w: 110,
          h: 76,
        })

        // const hundreds = batteryGroup.createWidget(hmUI.widget.IMG_LEVEL, {
        //   x: 20,
        //   y: 24,
        //   image_array: smallDigitsFont,
        //   image_length: smallDigitsFont.length,
        //   level: 1,
        //   show_level: hmUI.show_level.ONLY_NORMAL

        // })
        const tens = batteryGroup.createWidget(hmUI.widget.IMG, {
          x: 24,
          y: 24,
          image_array: smallDigitsFont,
          show_level: hmUI.show_level.ONLY_NORMAL

        })
        const ones = batteryGroup.createWidget(hmUI.widget.IMG, {
          x: 47,
          y: 24,
          image_array: smallDigitsFont,
          show_level: hmUI.show_level.ONLY_NORMAL

        })
        const percent = batteryGroup.createWidget(hmUI.widget.IMG, {
          x: 70,
          y: 24,
          src: 'images/percent.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })


        function setBattery() {
          tens.setProperty(hmUI.prop.SRC, smallDigitsFont[Math.floor((batterySensor.current % 100) / 10)])
          ones.setProperty(hmUI.prop.SRC, smallDigitsFont[batterySensor.current % 10])
        }

        function setCurrWidget(curr) {
          widgetGallery[currW].setProperty(hmUI.prop.VISIBLE, false)
          if (curr) {
            currW = curr;
          } else {
            currW = (currW + 1) % widgetGallery.length;
          }
          widgetGallery[currW].setProperty(hmUI.prop.VISIBLE, true)
        }

        widgetGallery.push(batteryGroup);
        widgetGallery.forEach((e) => e.setProperty(hmUI.prop.VISIBLE, false));
        widgetGallery[0].setProperty(hmUI.prop.VISIBLE, true);

        batterySensor.addEventListener(hmSensor.event.CHANGE, setBattery)
        setBattery();

        const button = hmUI.createWidget(hmUI.widget.BUTTON, {
          press_src: "transparent.png",
          normal_src: "transparent.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
          x: 43,
          y: 380,
          w: 110,
          h: 76,
          click_func: function (b) {
            setCurrWidget();
          },
        })

        updateTime();

        hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
          resume_call: function () {
            updateTime();
            setBattery();
          },
        });
        
        timer.createTimer(0, 1000, () => updateTime());
        timer.createTimer(0, 10000, () => setCurrWidget(0));
      },
      onInit() {
        console.log("index page.js on init invoke");
        this.init_view();
      },

      onReady() {
        console.log("index page.js on ready invoke");
      },

      onShow() {
        console.log("index page.js on show invoke");
      },

      onHide() {
        console.log("index page.js on hide invoke");
      },

      onDestory() {
        console.log("index page.js on destory invoke");
      },
    });
  })();
} catch (e) {
  console.log(e);
}
