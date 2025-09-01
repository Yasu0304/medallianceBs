function submitHandler(event) {
  event.preventDefault(); // 阻止表單預設送出

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("mailInput").value;
  const comments = document.getElementById("floatingTextarea").value;

  const subject = `Contact - ${firstName} ${lastName}`;
  const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nComments:\n${comments}`;

  const mailto = `mailto:support@medalliance.com.tw?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const link = document.getElementById("mailTo");
  link.href = mailto;
  link.click();

  // ✅ 自動清空表單
  document.getElementById("contactForm").reset();
}
