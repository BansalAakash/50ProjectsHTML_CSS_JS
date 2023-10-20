const faqs = [
  {
    question: "Can I eat the decorative soap in the bathroom?",
    answer:
      "Technically, you can, but we strongly recommend you don't turn your spa day into a bubblegum challenge.",
  },
  {
    question:
      "Is it true that chocolate is a vegetable because it comes from cocoa beans?",
    answer:
      "Well, by that logic, ketchup is a smoothie because it comes from tomatoes. But no, chocolate is not a vegetable, sorry!",
  },
  {
    question: "Can I use my cat as a Wi-Fi booster?",
    answer:
      "While your cat might have some impressive 'purrformance' skills, it won't help with your Wi-Fi. Stick to technology for that one.",
  },
  {
    question: "What's the secret to time travel?",
    answer:
      "The secret to time travel is... to be born early or wait for the invention of a time machine. Patience, young time traveler!",
  },
  {
    question: "How can I lose weight without giving up pizza?",
    answer:
      "Step 1: Eat pizza. Step 2: Lift pizza. Repeat until strong enough to carry your own weight.",
  },
  {
    question: "Can I start a career as a professional napper?",
    answer:
      "Yes, you can! Just remember that it's a 'sleepy' market with fierce competition.",
  },
  {
    question: "What's the best way to impress a computer?",
    answer:
      "Show it your error messages. Computers love knowing they're not alone in making mistakes.",
  },
  {
    question: "How do I become a ninja?",
    answer:
      "Step 1: Wear all black. Step 2: Stand very still in the shadows. Step 3: Realize ninjas don't write FAQs, so you're probably not cut out for it.",
  },
  {
    question: "Is it possible to live on a diet of memes?",
    answer:
      "While memes provide nourishment for the soul, they won't satisfy your stomach. Sorry, you'll still need actual food.",
  },
  {
    question: "Can you recommend a good place to find a unicorn?",
    answer:
      "Of course! Have you tried looking in your wildest dreams? Unicorns tend to hang out there.",
  },
];
const faqContainer = document.querySelector(".faq-container");
faqs.forEach((faq) => {
  const html = `
        <div class="faq">
            <h3 class="faq-title">
                ${faq.question}
            </h3>
            <p class="faq-text">${faq.answer}</p>
            <button class="faq-toggle">
                <i class="fas fa-chevron-down"></i>
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
  faqContainer.insertAdjacentHTML("beforeend", html);
});
const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) =>
  button.addEventListener("click", () =>
    button.closest(".faq").classList.toggle("active")
  )
);
