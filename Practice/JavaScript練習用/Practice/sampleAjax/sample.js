// Ajaxとは??
// Asynchronous JavaScript XML の略

// サーバー側と非同期通信を行い、受信結果をDOM経由でページに反映する仕組み
// get
const xhr_get_request1 = document.getElementById('xhr_get_request1');
const xhr_get_response1 = document.getElementById('xhr_get_response1');

const xhr_get_request2 = document.getElementById('xhr_get_request2');
const xhr_get_response2 = document.getElementById('xhr_get_response2');

// post
const xhr_post_request = document.getElementById('xhr_post_request');
const xhr_post_response = document.getElementById('xhr_post_response');

const get_code1 = document.getElementById('get_code1');
const get_code2 = document.getElementById('get_code2');

xhr_get_request1.addEventListener('click', function () {
    // 2秒後に実行
    setTimeout(xhr_request_method, 2 * 1000, 'http://ipo-cal.appspot.com/api/ipo/', xhr_get_response1, get_code1);
}, false);

xhr_get_request2.addEventListener('click', function () {
    // 5秒後に実行
    setTimeout(xhr_request_method, 5 * 1000, 'http://ipo-cal.appspot.com/api/ipo/', xhr_get_response2, get_code2);
});

// XMLHttpRequest
const xhr = new XMLHttpRequest();

// Ajax処理 get_request
function xhr_request_method(url, xhr_response, get_code) {
    xhr.open('GET', url + get_code.value);

    xhr.send(null);

    xhr_event(xhr, xhr_response, get_code.id);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                xhr_response.innerText += xhr.responseText + '\n';
            } else {
                xhr_response.innerText += 'failure!!\n';
            }
        }
    }
}

// Ajax処理 post_request
xhr_post_request.addEventListener('click', function () {
    xhr.open('POST', './sample.html');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send("text");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                xhr_post_response.innerText += xhr.responseText + '\n';
            } else {
                xhr_post_response.innerText += 'failure!!\n';
            }
        }
    }
});

// event
function xhr_event(_xhr, xhr_response, event_name) {
    // リクエスト送信をした時
    _xhr.addEventListener('loadstart', function () {
        xhr_response.innerText += `${event_name}:communication...\n`;
    });

    // データを送受信しているとき
    _xhr.addEventListener('progress', function () {
        xhr_response.innerText += `${event_name}:progress...\n`;
    });

    // タイムアウトした時
    _xhr.addEventListener('timeout', function () {
        xhr_response.innerText += `${event_name}:timeout...\n`;
    });

    // リクエストがキャンセルされた時
    _xhr.addEventListener('abort', function () {
        xhr_response.innerText += `${event_name}:abort...\n`;
    });

    // リクエストが成功した時
    _xhr.addEventListener('load', function () {
        xhr_response.innerText += `${event_name}:success...\n`;
    });

    // リクエストが失敗した時
    _xhr.addEventListener('error', function () {
        xhr_response.innerText += `${event_name}:error...\n`;
    });

    // リクエストが完了した時
    _xhr.addEventListener('loadend', function () {
        xhr_response.innerText += `${event_name}:completed...\n`;
    });
}