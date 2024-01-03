try {
    (() => {
        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        var h = new DeviceRuntimeCore.WidgetFactory(
            new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
            "drink"
        );
        ("use strict");

        const jstime = hmSensor.createSensor(hmSensor.id.TIME)
        const weather = hmSensor.createSensor(hmSensor.id.WEATHER)

        let timeHourTensFontArray, timeHourOnesFontArray, timeMinutesTensFontArray, timeMinutesOnesFontArray
        let timeHourTens, timeHourOnes, timeMinutesTens, timeMinutesOnes

        function setImgNumber(widget, fontArray, number) {
            widget.setProperty(hmUI.prop.SRC, fontArray[number]);
        }

        function updateTime() {
            setImgNumber(timeHourTens, timeHourTensFontArray, parseInt(jstime.format_hour / 10));
            setImgNumber(timeHourOnes, timeHourOnesFontArray, parseInt(jstime.format_hour % 10));
            setImgNumber(timeMinutesTens, timeMinutesTensFontArray, parseInt(jstime.minute / 10));
            setImgNumber(timeMinutesOnes, timeMinutesOnesFontArray, parseInt(jstime.minute % 10));
        }

        const logger = DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
        __$$module$$__.module = DeviceRuntimeCore.Page({
            init_view() {
                    hmUI.createWidget(hmUI.widget.IMG, {
                        x: 0,
                        y: -1,
                        src: 'images/0.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    });
                    hmUI.createWidget(hmUI.widget.IMG_TIME, {//数字时间
            hour_zero: 1,
            hour_startX: 25,
            hour_startY: 135,
            hour_array: ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"],
            hour_space: 0,
            hour_align: hmUI.align.RIGHT,
			minute_zero: 1,
            minute_startX: 25,
            minute_startY: 245,
            minute_array: ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"],
            minute_zero: 1,
            minute_space: 0,
            minute_align: hmUI.align.RIGHT,
			show_level: hmUI.show_level.ONLY_AOD
		   }),
                    timeHourTensFontArray = ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png']
                    timeHourOnesFontArray = ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png']
                    timeMinutesTensFontArray = ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png']
                    timeMinutesOnesFontArray = ['images/30.png', 'images/31.png', 'images/32.png', 'images/33.png', 'images/34.png', 'images/35.png', 'images/36.png', 'images/37.png', 'images/38.png', 'images/39.png']
                    timeHourTens = hmUI.createWidget(hmUI.widget.IMG, {
                        x: 43,
                        y: 163,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    timeHourOnes = hmUI.createWidget(hmUI.widget.IMG, {
                        x: 93,
                        y: 163,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    timeMinutesTens = hmUI.createWidget(hmUI.widget.IMG, {
                        x: 43,
                        y: 237,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    timeMinutesOnes = hmUI.createWidget(hmUI.widget.IMG, {
                        x: 93,
                        y: 237,
                        src: 'images/30.png',
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_DATE, {
                        month_startX: 22,
                        month_startY: 139,
                        month_en_array: ['images/18.png', 'images/19.png', 'images/20.png', 'images/21.png', 'images/22.png', 'images/23.png', 'images/24.png', 'images/25.png', 'images/26.png', 'images/27.png', 'images/28.png', 'images/29.png'],
                        month_is_character: true,
                        day_startX: 63,
                        day_startY: 138,
                        day_align: hmUI.align.CENTER_H,
                        day_space: 0,
                        day_zero: false,
                        day_en_array: ['images/50.png', 'images/51.png', 'images/52.png', 'images/53.png', 'images/54.png', 'images/55.png', 'images/56.png', 'images/57.png', 'images/58.png', 'images/59.png'],
                        day_sc_array: ['images/50.png', 'images/51.png', 'images/52.png', 'images/53.png', 'images/54.png', 'images/55.png', 'images/56.png', 'images/57.png', 'images/58.png', 'images/59.png'],
                        day_tc_array: ['images/50.png', 'images/51.png', 'images/52.png', 'images/53.png', 'images/54.png', 'images/55.png', 'images/56.png', 'images/57.png', 'images/58.png', 'images/59.png'],
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                        x: 101,
                        y: 302,
                        week_en: ['images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png'],
                        week_sc: undefined,
                        week_tc: undefined,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                        x: 88,
                        y: 6,
                        src: 'images/90.png',
                        type: hmUI.system_status.DISTURB,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                        x: 68,
                        y: 14,
                        src: 'images/89.png',
                        type: hmUI.system_status.LOCK,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                        x: 93,
                        y: 27,
                        src: 'images/88.png',
                        type: hmUI.system_status.DISCONNECT,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                        x: 108,
                        y: 14,
                        image_array: ['images/bat/0.png', 'images/bat/1.png', 'images/bat/2.png', 'images/bat/3.png', 'images/bat/4.png', 'images/bat/5.png', 'images/bat/6.png', 'images/bat/7.png', 'images/bat/8.png', 'images/bat/9.png', 'images/bat/10.png'],
                        image_length: 11,
                        type: hmUI.data_type.BATTERY,
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
