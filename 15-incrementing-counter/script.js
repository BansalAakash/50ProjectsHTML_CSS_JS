const counters = document.querySelectorAll(".counter");

const createInterval = (elem, limit) => {
  let cur = 0;
  const interval = limit / 300;
  const int = setInterval(() => {
    cur += 100;
    elem.innerText = cur;
    if (cur === limit) clearInterval(int);
  }, interval);
};

counters.forEach((counter) => {
  counter.innerText = "0";
  const target = +counter.getAttribute("data-target");
  createInterval(counter, target);
  //   const updateCounter = () => {
  //     const target = +counter.getAttribute("data-target");
  //     createInterval(counter, target);
  //   };
});
