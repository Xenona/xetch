var SCREEN_W = 192;
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

        const jstime = hmSensor.createSensor(hmSensor.id.TIME)

        __$$module$$__.module = DeviceRuntimeCore.Page({
            init_view() {

                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: -1,
                    src: 'images/0.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });

                var normalDigitsFont = ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png']
                var aodDigitsFont = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"];
                var timeDigits = [];
                    var y = TIME_Y;
                    for (let i = 0; i < 3; i++) {
                    timeDigits.push(hmUI.createWidget(hmUI.widget.IMG, {
                        x: TIME_X_L,
                        y: y,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    }));
                    timeDigits.push(hmUI.createWidget(hmUI.widget.IMG, {
                        x: TIME_X_R, 
                        y: y,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    }));
                    y += TIME_DIG_H + TIME_GAP_Y;
                }

                function updateTime() {
                    setImgNumber(timeDigits[0], parseInt(jstime.format_hour / 10));
                    setImgNumber(timeDigits[1], parseInt(jstime.format_hour % 10));
                    setImgNumber(timeDigits[2], parseInt(jstime.minute / 10));
                    setImgNumber(timeDigits[3], parseInt(jstime.minute % 10));
                    setImgNumber(timeDigits[4], parseInt(jstime.second / 10));
                    setImgNumber(timeDigits[5], parseInt(jstime.second % 10));
                }
                
                function setImgNumber(widget, number) {
                    widget.setProperty(hmUI.prop.SRC, normalDigitsFont[number]);
                }
        

                    hmUI.createWidget(hmUI.widget.IMG_TIME, {
                        hour_zero: 1,
                        hour_startX: 25,
                        hour_startY: 135,
                        hour_array: aodDigitsFont,
                        hour_space: 0,
                        hour_align: hmUI.align.RIGHT,

                        minute_zero: 1,
                        minute_startX: 25,
                        minute_startY: 245,
                        minute_array: aodDigitsFont,
                        minute_space: 0,
                        minute_align: hmUI.align.RIGHT,

                        second_zero: 1,
                        second_startX: 25,
                        second_startY: 355,
                        second_array: aodDigitsFont,
                        second_space: 0,
                        second_align: hmUI.align.RIGHT,

                        show_level: hmUI.show_level.ONLY_AOD
                    });

                    hmUI.createWidget(hmUI.widget.IMG_DATE, {
                        month_startX: 43,
                        month_startY: 378,
                        month_en_array: ['images/18.png', 'images/19.png', 'images/20.png', 'images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png', 'images/28.png', 'images/29.png'],
                        month_is_character: true,

                        day_startX: 114,
                        day_startY: 379,
                        day_align: hmUI.align.CENTER_H,
                        day_space: 0,
                        day_zero: false,
                        day_en_array: ['images/50.png', 'images/51.png', 'images/52.png', 'images/53.png', 'images/54.png', 'images/55.png', 'images/56.png', 'images/57.png', 'images/58.png', 'images/59.png'],
                        
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })

                    hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                        x: 64,
                        y: 416,
                        week_en: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png'],
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })

                    hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                        x: 93,
                        y: 465,
                        src: 'images/88.png',
                        type: hmUI.system_status.DISCONNECT,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
 
                    updateTime();
                    hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                        resume_call: (function() {
                            updateTime();
                        })
                    })

                    timer.createTimer(0, 1000, (function(option) {
                        updateTime();
                    }))


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
        /*
         * end js
         */
    })();
} catch (e) {
    console.log(e);
}
