
/* RYVOK Matrix of Destiny — single-file embed (injects CSS into <head>) */
(function(){
  var css = `
:root{
  --mx-bg:#fff; --mx-ink:#1c2537; --mx-ink-soft:#5b6475;
  --mx-accent:#FFC700; --mx-accent-2:#3B4763; --mx-border:#e8ecf3;
  --mx-ok:#18c3cb; --mx-bad:#ff6b6b;
  --mx-radius:14px; --mx-shadow:0 10px 30px rgba(0,0,0,.06);
  --mx-font: Poster, Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans";
  --mx-font-body: Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans";
}
.mx-app{display:flex;justify-content:center;padding:24px}
.mx-card{max-width:1100px;width:100%;background:var(--mx-bg);color:var(--mx-ink);
  box-shadow:var(--mx-shadow);border:1px solid var(--mx-border);border-radius:var(--mx-radius);padding:24px}
.mx-title{margin:0;font:800 28px/1.2 var(--mx-font);letter-spacing:.5px;color:var(--mx-accent-2)}
.mx-sub{margin:6px 0 0;color:var(--mx-ink-soft);font:500 14px/1.5 var(--mx-font-body)}
.mx-form{margin:18px 0 8px}
.mx-label{display:block;margin:0 0 8px;font:700 12px/1 var(--mx-font-body);color:var(--mx-ink-soft);text-transform:uppercase;letter-spacing:.5px}
.mx-inputrow{display:flex;gap:10px;flex-wrap:wrap}
.mx-input{flex:1 1 260px;min-width:220px;padding:12px 14px;border:1.5px solid var(--mx-border);
  border-radius:12px;font:700 16px/1.2 var(--mx-font-body);outline:none}
.mx-input:focus{border-color:var(--mx-accent);box-shadow:0 0 0 4px rgba(255,199,0,.15)}
.mx-btn{padding:12px 16px;border:0;border-radius:12px;background:var(--mx-accent);
  font:800 14px/1 var(--mx-font-body);cursor:pointer}
.mx-btn:hover{filter:brightness(0.98)}
.mx-helpers{display:flex;gap:10px;align-items:center;margin:8px 0;flex-wrap:wrap}
.mx-link{background:transparent;border:0;color:var(--mx-accent-2);font:800 13px/1 var(--mx-font-body);
  cursor:pointer;padding:8px 10px;border-radius:10px}
.mx-link:hover{background:#f6f8fb}
.mx-note{color:var(--mx-ink-soft);font:600 12px/1 var(--mx-font-body)}
.mx-gridwrap{display:grid;grid-template-columns:1fr 320px;gap:20px;margin-top:16px}
@media (max-width:980px){.mx-gridwrap{grid-template-columns:1fr}}
.mx-grid{display:grid;grid-template-columns:repeat(3,minmax(90px,1fr));gap:14px}
.mx-cell{border:1.5px solid var(--mx-border);border-radius:16px;padding:14px;min-height:96px;display:flex;flex-direction:column;justify-content:space-between;background:#fff}
.mx-cellhead{display:flex;justify-content:space-between;align-items:center}
.mx-digit{font:900 18px/1 var(--mx-font);color:var(--mx-accent-2)}
.mx-pos{font:700 12px/1 var(--mx-font-body);color:var(--mx-ink-soft)}
.mx-value{margin-top:8px;font:900 20px/1.1 var(--mx-font);letter-spacing:1px;word-break:break-word}
.mx-empty{color:#b8bfcc}
.mx-side{border:1.5px solid var(--mx-border);border-radius:16px;padding:16px;background:#fff}
.mx-blocktitle{margin:0 0 8px;font:900 16px/1 var(--mx-font);color:var(--mx-accent-2)}
.mx-stats,.mx-lines,.mx-brief{list-style:none;margin:0;padding:0;display:grid;gap:8px}
.mx-stat,.mx-line{display:flex;justify-content:space-between;align-items:center;border:1.5px solid var(--mx-border);border-radius:12px;padding:10px 12px}
.mx-k{font:700 13px/1.2 var(--mx-font-body);color:var(--mx-ink-soft)}
.mx-v{font:900 14px/1 var(--mx-font-body)}
.mx-meter{height:6px;background:#f2f5fa;border-radius:999px;overflow:hidden;flex:1;margin-left:10px}
.mx-meter > i{display:block;height:100%;background:var(--mx-accent);width:0%}
.mx-badge{display:inline-block;padding:4px 8px;border-radius:999px;background:rgba(24,195,203,.12);color:#0b6166;font:800 11px/1 var(--mx-font-body);text-transform:uppercase;letter-spacing:.5px}
.mx-brief li{border:1.5px solid var(--mx-border);border-radius:12px;padding:10px 12px}
.mx-brief strong{font-weight:900;color:var(--mx-accent-2)}
.mx-footer{margin-top:18px;color:var(--mx-ink-soft);font:600 12px/1.5 var(--mx-font-body)}
`;

  function injectCSS(){
    var s=document.createElement('style');
    s.type='text/css'; s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  function html(){
    var host = document.getElementById('matrixApp');
    if(!host) return;
    host.className='mx-app'; host.setAttribute('lang','uk');
    host.innerHTML = [
      '<div class="mx-card">',
      '  <header class="mx-header">',
      '    <h1 class="mx-title">Матриця долі</h1>',
      '    <p class="mx-sub">Введи дату народження у форматі <b>ДД.ММ.РРРР</b></p>',
      '  </header>',
      '  <form class="mx-form" onsubmit="return false;">',
      '    <label class="mx-label" for="dob">Дата народження</label>',
      '    <div class="mx-inputrow">',
      '      <input id="dob" class="mx-input" type="text" inputmode="numeric" placeholder="13.10.1987" autocomplete="bday">',
      '      <button class="mx-btn" type="button" id="mxCalcBtn">Розрахувати</button>',
      '    </div>',
      '    <div class="mx-helpers">',
      '      <button class="mx-link" type="button" id="mxTodayBtn">Сьогодні? (тест)</button>',
      '      <button class="mx-link" type="button" id="mxCopyBtn">Скопіювати лінк з датою</button>',
      '      <span id="mxCopyNote" class="mx-note" aria-live="polite"></span>',
      '    </div>',
      '  </form>',
      '  <section class="mx-gridwrap">',
      '    <div class="mx-grid" aria-live="polite" aria-label="Сітка 3×3"></div>',
      '    <aside class="mx-side">',
      '      <h3 class="mx-blocktitle">Підсумки</h3>',
      '      <ul class="mx-stats" id="mxCounts"></ul>',
      '      <h3 class="mx-blocktitle">Лінії / Осі</h3>',
      '      <ul class="mx-lines" id="mxLines"></ul>',
      '      <h3 class="mx-blocktitle" style="margin-top:10px">Міні-тлумачення</h3>',
      '      <ul class="mx-brief" id="mxBrief"></ul>',
      '    </aside>',
      '  </section>',
      '  <footer class="mx-footer">',
      '    <small>Класична «матриця Піфагора» (1–9; лінії 123,456,789; 147,258,369; 159,357). Нулі не враховуються.</small>',
      '  </footer>',
      '</div>'
    ].join('');
  }

  var DIGIT_MEANING = {
    '1':'Воля / лідерство / самостійність',
    '2':'Енергія / емоції / взаємодія',
    '3':'Творчість / самовираження / мова',
    '4':'Практичність / системність / дім',
    '5':'Центр / гармонія / баланс',
    '6':'Відповідальність / турбота / сервіс',
    '7':'Духовний пошук / глибинність / інтуїція',
    '8':'Матеріальна сила / вплив / реалізація',
    '9':'Мислення / мудрість / глобальність'
  };

  var LINES = [
    {key:'123', label:'1-2-3 Характер', text:'Хребет особистості: воля, енергія, творчий вираз.'},
    {key:'456', label:'4-5-6 Сімʼя/Побут', text:'Стабільність, гармонія, відповідальність у побуті.'},
    {key:'789', label:'7-8-9 Звички/Дисципліна', text:'Внутрішні правила, контроль, ритуали.'},
    {key:'147', label:'1-4-7 Ціль/Воля', text:'Цілеспрямованість від ідеї до форми через сенс.'},
    {key:'258', label:'2-5-8 Енергія/Потенціал', text:'Емоція → баланс → результат/гроші.'},
    {key:'369', label:'3-6-9 Духовність/Творчість', text:'Слово, служіння, мудрість — творча вісь.'},
    {key:'159', label:'1-5-9 Інтуїція/Удача', text:'Коли воля в балансі — зʼявляється везіння.'},
    {key:'357', label:'3-5-7 Карма/Талант', text:'Уроки інтуїції і слова; талант через усвідомлення.'}
  ];

  function $(sel, ctx){ return (ctx||document).querySelector(sel); }
  function $all(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }

  var mapping = [
    {digit:'1', pos:'(1,1)'}, {digit:'4', pos:'(1,2)'}, {digit:'7', pos:'(1,3)'},
    {digit:'2', pos:'(2,1)'}, {digit:'5', pos:'(2,2)'}, {digit:'8', pos:'(2,3)'},
    {digit:'3', pos:'(3,1)'}, {digit:'6', pos:'(3,2)'}, {digit:'9', pos:'(3,3)'}
  ];

  function buildGrid(){
    var grid = $('.mx-grid');
    grid.innerHTML = mapping.map(function(m){
      return '<div class="mx-cell" data-digit="'+m.digit+'">'+
             '  <div class="mx-cellhead">'+
             '    <span class="mx-digit">'+m.digit+'</span>'+
             '    <span class="mx-pos">'+m.pos+'</span>'+
             '  </div>'+
             '  <div class="mx-value mx-empty">—</div>'+
             '</div>';
    }).join('');
  }

  function buildSide(){
    var counts = $('#mxCounts'); counts.innerHTML='';
    for(var d=1; d<=9; d++){
      counts.insertAdjacentHTML('beforeend',
        '<li class="mx-stat">'+
          '<span class="mx-k">Кількість '+d+'</span>'+
          '<div class="mx-meter"><i id="mxMeter'+d+'"></i></div>'+
          '<span class="mx-v" id="mxCnt'+d+'">0</span>'+
        '</li>');
    }
    var lines = $('#mxLines'); lines.innerHTML='';
    LINES.forEach(function(l){
      lines.insertAdjacentHTML('beforeend',
        '<li class="mx-line">'+
          '<span class="mx-k">'+l.label+'</span>'+
          '<div class="mx-meter"><i id="mxLine'+l.key+'"></i></div>'+
          '<span class="mx-v" id="mxVal'+l.key+'">0</span>'+
        '</li>');
    });
  }

  function sanitizeDob(str){
  if(!str) return null;
  var s = str.trim().replace(/[\/\-]/g,'.');
  var m = s.match(/^(\d{1,2})\.(\d{1,2})\.(\d{2,4})$/);
  if(!m) return null;
  var dd = m[1].padStart(2,'0'),
      mm = m[2].padStart(2,'0'),
      yyyy = m[3];
  if(yyyy.length===2){ yyyy = (parseInt(yyyy,10) >= 30 ? '19':'20') + yyyy; }
  // Перевірка локально (без UTC-зсувів Safari)
  var dt = new Date(+yyyy, +mm-1, +dd);
  if(dt.getFullYear()!=+yyyy || (dt.getMonth()+1)!=+mm || dt.getDate()!=+dd) return null;
  return dd+'.'+mm+'.'+yyyy;
}

  }

  function countsFromDob(dob){
    var digits = dob.replace(/\D/g,'').split('');
    var counts = {}; for(var i=1;i<=9;i++) counts[String(i)]=0;
    digits.forEach(function(d){ if(d!=='0') counts[d]++; }); // нулі ігноруємо
    return counts;
  }

  function fillGrid(counts){
    $all('.mx-cell').forEach(function(cell){
      var d = cell.getAttribute('data-digit');
      var v = Array(counts[d]||0).fill(d).join('');
      var box = $('.mx-value', cell);
      if(v){ box.textContent = v; box.classList.remove('mx-empty'); }
      else { box.textContent = '—'; box.classList.add('mx-empty'); }
    });
  }

  function updateMeters(counts){
    for(var d=1; d<=9; d++){
      var val = counts[String(d)]||0;
      $('#mxCnt'+d).textContent = val;
      $('#mxMeter'+d).style.width = Math.min(100, val*25) + '%';
    }
  }

  function calcLines(counts){
    function present(d){ return counts[d]>0 ? 1 : 0; }
    var results = {};
    LINES.forEach(function(l){
      var total = l.key.split('').map(present).reduce(function(a,b){return a+b;},0);
      results[l.key]=total;
      $('#mxVal'+l.key).textContent = total+'/3';
      $('#mxLine'+l.key).style.width = (total/3*100)+'%';
    });
    return results;
  }

  function brief(counts, lineRes){
    var ul = $('#mxBrief'); ul.innerHTML='';
    // цифри, що присутні
    Object.keys(counts).forEach(function(k){
      if(counts[k]>0){
        ul.insertAdjacentHTML('beforeend',
          '<li><strong>'+k+' — '+DIGIT_MEANING[k]+'</strong><br>'+
          (counts[k]===1 ? 'Базова якість проявлена.' :
           counts[k]===2 ? 'Підсилена риса; легше вдається у побуті.' :
           counts[k]===3 ? 'Сильний акцент; варто тримати баланс.' :
           'Надлишок енергії — скеровуй у корисні ритуали.')+
          '</li>');
      }
    });
    // активні лінії (3/3)
    Object.keys(lineRes).forEach(function(key){
      if(lineRes[key]===3){
        var meta = LINES.find(function(x){return x.key===key;});
        ul.insertAdjacentHTML('beforeend',
          '<li><span class="mx-badge">активна лінія</span> <strong>'+meta.label+'</strong><br>'+meta.text+'</li>');
      }
    });
  }

  function setUrl(dob){
    try{
      var url = new URL(location.href);
      url.searchParams.set('dob', dob);
      history.replaceState(null,'',url.toString());
    }catch(e){}
  }

  function copyLink(){
    var el = $('#mxCopyNote');
    var txt = location.href;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(function(){
        el.textContent = 'Посилання скопійовано ✔';
        setTimeout(function(){ el.textContent=''; }, 1600);
      }, function(){
        el.textContent = 'Не вдалось скопіювати. Спробуй вручну.';
        setTimeout(function(){ el.textContent=''; }, 2000);
      });
    }else{
      el.textContent = 'Скопіюй вручну з адресного рядка.';
      setTimeout(function(){ el.textContent=''; }, 2000);
    }
  }

  function calc(){
    var input = $('#dob');
    var norm = sanitizeDob(input.value);
    if(!norm){
      input.focus();
      input.setAttribute('aria-invalid','true');
      input.style.borderColor = 'var(--mx-bad)';
      return;
    }
    input.removeAttribute('aria-invalid');
    input.style.borderColor = '';
    var counts = countsFromDob(norm);
    fillGrid(counts);
    updateMeters(counts);
    var lines = calcLines(counts);
    brief(counts, lines);
    setUrl(norm);
  }

  function today(){
    var dt = new Date();
    var dd = String(dt.getDate()).padStart(2,'0');
    var mm = String(dt.getMonth()+1).padStart(2,'0');
    var yyyy = dt.getFullYear();
    $('#dob').value = dd+'.'+mm+'.'+yyyy;
    calc();
  }

  function init(){
    injectCSS();
    html();
    buildGrid();
    buildSide();
    // Bind
    $('#mxCalcBtn').addEventListener('click', calc);
    $('#mxTodayBtn').addEventListener('click', today);
    $('#mxCopyBtn').addEventListener('click', copyLink);
    // URL ?dob=
    try{
      var u = new URL(location.href);
      var dob = u.searchParams.get('dob');
      if(dob){ $('#dob').value = dob; calc(); }
    }catch(e){}
  }

  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); }
  else { init(); }
// === Автоматичні крапки у полі дати народження ===
document.addEventListener('input', function (e) {
  if (e.target && e.target.id === 'dob') {
    let v = e.target.value.replace(/\D/g, ''); // залишаємо лише цифри
    if (v.length > 2 && v.length <= 4)
      v = v.slice(0, 2) + '.' + v.slice(2);
    else if (v.length > 4)
      v = v.slice(0, 2) + '.' + v.slice(2, 4) + '.' + v.slice(4, 8);
    e.target.value = v;
  }
});
})();
