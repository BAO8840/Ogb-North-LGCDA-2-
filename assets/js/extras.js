/* Add-on behaviour: checklist, directory, school search, events. Safe on pages that lack these blocks. */
(function () {
  'use strict';
  var D = window.SITE_DATA || {};
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* 1. Transparency checklist, counted from published records */
  var sc = document.querySelector('[data-scorecard]');
  if (sc && D.checklist) {
    var done = 0, rows = D.checklist.map(function (c) {
      var ok = c[1](); if (ok) done++;
      return '<li class="' + (ok ? 'yes' : 'no') + '"><span class="pill">' + (ok ? 'Published' : 'Not yet published') + '</span> ' + esc(c[0]) + '</li>';
    }).join('');
    sc.innerHTML = '<p class="score"><strong>' + done + ' of ' + D.checklist.length + '</strong> records published</p>' +
      '<div class="meter" role="img" aria-label="' + done + ' of ' + D.checklist.length + ' published"><span style="width:' + (done / D.checklist.length * 100) + '%"></span></div><ul class="checklist">' + rows + '</ul>';
  }

  /* 2. Directory, grouped */
  var dir = document.querySelector('[data-directory]');
  if (dir && D.directory) {
    var groups = {}; D.directory.forEach(function (r) { (groups[r.g] = groups[r.g] || []).push(r); });
    dir.innerHTML = Object.keys(groups).map(function (g) {
      return '<h3>' + esc(g) + '</h3><div class="table-wrap"><table><tbody>' + groups[g].map(function (r) {
        return '<tr><th scope="row">' + esc(r.n) + '</th><td>' + esc(r.d) + '</td></tr>'; }).join('') + '</tbody></table></div>';
    }).join('');
  }

  /* 3. School search and filter */
  var box = document.querySelector('[data-schools]');
  if (box) {
    var q = document.getElementById('sc-q'), l = document.getElementById('sc-l'), n = document.querySelector('[data-count]');
    var draw = function () {
      var t = q.value.trim().toLowerCase(), lv = l.value;
      var r = (D.schools || []).filter(function (s) { return (!lv || s.level === lv) && (!t || (s.name + ' ' + s.ward).toLowerCase().indexOf(t) !== -1); });
      n.textContent = r.length + (r.length === 1 ? ' school found' : ' schools found');
      box.innerHTML = r.length ? '<div class="table-wrap"><table><thead><tr><th scope="col">School</th><th scope="col">Level</th><th scope="col">Ward</th><th scope="col">Ownership</th><th scope="col">Regulator</th><th scope="col">Quality</th></tr></thead><tbody>' +
        r.map(function (s) { return '<tr><td>' + esc(s.name) + '</td><td>' + esc(s.level) + '</td><td>' + esc(s.ward) + '</td><td>' + esc(s.ownership) + '</td><td>' + esc(s.regulator) + '</td><td>' + esc(s.quality) + '</td></tr>'; }).join('') + '</tbody></table></div>'
        : '<p class="empty">No school matches. Try another word or level.</p>';
    };
    q.addEventListener('input', draw); l.addEventListener('change', draw); draw();
  }

  /* 4. Events split into upcoming and past by today's date */
  document.querySelectorAll('[data-events]').forEach(function (b) {
    var today = new Date().toISOString().slice(0, 10), up = b.getAttribute('data-events') === 'upcoming';
    var r = (D.events || []).filter(function (e) { return up ? e.e >= today : e.e < today; }).sort(function (a, c) { return a.s < c.s ? -1 : 1; });
    var fmt = function (d) { return new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); };
    b.innerHTML = r.length ? '<div class="grid">' + r.map(function (e) {
      return '<article class="card"><h3>' + esc(e.t) + '</h3><p><strong>' + fmt(e.s) + (e.e !== e.s ? ' to ' + fmt(e.e) : '') + '</strong><br>' + esc(e.p) + '</p><p>' + esc(e.d) + '</p><p><small>' + esc(e.k) + ' · ' + esc(e.o) + '</small></p></article>';
    }).join('') + '</div>' : '<p class="empty">' + (up ? 'No upcoming events yet. Submit one below.' : 'No past events yet.') + '</p>';
  });
})();
