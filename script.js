// แก้ไขรายการงานและ URL ปลายทางได้ที่นี่
const jobs = [
  {
    title: "ช่างซ่อมบำรุง",
    department: "Maintenance Technician",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=ช่างซ่อมบำรุง",
  },
  {
    title: "ช่างควบคุมเครื่องจักร",
    department: "Machine Control Technician",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=ช่างควบคุมเครื่องจักร",
  },
  {
    title: "เจ้าหน้าที่ปฏิบัติและควบคุมคุณภาพ",
    department: "Operations & Quality Control Officer",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=เจ้าหน้าที่ปฏิบัติและควบคุมคุณภาพ",
  },
  {
    title: "เจ้าหน้าที่ด่านตรวจ",
    department: "Checkpoint Officer",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=เจ้าหน้าที่ด่านตรวจ",
  },
  {
    title: "เจ้าหน้าที่",
    department: "Officer",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=เจ้าหน้าที่",
  },
  {
    title: "สนับสนุนการผลิต",
    department: "Production Support Staff",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=สนับสนุนการผลิต",
  },
  {
    title: "ต้นกำลัง",
    department: "Powerhouse Staff",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=ต้นกำลัง",
  },
  {
    title: "กลั่นและแยกไข",
    department: "Refining & Separation Staff",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=กลั่นและแยกไข",
  },
  {
    title: "ฝ่ายผลิต",
    department: "Production Staff",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=ฝ่ายผลิต",
  },
  {
    title: "คลังสินค้า",
    department: "Warehouse Staff",
    location: "สถานที่ปฏิบัติงานตามประกาศ",
    type: "งานประจำ",
    applicationUrl: "./application.html?position=คลังสินค้า",
  },
];

const jobList = document.querySelector("#job-list");

jobs.forEach((job, index) => {
  const link = document.createElement("a");
  link.className = "job-card";
  link.href = job.applicationUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `สมัครตำแหน่ง ${job.title}`);

  link.innerHTML = `
    <div class="job-card-top">
      <span class="job-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="job-type">${job.type}</span>
    </div>
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
