try {
    (() => {
        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        var h = new DeviceRuntimeCore.WidgetFactory(
            new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__),
            "drink"
        );
        ("use strict");
        console.log("----->>>current");
        console.log(__$$hmAppManager$$__.currentApp.pid);
        console.log(__$$hmAppManager$$__.currentApp.current);

        const jstime = hmSensor.createSensor(hmSensor.id.TIME)
        const weather = hmSensor.createSensor(hmSensor.id.WEATHER)

        let timeHourTensFontArray, timeHourOnesFontArray, timeMinutesTensFontArray, timeMinutesOnesFontArray
        let timeHourTens, timeHourOnes, timeMinutesTens, timeMinutesOnes
        let weatherWidget

        function setImgNumber(widget, fontArray, number) {
            widget.setProperty(hmUI.prop.SRC, fontArray[number]);
        }

        function updateTime() {
            setImgNumber(timeHourTens, timeHourTensFontArray, parseInt(jstime.format_hour / 10));
            setImgNumber(timeHourOnes, timeHourOnesFontArray, parseInt(jstime.format_hour % 10));
            setImgNumber(timeMinutesTens, timeMinutesTensFontArray, parseInt(jstime.minute / 10));
            setImgNumber(timeMinutesOnes, timeMinutesOnesFontArray, parseInt(jstime.minute % 10));
        }

        function updateWeather() {
            const forecastData = weather.getForecastWeather().forecastData
            if (forecastData.count) {
                const element = forecastData.data[0]
                weatherWidget.setProperty(hmUI.prop.TEXT, element.high + "u." + element.low + "u");
            }
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
                    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                        x: 49,
                        y: 51,
                        h_space: 0,
                        font_array: ['images/50.png', 'images/51.png', 'images/52.png', 'images/53.png', 'images/54.png', 'images/55.png', 'images/56.png', 'images/57.png', 'images/58.png', 'images/59.png'],
                        align_h: hmUI.align.LEFT,
                        type: hmUI.data_type.STEP,
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
                    hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                        x: 57,
                        y: 406,
                        image_array: ['images/61.png', 'images/62.png', 'images/63.png', 'images/64.png', 'images/65.png', 'images/66.png', 'images/67.png', 'images/68.png', 'images/69.png', 'images/70.png', 'images/71.png', 'images/72.png', 'images/73.png', 'images/74.png', 'images/75.png', 'images/76.png', 'images/77.png', 'images/78.png', 'images/79.png', 'images/80.png', 'images/81.png', 'images/82.png', 'images/83.png', 'images/84.png', 'images/85.png', 'images/86.png', 'images/65.png', 'images/61.png', 'images/66.png', 'images/64.png'],
                        image_length: 29,
                        type: hmUI.data_type.WEATHER,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                        x: 20,
                        y: 386,
                        h_space: 0,
                        font_array: ['images/40.png', 'images/41.png', 'images/42.png', 'images/43.png', 'images/44.png', 'images/45.png', 'images/46.png', 'images/47.png', 'images/48.png', 'images/49.png'],
                        align_h: hmUI.align.RIGHT,
                        type: hmUI.data_type.WEATHER_CURRENT,
                        unit_en: 'images/87.png',
                        unit_sc: 'images/87.png',
                        unit_tc: 'images/87.png',
                        negative_image: 'images/86.png',
                        w: 118,
                        show_level: hmUI.show_level.ONLY_NORMAL
                    })
                    hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                        x: 47,
                        y: 78,
                        image_array: ['images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png'],
                        image_length: 10,
                        type: hmUI.data_type.STEP,
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
