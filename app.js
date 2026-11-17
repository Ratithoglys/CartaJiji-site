// Démo CartaJiji — paquet de 6 cartes, mécanique Leitner simplifiée :
// tout démarre en boîte 2, « Je savais ! » envoie en boîte 3 (maîtrisé),
// « À revoir » renvoie en boîte 1 et la carte revient plus loin dans le paquet.
(function () {
  var deck = [
    { badge: 'Multiplication', q: '7 × 8', a: '56', d: '7 × 8 = 56' },
    { badge: 'Géographie', q: 'Capitale de la France', a: 'Paris', d: 'Paris — capitale de la France' },
    { badge: 'Langues · Anglais', q: 'dog', a: 'chien', d: 'dog → le chien' },
    { badge: 'Géographie', q: 'Département 33', a: 'Gironde', d: '33 — Gironde, préfecture Bordeaux' },
    { badge: 'Histoire', q: 'Capitale de l’Empire byzantin', a: 'Constantinople', d: 'Constantinople, aujourd’hui Istanbul' },
    { badge: 'Langues · Espagnol', q: 'la casa', a: 'la maison', d: 'la casa → la maison' }
  ];

  var queue = deck.map(function (c, i) { return { card: c, box: 2, index: i }; });
  var current = null;
  var position = 0;

  var el = {
    card: document.getElementById('flashcard'),
    badge: document.getElementById('card-badge'),
    badgeBack: document.getElementById('card-badge-back'),
    question: document.getElementById('card-question'),
    answer: document.getElementById('card-answer'),
    detail: document.getElementById('card-detail'),
    review: document.getElementById('btn-review'),
    known: document.getElementById('btn-known'),
    next: document.getElementById('btn-next'),
    progress: document.getElementById('demo-progress'),
    done: document.getElementById('demo-done'),
    restart: document.getElementById('btn-restart'),
    c1: document.getElementById('count-1'),
    c2: document.getElementById('count-2'),
    c3: document.getElementById('count-3')
  };

  function counts() {
    var n = { 1: 0, 2: 0, 3: 0 };
    queue.forEach(function (item) { n[item.box]++; });
    el.c1.textContent = n[1];
    el.c2.textContent = n[2];
    el.c3.textContent = n[3];
    return n;
  }

  function show(item) {
    current = item;
    el.card.classList.remove('flipped');
    el.badge.textContent = item.card.badge;
    el.badgeBack.textContent = item.card.badge;
    el.question.textContent = item.card.q;
    el.answer.textContent = item.card.a;
    el.detail.textContent = item.card.d;
    el.review.disabled = true;
    el.known.disabled = true;
    el.progress.textContent = 'Carte ' + (position + 1) + ' / ' + deck.length + ' — paquet de démo';
  }

  function nextCard() {
    var remaining = queue.filter(function (item) { return item.box !== 3; });
    if (!remaining.length) {
      el.done.hidden = false;
      el.progress.textContent = 'Paquet terminé — 6 / 6 maîtrisées';
      el.review.disabled = true;
      el.known.disabled = true;
      el.next.disabled = true;
      return;
    }
    position = (position + 1) % remaining.length;
    show(remaining[position % remaining.length]);
    counts();
  }

  function evaluate(known) {
    if (!current) return;
    if (known) {
      current.box = 3;
    } else {
      current.box = 1;
      // Carte ratée : elle revient plus loin dans le paquet.
      var i = queue.indexOf(current);
      queue.splice(i, 1);
      queue.splice(Math.min(i + 2, queue.length), 0, current);
    }
    nextCard();
  }

  el.card.addEventListener('click', function () {
    el.card.classList.toggle('flipped');
    var flipped = el.card.classList.contains('flipped');
    el.review.disabled = !flipped;
    el.known.disabled = !flipped;
  });
  el.card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.card.click(); }
  });
  el.review.addEventListener('click', function () { evaluate(false); });
  el.known.addEventListener('click', function () { evaluate(true); });
  el.next.addEventListener('click', nextCard);
  el.restart.addEventListener('click', function () {
    queue = deck.map(function (c, i) { return { card: c, box: 2, index: i }; });
    position = 0;
    el.done.hidden = true;
    el.next.disabled = false;
    show(queue[0]);
    counts();
  });

  show(queue[0]);
  counts();
})();
