// แก้ไขรายการงานและ URL ปลายทางได้ที่นี่
const jobs = [
  {
    title: "เจ้าหน้าที่ธุรการ",
    department: "ฝ่ายสนับสนุนองค์กร",
    location: "กรุงเทพมหานคร",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=เจ้าหน้าที่ธุรการ",
  },
  {
    title: "เจ้าหน้าที่ประสานงาน",
    department: "ฝ่ายปฏิบัติการ",
    location: "กรุงเทพมหานคร",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=เจ้าหน้าที่ประสานงาน",
  },
  {
    title: "พนักงานบริการลูกค้า",
    department: "ฝ่ายลูกค้าสัมพันธ์",
    location: "กรุงเทพมหานคร",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=พนักงานบริการลูกค้า",
  },
];

const jobList = document.querySelector("#job-list");

jobs.forEach((job) => {
  const link = document.createElement("a");
  link.className = "job-card";
  link.href = job.applicationUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `สมัครตำแหน่ง ${job.title}`);

  link.innerHTML = `
    <span class="job-type">${job.type}</span>
    <h3>${job.title}</h3>
    <p>${job.department}<br>${job.location}</p>
    <span class="job-link">
      ดูรายละเอียดและสมัคร
      <span class="job-arrow" aria-hidden="true">→</span>
    </span>
  `;

  jobList.appendChild(link);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
