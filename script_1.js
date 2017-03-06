// JavaScript source code


var obj = document;

//var timerId = setInterval(function () { md5() }, 7135);

//setInterval(function () { clearInterval(timerId) }, 7135);

var timerId = setInterval(function () { f4() }, 40135);
var timerId1 = setInterval(function () { f5() }, 11135);
//Web-service
function parseXML(str) {
    parser = new DOMParser();
    xml = parser.parseFromString(str, "text/xml");

    return xml;
}


function md5(h) {
    try {

                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", "https://dakota.bias.local/file_1.php?mode=1&str=" + h, false);
                xmlhttp.send();
                return xmlhttp.responseText;
            }
            catch (e) {
                console.log(e);
            }
}

function f4(param_1, param) {
    try {

        if (location.host == "www.bias.ru") {
            var pk = "CBABPCHLEBABABABA";
            var sk = "130FE35E5CCF69620E441ABB";
            var token = "tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95";
            var sesKey = "f6e9d65a7d6b87613ec7892910e13723";
            var id = f6(115, '<msg>skipped</msg>');
            var h = md5("application_key=CBABPCHLEBABABABAformat=jsonmethod=url.getInfourl=" + id + "130FE35E5CCF69620E441ABB");
            //session_key=tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95url=" + id + "f6e9d65a7d6b87613ec7892910e13723");
            var z = 'https://api.ok.ru/fb.do?application_key=' + pk + '&format=json&method=url.getInfo&url=' + id + '&sig=' + h;
           // https://api.ok.ru/fb.do?application_key=CBABPCHLEBABABABA&format=json&method=url.getInfo&session_key=tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95&url=https%3A%2F%2Fok.ru%2Foksanapochepa&sig=4758122f0bd1a3e76d87947494d2a804&session_key=tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", z, false);


            xmlhttp.send();

            var json = xmlhttp.responseText;

            var d = JSON.parse(json);

            var a = '<msg>';
            a += '<person>';
            a += '<link>' + id + '</link>';
            a += '<objectId>' + d.objectId + '</objectId>';
            a += '</person>';
            a += '</msg>';

            f6(116, a);
            console.log(a);
        }
    }

    catch (e) {
        console.log(e);
    }


}


function f5(param_1, param) {
    try {

        if (location.host == "www.bias.ru") {
            var pk = "CBABPCHLEBABABABA";
            var sk = "130FE35E5CCF69620E441ABB";
            var token = "tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95";
            var sesKey = "f6e9d65a7d6b87613ec7892910e13723";
            var id = f6(111, '<msg>skipped</msg>');
            var h = md5("application_key=CBABPCHLEBABABABAfields=age,birthday,email,location,first_name,last_name,last_online,pic190x190method=users.getInfosession_key=tkn1sljaN6wQ5HMS5P30vvMvwQjsWP19YRuua26vXItL1FMI7X7JkhJMHu1uyHMCw05V95uids=" + id + "f6e9d65a7d6b87613ec7892910e13723");
            var z = 'https://api.ok.ru/fb.do?application_key=' + pk + '&sig=' + h + '&session_key=' + token + '&uids=' + id + '&fields=age,birthday,email,location,first_name,last_name,last_online,pic190x190&method=users.getInfo';

            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", z, false);


            xmlhttp.send();

            var json = xmlhttp.responseText.replace('[', '').replace(']', '').replace('[', '').replace(']', '').replace('[', '').replace(']', '').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('<','').replace('<','').replace('>','').replace('>','');
            //console.log(json);
            if (json === ''){
                var a = '<msg>';
                 a += '<uid>' + id + '</uid>';
        a += '<first_name>Страница</first_name>';
        a += '<last_name>Отсутствует</last_name>';
        a += '</msg>';
          f6(1, a);
        console.log(a);
      
            }
            else
            {
            var d = JSON.parse(json);
            var a = '<msg>';
            a += '<uid>' + d.uid + '</uid>';
            a += '<birthday>' + d.birthday + '</birthday>';
            a += '<age>' + d.age + '</age>';
            a += '<city>' + d.location.city.replace('<','') + '</city>';
            a += '<countryName>' + d.location.countryName + '</countryName>';
            a += '<pic190x190>' + d.pic190x190.replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$').replace('&', '$') + '</pic190x190>';
            a += '<first_name>' + d.first_name.replace('&', '$').replace('&', '$') + '</first_name>';
            a += '<last_name>' + d.last_name.replace('&', '$').replace('&', '$') + '</last_name>';
            a += '<last_online>' + d.last_online + '</last_online>';
            //a += '<email>' + d.email + '</email>';
            a += '</msg>';

            f6(1, a);
            //console.log(a);
            }
        }
    }
    
    catch (e) {
        console.log(e);

    }
}

function f6(param_1,param) {
    try {

        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://dakota.bias.local/Nord.asmx?op=WebMethod_10", false);

        var question =
                 '<?xml version="1.0" encoding="utf-8"?>' +
                 '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
                 '<soap12:Body>' +
                 '<WebMethod_10 xmlns="http://tempuri.org/">' +
                 '<param>' + param + '</param>' +
                 '<param_1>' + param_1 + '</param_1>' +
                 '<token>E859AA0BA2A048E1A4F96B1EC2833F4A</token>' +
                 '</WebMethod_10>' +
                 '</soap12:Body>' +
                 '</soap12:Envelope>'

        xmlhttp.setRequestHeader('Content-Type', 'application/soap+xml; charset=utf-8');
        xmlhttp.setRequestHeader('SOAPAction', 'http://tempuri.org/GetSimpleType");');
        xmlhttp.send(question);


        var answer = parseXML(xmlhttp.responseText).getElementsByTagName('WebMethod_10Result')[0].childNodes[0].nodeValue;

        console.log(answer);
        return answer;
    }
    catch (e) {
        console.log(e);
    }
}