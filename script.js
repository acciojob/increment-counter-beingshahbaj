//your JS code here. If required.
document.getElementById('incrementBtn').addEventListener('click', function() {
      var counter = document.getElementById('counter');
      var count = parseInt(counter.textContent, 10);
      count++;
      counter.textContent = count;
      alert('Counter before increment: ' + count);
    });