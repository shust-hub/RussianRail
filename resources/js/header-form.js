$(function() {
    enable_cb();
    $("#checkReturn").click(enable_cb);
  });
  
  function enable_cb() {
    if (this.checked) {
      $('#dateArrivalBar').removeClass('disabled');
    } else {
      $("#dateArrivalBar").addClass("disabled");
      $('#dateArrivalField').val("");
      $('#dateArrivalBar span').text("Return Date");
    }
  }



window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
var drawCalendar = function(opt){

    let city;
    city.getJSON( "/stations", {"term":"def"});
    console.log(city);

    var isMobile = false; //initiate as false
// device detection
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        isMobile = true;
    }
    this.month = "";
    this.city = [{"code":"2000000","text":"Moscow"},{"code":"2004000", "text":"St. Petersburg"},{"code":"2060001","text":"Nizhny Novgorod"}];

    this.format = "ddd, MMM Do";
    this.weekStart = 0;
    this.mobile = mobilecheck();
    this.minDate = moment(new Date()).add(1,"d").startOf('day');
    this.maxDate = moment(new Date()).add(1,"y").startOf('day');
    this.iconLeft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 15"><path fill="currentColor" fill-rule="evenodd" d="M13 10.2L3.4.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L13 10.2z"></path></svg>';
    this.iconBack = '<svg viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path fill="currentColor" d="M2.571 10.355l8.16 8.093a.904.904 0 0 1 0 1.286.922.922 0 0 1-1.296 0L.268 10.643a.904.904 0 0 1 0-1.286L9.435.267a.922.922 0 0 1 1.297 0 .904.904 0 0 1 0 1.285L2.57 9.645a.5.5 0 0 0-.003.707.5.5 0 0 0 .003.003z" id="chevron2a"></path></defs><use xlink:href="#chevron2a"></use></svg>';

    var sel = moment($('#dateDepartureField').val(), "YYYY-MM-DD");
    this.selected = sel.isValid()?sel.format():false;
    this.weekDayHeader =  function(){
        var row = $('<ul class="pickerCalendarRow">').appendTo(this.month);
        var wd = ['sun','mon','tue','wed','thu','fri','sat'];
        for (var d=0;d<=6;d++){
            var weekday = d+this.weekStart;
            if(weekday>6){
                weekday -=7;
            }
            var day = $('<li class="pickerWeekdaysWeekday">').text(wd[weekday]).appendTo(row);
            if(weekday===0||weekday===6){
                day.addClass("pickerWeekdaysWeekend");
            }
        }
    };
    this.drawMonthDays = function(m){
        var monthStart = m.weekday();
        var monthDays = m.daysInMonth();
        var monthCnt = 1;
        var weeks = Math.ceil( (monthDays + monthStart) / 7);
        for (var w=1; w<=weeks; w++){
            var row = $('<ul class="pickerCalendarRow">').appendTo(this.month);
            for (var d=0;d<=6;d++){
                var day = $('<li class="pickerCalendarDay pickerDefaultFont">').appendTo(row);
                if(d===0||d===6){
                    day.addClass("pickerWeekend");
                }
                if(m<_t.minDate||m>_t.maxDate){
                    day.addClass('pickerIsUnavailable');
                }
                if(monthStart){
                    monthStart --;
                } else {
                    var dateMonth = m.date();
                    if(monthCnt<=monthDays) {
                        var dayLabel = $('<div class="pickerDayLabel">').text(dateMonth).appendTo(day);
                        if(m<_t.minDate||m>_t.maxDate){
                            dayLabel.addClass('pickerUnavailableDay');
                        }
                        if(_t.selected&&m.format()===_t.selected){
                            dayLabel.addClass('pickerActiveDay');
                        }
                        day.data("picker",m.format());
                    }

                    if(dateMonth<monthDays){
                        m.add(1,'d');
                    }
                    monthCnt ++;
                }

            }
        }
    };
    this.drawDesktopCalendars = function(calendars){
        for (var c = 0; c <= 1; c++) {
            console.log(c);
            m.startOf('month');
            _t.month = $('<div class="desktopPickerCalendarContainer">').appendTo(calendars);
            var nav = $('<div class="pickerNavigationContainer">').appendTo(_t.month);
            if(c===0){
                var nlb = $('<div class="pickerNavigationNavIcon pickerNavigationIconLeft">').html(_t.iconLeft).appendTo(nav);
                if(_t.minDate>m){
                    nlb.addClass('pickerNavigationDisabled');
                }
            } else {
                $('<div class="pickerNavigationNavIcon pickerNavigationBlank"></div>').appendTo(nav);
            }

            $('<div class="pickerNavigationTitle">').text(m.local().format('MMMM YYYY')).appendTo(nav);
            if(c===1){
                var nrb = $('<div class="pickerNavigationNavIcon pickerNavigationIconRight">').html(_t.iconLeft).appendTo(nav);

                if(_t.maxDate<m){
                    nrb.addClass('pickerNavigationDisabled');
                }
            } else {
                $('<div class="pickerNavigationNavIcon pickerNavigationBlank"></div>').appendTo(nav);
            }


            _t.weekDayHeader();
            _t.drawMonthDays(m);

            m.add(1, 'M');
        }
    };
    this.close = function(){
        if(this.mobile) {
            _t.container.removeClass('mobileSidebarVisible');

        } else {
            _t.container.remove();
        }
    };
    this.showSwap = function(){
        if($('#stationDepartureField').val()&&($('#stationArrivalField').val())){
            $('#stationSwap').show();
        } else {
            $('#stationSwap').hide();
        }
    };
    this.nextStep = function(){
        if($('#stationDepartureField').val()==""){
            $('#stationDepartureBar').click();
            return false;
        } else if($('#stationArrivalField').val()==""){
            $('#stationArrivalBar').click();
            return false;
        } else if($('#dateDepartureField').val()==""){
            $('#dateDepartureBar').click();
            return false;
        } else if(($('#checkReturn').prop("checked") == true) && ($('#dateArrivalField').val()=="")){ 
            $('#dateArrivalBar').click();
            return false;
        } else if($('#passengersField').val()=="") {
            $('#passengersBar').click();
            return false;
        } else {
            return true;
        }
    };
    var _t = this;

    var m = moment(new Date());
    m.startOf('month');


    if(this.mobile) {
        var div = $('#mobileContainer');

        var main = $('<div class="mobileSidebarContainer" id="mobileDateDeparture">').appendTo(div)
            .on('click','.mobileSidebarBackButton',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.close();
            });
        $('<div class="mobileSidebarHeader">\n' +
            '        <div class="mobileSidebarBackButton mobileSidebarButton">\n' +
            _t.iconBack +
            '        </div>\n' +
            '        <div class="mobileSidebarTitleLabel"><span>Departure date</span></div>\n' +
            '        <div class="mobileSidebarButton"></div>\n' +
            '    </div>').appendTo(main);
        var c1 = $('<div class="mobileSidebarContent">').appendTo(main);
        var c2 = $('<div class="mobilePickerContainer">').appendTo(c1);
        var calendars = $('<div class="mobilePickerPanel">').appendTo(c2);
        _t.container = main;
        

        for (var c = 0; c <= 11; c++) {
            m.startOf('month');
            var month = $('<div class="mobilePickerCalendarContainer">').appendTo(calendars);
            this.month = month;
            $('<div class="mobilePickerCalendarMonth">').text(m.local().format('MMMM YYYY')).appendTo(month);
            this.weekDayHeader();
            this.drawMonthDays(m);

            m.add(1, 'M');
        }

        $('#dateDepartureBar').click(function(){
            $('#mobileDateDeparture').addClass('mobileSidebarVisible');
            if(_t.selected){

            }
        });

        calendars
            .on('click', '.pickerCalendarDay',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.container.find('.pickerDayLabel').removeClass('pickerActiveDay');
                $(this).find('.pickerDayLabel').addClass('pickerActiveDay');
                $('#dateDepartureBar').addClass("barPicked");
                $('#dateDepartureBar span').text(moment($(this).data("picker")).format(_t.format));
                var insert = moment($(this).data("picker")).format('YYYY-MM-DD');
                $('#dateDepartureField').val(insert);
                _t.close();

            })
        ;

        ///////////////////////////////////////////////////////////
        main = $('<div class="mobileSidebarContainer" id="mobileDateArrival">').appendTo(div)
            .on('click','.mobileSidebarBackButton',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.close();
            });
        $('<div class="mobileSidebarHeader">\n' +
            '        <div class="mobileSidebarBackButton mobileSidebarButton">\n' +
            _t.iconBack +
            '        </div>\n' +
            '        <div class="mobileSidebarTitleLabel"><span>Arrival date</span></div>\n' +
            '        <div class="mobileSidebarButton"></div>\n' +
            '    </div>').appendTo(main);
        var k1 = $('<div class="mobileSidebarContent">').appendTo(main);
        var k2 = $('<div class="mobilePickerContainer">').appendTo(k1);
        calendars = $('<div class="mobilePickerPanel">').appendTo(k2);
        _t.container = main;
        
        for (var c = 0; c <= 11; c++) {
            m.startOf("month");
            month = $('<div class="mobilePickerCalendarContainer">').appendTo(calendars);
            this.month = month;
            $('<div class="mobilePickerCalendarMonth">').text(m.local().format('MMMM YYYY')).appendTo(month);
            this.weekDayHeader(m);
            this.drawMonthDays(m);
            m.add(1, 'M');
        }

        $('#dateArrivalBar').click(function(){
            if($('#checkReturn').prop("checked") == true){
                $('#mobileDateArrival').addClass('mobileSidebarVisible');
                if(_t.selected){

                }
            }
        });

        calendars
            .on('click', '.pickerCalendarDay',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.container.find('.pickerDayLabel').removeClass('pickerActiveDay');
                $(this).find('.pickerDayLabel').addClass('pickerActiveDay');
                $('#dateArrivalBar').addClass("barPicked");
                $('#dateArrivalBar span').text(moment($(this).data("picker")).format(_t.format));
                var insert = moment($(this).data("picker")).format('YYYY-MM-DD');
                $('#dateArrivalField').val(insert);
                _t.close();

            })
        ;
        ///////////////////////////////////////////////////////////


        main = $('<div class="mobileSidebarContainer" id="mobileStationDeparture">').appendTo(div)
            .on('click','.mobileSidebarBackButton',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.close();
            });
        $('<div class="mobileSidebarHeader">\n' +
            '        <div class="mobileSidebarBackButton mobileSidebarButton">\n' +
            _t.iconBack +
            '        </div>\n' +
            '        <div class="mobileSidebarTitleLabel"><span>Departure from</span></div>\n' +
            '        <div class="mobileSidebarButton"></div>\n' +
            '    </div>').appendTo(main);
        var c1 = $('<div class="mobileSidebarContent">').appendTo(main);
        var c2 = $('<div class="mobilePickerContainer">').appendTo(c1);
        calendars = $('<div class="mobilePickerPanel mobilePickerStations">').appendTo(c2);
        var ul = $('<ul>').appendTo(calendars);
        for (var i = 0; i < _t.city.length; i++) {
            $("<li class='pickerDefaultFont'>").html('<div class="stationPicker" data-station="' + _t.city[i].code +'"><i class="icon-md-pin"></i>' + _t.city[i].text + '</div>').appendTo(ul);
        }
        ul.find('.stationPicker').click(function(){
            _t.container = $(this).parents('.mobileSidebarContainer');
            var code = $(this).data("station");
            var station = $(this).text();
            $('#stationDepartureBar span').text(station);
            $('#stationDepartureBar').addClass("barPicked");
            $('#stationDepartureField').val(code);
            console.log(code, $('#stationDepartureField').val());

            if($('#stationArrivalField').val()==code){
                $('#stationArrivalField').val("");
                $('#stationArrivalBar span').text("To: City");
                $('#stationArrivalBar').removeClass("barPicked");
            }
            _t.close();
        });

        $('#stationDepartureBar').click(function(){
            $('#mobileStationDeparture').addClass('mobileSidebarVisible');
            if(_t.selected){

            }
        });


        main = $('<div class="mobileSidebarContainer" id="mobileStationArrival">').appendTo(div)
            .on('click','.mobileSidebarBackButton',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.close();
            });
        $('<div class="mobileSidebarHeader">\n' +
            '        <div class="mobileSidebarBackButton mobileSidebarButton">\n' +
            _t.iconBack +
            '        </div>\n' +
            '        <div class="mobileSidebarTitleLabel"><span>Arrival to</span></div>\n' +
            '        <div class="mobileSidebarButton"></div>\n' +
            '    </div>').appendTo(main);
        var c1 = $('<div class="mobileSidebarContent">').appendTo(main);
        var c2 = $('<div class="mobilePickerContainer">').appendTo(c1);
        calendars = $('<div class="mobilePickerPanel mobilePickerStations">').appendTo(c2);
        var ul = $('<ul>').appendTo(calendars);
        for (var i = 0; i < _t.city.length; i++) {
            $("<li class='pickerDefaultFont'>").html('<div class="stationPicker" data-station="' + _t.city[i].code +'"><i class="icon-md-pin"></i>' + _t.city[i].text + '</div>').appendTo(ul);
        }
        ul.find('.stationPicker').click(function(){
            _t.container = $(this).parents('.mobileSidebarContainer');
            var code = $(this).data("station");
            var station = $(this).text();
            $('#stationArrivalBar span').text(station);
            $('#stationArrivalBar').addClass("barPicked");
            $('#stationArrivalField').val(code);
            console.log($('#stationDepartureField').val(), code);
            if($('#stationDepartureField').val()==code){
                $('#stationDepartureField').val("");
                $('#stationDepartureBar span').text("To: City");
                $('#stationDepartureBar').removeClass("barPicked");
            }
            _t.close();
        });

        $('#stationArrivalBar').click(function(){
            $('#mobileStationArrival').addClass('mobileSidebarVisible');
            if(_t.selected){

            }
        });


        main = $('<div class="mobileSidebarContainer" id="mobilePassengers">').appendTo(div)
            .on('click','.mobileSidebarBackButton',function(){
                _t.container = $(this).parents('.mobileSidebarContainer');
                _t.close();
            });
        $('<div class="mobileSidebarHeader">\n' +
            '        <div class="mobileSidebarBackButton mobileSidebarButton">\n' +
            _t.iconBack +
            '        </div>\n' +
            '        <div class="mobileSidebarTitleLabel"><span>Passengers</span></div>\n' +
            '        <div class="mobileSidebarButton"></div>\n' +
            '    </div>').appendTo(main);
        var c1 = $('<div class="mobileSidebarContent">').appendTo(main);
        var c2 = $('<div class="mobilePickerContainer">').appendTo(c1);
        calendars = $('<div class="mobilePickerPanel mobilePickerPassengers">').appendTo(c2);
        var psgrs = $('#passengersField').val().split(':');
        var ul = $('<div>').appendTo(calendars);
        var pslist = ["Adults", "Children 5-9 years","Children 0-4 years<small>without seat</small>"];
        var psclass = ['adult','child','infant'];
        for (var i = 0; i <=2; i++) {


            $('<div class="passengers-line">' +
                '<button class="dec btn-plus-minus" type="button">-</button>'+
                '<span  class="passengers-num ' + psclass[i] + '">'+
                (psgrs[i]&&psgrs[i]!=="0"?psgrs[i]:"")+
                '</span>'+
                '<button class="inc btn-plus-minus" type="button">+</button>'+
                '<span class="passengers-type">' + pslist[i] + '</span>'+
                +'</div>').appendTo(ul);
        }
        $('<div class="passengers-line passengers-message">').appendTo(ul);
        var sub = $('<button class="btn  btn-solid">').css({
            'display': 'block',
            'width': '100%',
            'margin': '0',
            'border-radius': '0',
            'position': 'absolute',
            'bottom':0,
            'left':0,
            'height':'80px'
        }).text('Search tickets').appendTo(ul);
        sub.click(function(){
            $('#mobilePassengers').removeClass('mobileSidebarVisible');

            $('#searchButton').click();
        });



        ul.find('.btn-plus-minus').click(function(){
            var field = $(this).parents(".passengers-line").find('.passengers-num');
            var num = field.text();
            if(!num){
                num = 0;
            } else {
                num = num*1;
            }
            var all = 0;
            $('.passengers-num').each(function(){
                var num = $(this).text();
                if(!num){
                    num = 0;
                }
                all += num*1;
            });
            var errorMsg = "";
            if($(this).hasClass('inc')){

                if(all===4){
                    errorMsg = 'You can book maximum 4 tickets in one order. If you need more tickets, please make several orders';
                } else{
                    if(!field.hasClass('adult')&&$('.passengers-num')[0].innerHTML===""){
                        errorMsg = 'Child can only travel accompanied by an adult';
                    } else if(field.hasClass('infant')&&$('.passengers-num')[0].innerHTML===$('.passengers-num')[2].innerHTML){
                        errorMsg = 'One adult can be accompanied by only one child without seat';
                    }
                    else {

                        num++;
                        all++;
                    }
                }
            } else {
                if(num){
                    num--;
                    all --;
                    if(field.hasClass('adult')){
                        if(num===0){
                            all = 0;
                            $('.passengers-num').text("");
                        } else if($('.passengers-num')[0].innerHTML===$('.passengers-num')[2].innerHTML){
                            $('.passengers-num')[2].innerHTML = $('.passengers-num')[2].innerHTML-1;
                            all --;
                        }
                    }

                }
            }
            if(errorMsg){
                $('.passengers-message').text(errorMsg).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            }
            field.text(num?num:"");
            if(all){
                $('#passengersBar span').text(all);
                $('#passengersBar').addClass("barPicked");
                var nums = [];
                $('.passengers-num').each(function(){
                    var num = $(this).text();
                    if(!num){
                        num = 0;
                    }
                    nums.push(num*1);

                });
                $('#passengersField').val(nums.join(':'));
            } else {
                $('#passengersField').val("");
                $('#passengersBar span').text("Passengers");
                $('#passengersBar').removeClass("barPicked");
            }


        });

        $('#passengersBar').click(function(){
            $('#mobilePassengers').addClass('mobileSidebarVisible');
            if(_t.selected){

            }
        });

    }
    else {
        $('#dateDepartureBar').click(function() {
            var div = $(this).next();

            var calendars = $('<div class="desktopPickerCalendars desktopPickerPanel">').appendTo(div);
            if (_t.selected) {
                m = moment(_t.selected);
            } else {
                m = moment(new Date());
            }
            m.startOf('month');

            _t.container = calendars;
            calendars.data('start', m.format());


            _t.drawDesktopCalendars(calendars);

            calendars
                .on('click','.pickerNavigationIconRight', function(){
                    m = moment(calendars.data('start')).add(1, 'M');
                    calendars.data('start',m.format());
                    calendars.empty();
                    _t.drawDesktopCalendars(calendars);
                })
                .on('click','.pickerNavigationIconLeft', function(){
                    m = moment(calendars.data('start')).subtract(1, 'M');
                    calendars.data('start',m.format());
                    calendars.empty();
                    _t.drawDesktopCalendars(calendars);
                })
                .on('click', '.pickerCalendarDay',function(){
                    var pickerMoment = moment($(this).data("picker"));
                    _t.selected = pickerMoment.format();
                    $('#dateDepartureBar span').text(pickerMoment.format(_t.format));
                    $('#dateDepartureBar').addClass("barPicked");
                    var insert = pickerMoment.format('YYYY-MM-DD');
                    $('#dateDepartureField').val(insert);
                    _t.close();
                    _t.nextStep();

                });
        });
////////////////////////////////////////////////////////////////////////////
        $('#dateArrivalBar').click(function() {
            if($('#checkReturn').prop("checked") == true){ 
            div = $(this).next();

            calendars = $('<div class="desktopPickerCalendars desktopPickerPanel">').appendTo(div);
            if (_t.selected) {
                m = moment(_t.selected);
            } else {
                m = moment(new Date());
            }
            m.startOf('month');

            _t.container = calendars;
            calendars.data('start', m.format());


            _t.drawDesktopCalendars(calendars);

            calendars
                .on('click','.pickerNavigationIconRight', function(){
                    m = moment(calendars.data('start')).add(1, 'M');
                    calendars.data('start',m.format());
                    calendars.empty();
                    _t.drawDesktopCalendars(calendars);
                })
                .on('click','.pickerNavigationIconLeft', function(){
                    m = moment(calendars.data('start')).subtract(1, 'M');
                    calendars.data('start',m.format());
                    calendars.empty();
                    _t.drawDesktopCalendars(calendars);
                })
                .on('click', '.pickerCalendarDay',function(){
                    pickerMoment = moment($(this).data("picker"));
                    _t.selected = pickerMoment.format();
                    $('#dateArrivalBar span').text(pickerMoment.format(_t.format));
                    $('#dateArrivalBar').addClass("barPicked");
                    insert = pickerMoment.format('YYYY-MM-DD');
                    $('#dateArrivalField').val(insert);
                    _t.close();
                    _t.nextStep();
                });
            }
        });
//////////////////////////////////////////////////////////////////////////
        $('#stationDepartureBar').click(function() {
            var div = $(this).next();
            var calendars = $('<div class="desktopPickerPanel desktopPickerStations">').appendTo(div);
            _t.container = calendars;
            var ul = $('<ul>').appendTo(calendars);
            for (var i = 0; i < _t.city.length; i++) {
                $("<li class='pickerDefaultFont'>").html('<div class="stationPicker" data-station="' + _t.city[i].code +'"><i class="icon-md-pin"></i>' + _t.city[i].text + '</div>').appendTo(ul);
            }
            ul.find('.stationPicker').click(function(){
                var code = $(this).data("station");
                var station = $(this).text();
                $('#stationDepartureBar span').text(station);
                $('#stationDepartureBar').addClass("barPicked");
                $('#stationDepartureField').val(code);
                console.log(code, $('#stationDepartureField').val());

                if($('#stationArrivalField').val()==code){
                    $('#stationArrivalField').val("");
                    $('#stationArrivalBar span').text("To: City");
                    $('#stationArrivalBar').removeClass("barPicked");
                }
                _t.close();
                _t.nextStep();
                _t.showSwap();
            });
        });
        $('#stationArrivalBar').click(function() {
            var div = $(this).next();
            var calendars = $('<div class="desktopPickerPanel desktopPickerStations">').appendTo(div);
            _t.container = calendars;
            var ul = $('<ul>').appendTo(calendars);
            for (var i = 0; i < _t.city.length; i++) {
                $("<li class='pickerDefaultFont'>").html('<div class="stationPicker" data-station="' + _t.city[i].code +'"><i class="icon-md-pin"></i>' + _t.city[i].text + '</div>').appendTo(ul);
            }
            ul.find('.stationPicker').click(function(){
                var code = $(this).data("station");
                var station = $(this).text();
                $('#stationArrivalBar span').text(station);
                $('#stationArrivalBar').addClass("barPicked");
                $('#stationArrivalField').val(code);
                console.log($('#stationDepartureField').val(), code);
                if($('#stationDepartureField').val()==code){
                    $('#stationDepartureField').val("");
                    $('#stationDepartureBar span').text("To: City");
                    $('#stationDepartureBar').removeClass("barPicked");
                }
                _t.close();
                _t.nextStep();
                _t.showSwap();
            });
        });
        $('#passengersBar').click(function() {
            var div = $(this).next();
            var calendars = $('<div class="desktopPickerPanel desktopPickerPassengers">').appendTo(div);
            _t.container = calendars;
            var psgrs = $('#passengersField').val().split(':');
            var ul = $('<div>').appendTo(calendars);
            var pslist = ["Adults", "Children 5-9 years","Children 0-4 years<small>without seat</small>"];
            var psclass = ['adult','child','infant'];
            for (var i = 0; i <=2; i++) {


                $('<div class="passengers-line">' +
                    '<button class="dec btn-plus-minus" type="button">-</button>'+
                    '<span  class="passengers-num ' + psclass[i] + '">'+
                    (psgrs[i]&&psgrs[i]!=="0"?psgrs[i]:"")+
                    '</span>'+
                    '<button class="inc btn-plus-minus" type="button">+</button>'+
                    '<span class="passengers-type">' + pslist[i] + '</span>'+
                    +'</div>').appendTo(ul);
            }
            $('<div class="passengers-line passengers-message">').appendTo(ul);

            ul.find('.btn-plus-minus').click(function(){
                var field = $(this).parents(".passengers-line").find('.passengers-num');
                var num = field.text();
                if(!num){
                    num = 0;
                } else {
                    num = num*1;
                }
                var all = 0;
                $('.passengers-num').each(function(){
                    var num = $(this).text();
                    if(!num){
                        num = 0;
                    }
                    all += num*1;
                });
                var errorMsg = "";
                if($(this).hasClass('inc')){

                    if(all===4){
                        errorMsg = 'You can book maximum 4 tickets in one order. If you need more tickets, please make several orders';
                    } else{
                        if(!field.hasClass('adult')&&$('.passengers-num')[0].innerHTML===""){
                            errorMsg = 'Child can only travel accompanied by an adult';
                        } else if(field.hasClass('infant')&&$('.passengers-num')[0].innerHTML===$('.passengers-num')[2].innerHTML){
                            errorMsg = 'One adult can be accompanied by only one child without seat';
                        }
                        else {

                            num++;
                            all++;
                        }
                    }
                } else {
                    if(num){
                        num--;
                        all --;
                        if(field.hasClass('adult')){
                            if(num===0){
                                all = 0;
                                $('.passengers-num').text("");
                            } else if($('.passengers-num')[0].innerHTML===$('.passengers-num')[2].innerHTML){
                                $('.passengers-num')[2].innerHTML = $('.passengers-num')[2].innerHTML-1;
                                all --;
                            }
                        }

                    }
                }
                if(errorMsg){
                    $('.passengers-message').text(errorMsg).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                }
                field.text(num?num:"");
                if(all){
                    $('#passengersBar span').text(all);
                    $('#passengersBar').addClass("barPicked");
                    var nums = [];
                    $('.passengers-num').each(function(){
                        var num = $(this).text();
                        if(!num){
                            num = 0;
                        }
                        nums.push(num*1);

                    });
                    $('#passengersField').val(nums.join(':'));
                } else {
                    $('#passengersField').val("");
                    $('#passengersBar span').text("Passengers");
                    $('#passengersBar').removeClass("barPicked");
                }


            });

        });
        $(document).mouseup(function (e) {
            if (_t.container && !_t.container.is(e.target) // if the target of the click isn't the container...
                && _t.container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                _t.container.remove();
            }
        });
    }
    $('#stationSwap').click(function(){
        var depT = $('#stationDepartureBar span').text();
        var depF =  $('#stationDepartureField').val();
        $('#stationDepartureBar span').text($('#stationArrivalBar span').text());
        $('#stationDepartureField').val($('#stationArrivalField').val());
        $('#stationArrivalBar span').text(depT);
        $('#stationArrivalField').val(depF);
    });

    _t.showSwap();

    $('#searchButton').click(function(e){
        e.preventDefault();
        if(_t.nextStep()){
            $('#searchTicket').submit();
        }

    });

};

drawCalendar();