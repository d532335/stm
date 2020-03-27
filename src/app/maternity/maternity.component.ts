import { Component, OnInit } from '@angular/core';
import { IFAQItem } from '../faqs/faqs.component';



@Component({
  selector: 'stm-maternity',
  templateUrl: './maternity.component.html',
  styleUrls: ['./maternity.component.scss']
})
export class MaternityComponent implements OnInit {
  maternityFAQs: IFAQItem[] = [
    {
      id: 1,
      title: "I'm in my 1st trimester (the 1st 13 weeks of pregnancy) can I schedule an appointment?",
      content: "Because of the tremendous physical and hormonal changes that occur, some find massage to be quite helpful in fighting fatigue and addressing stress.  Although the body has not begun the drastic changes that surface in the 2nd &amp; 3rd trimester, massage in the 1st trimester is a great way to begin preparing the body for pregnancy."
    },
    {
      id: 2,
      title: "How often will I need to come to find relief?",
      content: "I recommend clients bi-weekly appointments in the 2nd trimester and, depending on how much discomfort you are experiencing, once a week during the third trimester is wonderful.&nbsp;I have found that&nbsp;mothers-to-be appreciate their massage appointments because they know relief is at hand. They look forward to their weekly appointments to ease recurring problems, such as sciatica, leg cramps, and back pain."
    },
    {
      id: 3,
      title: "What should I expect during my massage session?",
      content: "Your comfort and safety is of utmost concern during your massage session.  You will be comfortably supported by positioning various pillows for proper support during pregnancy to accommodate a growing body."
    },
    {
      id: 4,
      title: "After I have my baby, how can massage help me?",
      content: "Post partum massage helps restore the body to it's pre-pregnancy condition and to address the stress of carrying and caring for a newborn.  It can speed recovery bringing relief to your sore muscles and helping you to relax. Abdominal massage can help shrink the uterus and relieve subcutaneous scar tissue."
    }
	];
  
  benefitsHeader: string = 'What are the benefits?';
  
  benefits: string[] = [
    "Emotional Support and Nurturing Touch",
    "Relaxation and Decreased Insomnia",
    "Stress Relief on Weight Bearing Joints, such as ankles, lower back and pelvis",
    "Neck and Back pain relief caused by muscle imbalance and weakness",
    "Assistance in Maintaining proper posture",
    "Preparing the muscles used during childbirth",
    "Reduced Swelling in hands and feet",
    "Lessened Sciatic pain",
    "Fewer calf cramps",
    "Headache and sinus congestion relief"
  ];

  complications: string[] = [
    "Heavy discharge (watery or bloody)",
    "Diabetes",
    "Contagious illness",
    "Fever",
    "Vomiting",
    "Unusual pain",
    "Pre-clampsia",
    "High Blood Pressure",
    "Morning Sickness",
    "Abdominal Pain",
    "Diarrhea",
    "Any Malignant Condition"
  ];

  constructor() { }

  ngOnInit() {
  }

}
