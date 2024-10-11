const servicesData = [
  {
    id: 13,
    title: "Rhinoplasty (Nose reshaping)",
    description:
      "Rhinoplasty is a surgical procedure that reshapes or reconstructs the nose for either cosmetic or medical reasons. It can be performed to enhance facial harmony, improve proportions, or to address functional problems like breathing issues caused by structural abnormalities. The surgery can involve altering the bone, cartilage, or skin of the nose, depending on the patient's goals or needs. Recovery typically takes several weeks, and the results can be life-enhancing, improving both appearance and functionality.",
    image: "assets/img/iconic-box/rhinoplastyure.PNG",
    slug: "rhinoplasty",
    gallery: [
      "assets/img/gallary/rhinoplasty/6.jpeg",
      "assets/img/gallary/rhinoplasty/5.jpeg",
      "assets/img/gallary/rhinoplasty/4.jpeg",
      "assets/img/gallary/rhinoplasty/3.jpeg",
      "assets/img/gallary/rhinoplasty/2.jpeg",
      "assets/img/gallary/rhinoplasty/1.jpeg",
    ],
  },
  {
    id: 1,
    title: "Tonsillectomy (Tonsils removal)",
    description:
      "Tonsillectomy is a common surgical procedure that involves the removal of the tonsils, which are located at the back of the throat. This surgery is often recommended for individuals suffering from chronic tonsillitis, recurrent throat infections, or breathing problems such as sleep apnea. By removing the tonsils, patients can experience relief from frequent sore throats, improved sleep quality, and reduced infections. The procedure is typically performed under general anesthesia, and recovery involves a few days of rest, with symptoms like sore throat gradually subsiding.",
    image: "assets/img/iconic-box/Tonsillectomy.png",
    slug: "tonsillectomy",
    gallery: [
      "assets/img/gallary/tonsillectomy/3.jpeg",
      "assets/img/gallary/tonsillectomy/2.jpeg",
      "assets/img/gallary/tonsillectomy/1.jpeg",
    ],
  },
  {
    id: 12,
    title: "Thyroidectomy",
    description:
      "Thyroidectomy is the surgical removal of all or part of the thyroid gland, a butterfly-shaped gland located in the neck. This surgery is often performed to treat conditions like thyroid cancer, goiter, or hyperthyroidism (overactive thyroid). Depending on the reason for surgery, either a portion (partial thyroidectomy) or the entire gland (total thyroidectomy) may be removed. Patients who undergo thyroidectomy may need to take thyroid hormone replacement medication for life if the entire gland is removed. Recovery from thyroidectomy typically involves a brief hospital stay, followed by a few weeks of rest.",
    image: "assets/img/iconic-box/Thyroidectomy.png",
    slug: "thyroidectomy",
    gallery: [
      "assets/img/gallary/thyroidectomy/1.jpeg",
      "assets/img/gallary/thyroidectomy/2.jpeg",
      "assets/img/gallary/thyroidectomy/3.jpeg",
      "assets/img/gallary/thyroidectomy/4.jpeg",
    ],
  },
  {
    id: 3,
    title: "Myringotomy - Grommets Insertion",
    description:
      "This procedure is often performed in children with chronic ear infections or fluid build-up behind the eardrums. During the surgery, small incisions are made in both eardrums (myringotomy) and grommets (small tubes) are inserted to facilitate fluid drainage and prevent future fluid accumulation. The tubes usually fall out on their own after several months as the ear heals. Patients benefit from improved hearing and fewer ear infections.",
    image: "assets/img/iconic-box/Bilateral Myringotomy.png",
    slug: "myringotomy-grommets-insertion",
    gallery: [
      "assets/img/gallary/myringotomy/1.webp",
      "assets/img/gallary/myringotomy/2.webp",
    ],
  },
  {
    id: 16,
    title: "Neck Dissection",
    description:
      "A surgical procedure where lymph nodes and surrounding tissue in the neck are removed to treat or prevent the spread of head and neck cancers. This procedure can be performed to address cancers such as thyroid, oral, or laryngeal cancers. There are different types of neck dissections—radical, modified, and selective—each varying based on the extent of tissue removed. Recovery can involve careful monitoring of wound healing, potential physical therapy, and adjustments to lifestyle to avoid infections.",
    image: "assets/img/iconic-box/Neck Dissection.png",
    slug: "neck-dissection",
    gallery: [
      "assets/img/gallary/neck-dissection/1.png",
      "assets/img/gallary/neck-dissection/2.png",
      "assets/img/gallary/neck-dissection/3.png",
    ],
  },
  {
    id: 2,
    title: "Adenoidectomy",
    description:
      "Adenoidectomy is a surgical procedure to remove the adenoids, which are small masses of lymphoid tissue located at the back of the nasal passage. The adenoids can become enlarged or chronically infected, leading to issues like nasal obstruction, snoring, or recurrent ear infections. This procedure is commonly performed in children who experience frequent upper respiratory infections or breathing difficulties. Adenoidectomy is often combined with tonsillectomy and is typically performed under general anesthesia, with patients recovering within a few days.",
    image: "assets/img/iconic-box/Adenoidectomy.png",
    slug: "adenoidectomy",
  },
  {
    id: 5,
    title: "Septoplasty ( For nasal blockage)",
    description:
      "Septoplasty is a surgical procedure designed to correct a deviated nasal septum, a condition in which the bone and cartilage dividing the nasal cavity are off-center or crooked. This can lead to nasal obstruction, difficulty breathing, and chronic sinus infections. During the procedure, the septum is straightened and repositioned, improving airflow and reducing nasal congestion. Septoplasty is often performed in conjunction with other nasal surgeries, such as rhinoplasty, and recovery usually takes a few weeks with noticeable improvements in breathing and comfort.",
    image: "assets/img/iconic-box/Septoplasty (2).png",
    slug: "septoplasty",
  },
  {
    id: 6,
    title: "Turbinoplasty",
    description:
      "Turbinoplasty is a surgical procedure that reduces the size of the turbinates, which are structures within the nasal passage that help humidify and filter the air we breathe. When the turbinates become enlarged, they can block airflow, causing breathing difficulties and nasal congestion. This surgery involves reducing the size of the turbinates to improve nasal airflow and relieve symptoms of nasal obstruction. Turbinoplasty is often performed in conjunction with other nasal surgeries like septoplasty. Recovery is generally quick, with most patients experiencing significant improvements in breathing.",
    image: "assets/img/iconic-box/Turbinoplasty.png",
    slug: "turbinoplasty",
  },
  {
    id: 7,
    title: "SMD (Submucous Deviation)",
    description:
      "Submucous Deviation (SMD) refers to the deviation of the nasal septum beneath the mucous membrane lining of the nose, which can cause nasal obstruction and difficulty breathing. Surgery for SMD involves correcting this structural anomaly without altering the outer appearance of the nose. By addressing the underlying deviation, this procedure can significantly improve airflow and reduce symptoms of nasal congestion. It is typically performed under general anesthesia, with patients recovering within a few weeks and experiencing improved breathing function.",
    image: "assets/img/iconic-box/SMD (Submucous Deviation).png",
    slug: "smd",
  },
  {
    id: 8,
    title: "Partial Turbinectomy",
    description:
      "Partial Turbinectomy is a surgical procedure aimed at removing a portion of the nasal turbinates, which are responsible for filtering and humidifying the air as it passes through the nasal passages. When the turbinates are enlarged or inflamed, they can obstruct airflow and cause breathing problems. By removing part of the turbinates, this surgery helps to restore proper airflow and reduce nasal obstruction. It is often recommended for patients with chronic nasal congestion that does not respond to medical treatment. Recovery typically involves a short period of rest, with significant improvements in breathing post-surgery.",
    image: "assets/img/iconic-box/Partial Turbinectomy.png",
    slug: "partial-turbinectomy",
  },
  {
    id: 9,
    title: "DL (Direct Laryngoscopy)",
    description:
      "Direct Laryngoscopy is a procedure that allows a doctor to examine the larynx (voice box) and vocal cords directly using a special instrument called a laryngoscope. It is often used for diagnostic purposes, such as evaluating hoarseness, chronic cough, or suspected cancer. This procedure can also be therapeutic, allowing for the removal of growths or foreign objects from the larynx. Performed under general anesthesia, Direct Laryngoscopy provides a clear view of the airway and vocal cords, enabling accurate diagnosis and treatment. Recovery is usually swift, with most patients returning to normal activities within a day or two.",
    image: "assets/img/iconic-box/DL (Direct Laryngoscopy).png",
    slug: "direct-laryngoscopy",
  },
  {
    id: 10,
    title: "Biopsy",
    description:
      "A biopsy is a medical procedure where a small sample of tissue is removed from the body for examination under a microscope. It is used to diagnose or rule out various conditions, including cancer, infections, and inflammatory diseases. Biopsies can be performed on almost any part of the body, including skin, organs, or bone. The procedure can be done using a needle, endoscope, or during surgery, depending on the location and type of tissue needed. The results of a biopsy can provide critical information for diagnosing diseases and planning treatment.",
    image: "assets/img/iconic-box/Biopsy.png",
    slug: "biopsy",
  },
  {
    id: 11,
    title: "Submandibular Gland Excision",
    description:
      "Submandibular Gland Excision is the surgical removal of one of the submandibular glands, which are located beneath the lower jaw. This procedure is usually performed to treat chronic infections, stones blocking the gland, or tumors. The surgery involves making an incision under the jaw to access and remove the gland. While relatively straightforward, this procedure carries some risks, including damage to nearby nerves that control facial movement. Recovery typically involves a short hospital stay, with patients resuming normal activities within a few weeks.",
    image: "assets/img/iconic-box/Submandibular Gland Excision.png",
    slug: "submandibular-gland-excision",
  },

  {
    id: 15,
    title: "Parotidectomy",
    description:
      "Parotidectomy is the surgical removal of the parotid gland, the largest of the salivary glands, located just in front of the ear. This surgery is usually performed to remove a tumor, which may be benign or malignant. The procedure involves making an incision in front of the ear and removing all or part of the gland. One of the risks of parotidectomy is potential injury to the facial nerve, which runs through the gland and controls facial movement. Recovery typically includes a hospital stay of one or two days, with most patients resuming normal activities after several weeks.",
    image: "assets/img/iconic-box/Parotidectomy.png",
    slug: "parotidectomy",
  },

  {
    id: 17,
    title: "Tympanoplasty (Repair of Ear drum)",
    description:
      "A delicate surgical procedure aimed at repairing a perforation in the tympanic membrane (eardrum) or reconstructing the small bones of the middle ear. This surgery is essential in improving hearing and preventing recurrent ear infections by restoring the natural barrier of the ear. Tympanoplasty is usually recommended for patients with chronic ear infections or trauma-induced perforations. The recovery process includes protecting the ear from water and avoiding strenuous activities until healing is complete.",
    image: "assets/img/iconic-box/Tympanoplasty.png",
    slug: "tympanoplasty",
  },
  {
    id: 18,
    title: "Mastoidectomy",
    description:
      "Mastoidectomy involves the removal of diseased air cells within the mastoid bone, located just behind the ear. This procedure is typically performed to treat chronic ear infections that have spread to the mastoid bone or to remove cholesteatoma, an abnormal growth of skin cells in the ear. Post-surgical care involves ear protection, regular follow-up appointments, and sometimes the use of hearing aids if the surgery impacts hearing.",
    image: "assets/img/iconic-box/Mastoidectomy.png",
    slug: "mastoidectomy",
  },
  {
    id: 19,
    title: "Stapedotomy",
    description:
      "A precise microsurgical procedure designed to restore hearing in patients with otosclerosis, a condition where the stapes bone in the middle ear becomes immobilized. In a stapedotomy, the surgeon replaces the stapes with a prosthetic device to improve the transmission of sound waves. After the procedure, patients usually experience a gradual improvement in hearing over weeks or months, and they must avoid activities that could disturb the ear during recovery.",
    image: "assets/img/iconic-box/Stapedotomy.png",
    slug: "stapedotomy",
  },
  {
    id: 20,
    title: "Laryngectomy",
    description:
      "This is a major surgical procedure where the larynx (voice box) is removed, usually due to laryngeal cancer. Following a laryngectomy, patients will breathe through an opening in the neck (a stoma) and may require rehabilitation for speech, including learning esophageal speech or using an electronic speech aid. Comprehensive post-operative care involves stoma care, speech therapy, and monitoring for recurrence of cancer.",
    image: "assets/img/iconic-box/Laryngectomy.png",
    slug: "laryngectomy",
  },

  {
    id: 23,
    title: "Parapharyngeal Tumor",
    description:
      "Parapharyngeal tumor surgery involves removing tumors located in the parapharyngeal space, a deep area of the neck near the throat. These tumors can be benign or malignant and often require careful surgical planning due to the complex anatomy of the area. The surgery aims to completely remove the tumor while preserving nearby structures, such as nerves and blood vessels.",
    image: "assets/img/iconic-box/parapharyngeal-tumor.png",
    slug: "parapharyngeal-tumor",
  },
  {
    id: 24,
    title: "Ranula Excision",
    description:
      "Ranula excision is the surgical removal of a ranula, a fluid-filled cyst that typically develops under the tongue due to blockage of the salivary glands. The procedure involves removing the cyst and, in some cases, the affected salivary gland to prevent recurrence.",
    image: "assets/img/iconic-box/ranula-excision.png",
    slug: "ranula-excision",
  },
  {
    id: 25,
    title: "Branchial Cyst",
    description:
      "Surgical removal of a branchial cyst, a congenital abnormality that appears as a lump on the side of the neck. Treatment is recommended to prevent infection or discomfort.",
    image: "assets/img/iconic-box/branchial-cyst.png",
    slug: "branchial-cyst",
  },
  {
    id: 26,
    title: "Foreign Body EAR",
    description:
      "Removal of foreign objects that may get lodged in the ear canal. This procedure is performed under local anesthesia to relieve discomfort and avoid potential ear damage.",
    image: "assets/img/iconic-box/foreign-body-ear.png",
    slug: "foreign-body-ear",
  },
  {
    id: 27,
    title: "Foreign Body NOSE",
    description:
      "Removal of foreign objects lodged in the nasal passages, which could cause breathing difficulties, infections, or discomfort.",
    image: "assets/img/iconic-box/foreign-body-nose.png",
    slug: "foreign-body-nose",
  },
  {
    id: 28,
    title: "Nasal Polyps",
    description:
      "Nasal polyp removal surgery is performed to eliminate soft, non-cancerous growths in the nasal passages or sinuses that cause breathing difficulties and frequent infections.",
    image: "assets/img/iconic-box/nasal-polyps.png",
    slug: "nasal-polyps",
  },

  {
    id: 22,
    title: "Pituitary Adenoma Surgery",
    description:
      "Pituitary adenomas are benign tumors located in the pituitary gland at the base of the brain. Surgery, often performed endoscopically through the nose (transsphenoidal surgery), aims to remove the tumor and alleviate pressure on surrounding structures. This surgery is typically required when the tumor affects vision or causes hormonal imbalances. Post-surgery, patients may need hormone replacement therapy and regular monitoring of hormone levels.",
    image: "assets/img/iconic-box/Pituitary Adenoma Surgery.png",
    slug: "pituitary-adenoma-surgery",
  },
  {
    id: 21,
    title: "CSF Leak Repair",
    description:
      "CSF (cerebrospinal fluid) leak repair is performed to stop the leakage of spinal fluid, which can occur due to trauma, surgical complications, or underlying health conditions. The repair can be done surgically or through less invasive techniques such as endoscopic procedures. CSF leaks are serious because they can lead to infections like meningitis. Post-operative care involves careful monitoring of neurological signs and sometimes a hospital stay for observation.",
    image: "assets/img/iconic-box/CSF Leak Repair.png",
    slug: "csf-leak-repair",
  },
  {
    id: 4,
    title:
      "Tonsillectomy, Adenoidectomy, and Bilateral Myringotomy in Single Setting",
    description:
      "This combined surgical procedure is often done in children with chronic tonsillitis, adenoid hypertrophy, and recurring ear infections. The tonsils, adenoids, and ear tubes are addressed in one session, minimizing the need for multiple surgeries. Recovery involves managing post-operative pain, monitoring for any signs of infection, and maintaining hydration and nutrition as the body heals.",
    image: "assets/img/iconic-box/combination of three procedures.png",
    slug: "combined-procedures",
  },
  {
    id: 12,
    title: "FESS(For Nasal polyps/Fungus))",
    description:
      "FESS is a minimally invasive surgical procedure used to treat chronic sinusitis or other sinus problems that do not respond to medical treatment. The surgeon uses an endoscope to visualize and remove blockages in the sinuses, allowing for better drainage and improved breathing. FESS offers quicker recovery times than traditional open surgeries, and patients typically experience reduced sinus infections and improved quality of life following the procedure.",
    image: "assets/img/iconic-box/FESS.png",
    slug: "fess",
  },
];

export default function handler(req, res) {
  res.status(200).json(servicesData);
}
